import React from "react";
//import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";



const Title = styled.Text`
  padding: 16px;
`;


export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = "Pizza Restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table.jpg",
        ],
        address = "100 some random street",
        isOpenNow = "8:00 AM - 9:00 PM",
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <Card elevation={5} style={styles.card}>
          <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
          <Title>{name}</Title>
        </Card>
      );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
    //title: { padding: 16 },
  });
    
