import React, { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList} from "react-native";

import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { colors } from "../../../Intrastructure/theme/colors";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
    background-color: pink;
  margin-top: ${StatusBar.currentHeight}px;

`;


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
`;

//For Loading Indicator
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantScreen = () => {  
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  //console.log(error);
    return(

        <SafeArea>                
             {isLoading && (
                <LoadingContainer>
                  <Loading size={50} animating={true} color={colors.bg.quaternary}/>
                </LoadingContainer>
              )}

                <Search />
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
