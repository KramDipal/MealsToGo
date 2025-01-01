import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
    background-color: pink;
  margin-top: ${StatusBar.currentHeight}px;

`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
`;


export const RestaurantScreen = () => {  
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
    return(

        <SafeArea>                
              <SearchContainer>
                  <Searchbar/>
              </SearchContainer>
                <RestaurantList

                    data={restaurants}

                    renderItem={({ item }) => (
                      <Spacer position="bottom" size="large">
                        <RestaurantInfoCard restaurant={item} />
                      </Spacer>
                    )}

                    keyExtractor={item => item.name}
                    contentContainerStyle={{padding: 16}}
                />
          </SafeArea >

  );
};
