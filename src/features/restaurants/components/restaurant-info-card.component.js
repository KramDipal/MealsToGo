import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary}
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.success};
  `;


export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = "Kiko's Pizza Restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg",
        ],
        address = "100 some random street in the Milky Way",
        isOpenNow = "Open @ 8:00 AM - 10:00 PM",
        rating = 4,
        isClosedTemporarily,
      
        
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
          <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
      );
};