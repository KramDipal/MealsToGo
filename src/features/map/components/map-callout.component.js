import React from "react";
// import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);