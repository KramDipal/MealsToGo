import React, { useContext, useState } from "react";
import { StatusBar, SafeAreaView, FlatList, Pressable, TouchableOpacity } from "react-native";

import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.components";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { colors } from "../../../Intrastructure/theme/colors";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

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
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  const navigation = useNavigation();
  // console.log('navigation:', navigation);
    return(

        <SafeArea>                
             {isLoading && (
                <LoadingContainer>
                  <Loading size={50} animating={true} color={colors.bg.quaternary}/>
                </LoadingContainer>
              )}

                <Search
                  isFavouritesToggled={isToggled}
                  onFavouritesToggle={() => setIsToggled(!isToggled)}
                />
                {isToggled && (
                  <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
                )}


                <RestaurantList
                    data={restaurants}

                    renderItem={({ item }) => (                      
  
                      <TouchableOpacity onPress={() =>
                        navigation.navigate("RestaurantDetails", {
                          restaurant: item,
                        })}
                      >
                        <Spacer position="bottom" size="large"> 
                          <RestaurantInfoCard restaurant={item} /> 
                        </Spacer> 
                      </TouchableOpacity>

                      // </Pressable>
                    )}

                    keyExtractor={item => item.name}
                    contentContainerStyle={{padding: 16}}
                />
          </SafeArea >

  );
};
