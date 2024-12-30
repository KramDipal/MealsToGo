import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

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


export const RestaurantScreen = () => (

       <SafeArea>                
            <SearchContainer>
                <Searchbar/>
             </SearchContainer>

               <RestaurantList

                  data={[
                    {name: 1}, 
                    {name: 2}, 
                    {name: 3}, 
                    {name: 4}, 
                    {name: 5}, 
                    {name: 6}]}

                  renderItem={() => (
                    <Spacer position="bottom" size="large">
                      <RestaurantInfoCard/>
                    </Spacer>
                  )}

                  keyExtractor={item => item.name}
                  contentContainerStyle={{padding: 16}}
              />

        </SafeArea >

);
