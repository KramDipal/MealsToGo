import { Address, Rating } from "../../features/restaurants/components/restaurant-info-card.styles";
import { mocks, mockImages } from "./mock";
import camelize from "camelize";


// export const restaurantsRequest = (location = "43.653225,-79.383186") => {
  export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};


export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
          });

          //to the get the correct address/ vicinity
          //console.log(restaurant.name);
          
          //console.log(restaurant.vicinity);
          restaurant.address = restaurant.vicinity;

          //console.log(restaurant.rating);
          restaurant.rating = restaurant.rating;

      return {
        ...restaurant,
        // Address: restaurant.vicinity,
        // Rating: restaurant.rating,
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      };
    });
  
    return camelize(mappedResults);
  };