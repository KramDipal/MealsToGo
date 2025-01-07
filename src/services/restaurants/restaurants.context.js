import React, { useState, useContext, createContext, useEffect, useMemo } from "react";

import {
    restaurantsRequest,
    restaurantsTransform,
  } from "./restaurants.service";


 import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (loc) => {
      setRestaurants([]);
        setIsLoading(true);
        setTimeout(() => {
          restaurantsRequest(loc)
            .then(restaurantsTransform)
            .then((results) => {
              setIsLoading(false);
              setRestaurants(results);
            })
            .catch((err) => {
              setIsLoading(false);
              setError(err);
            });
       }, 1000);
      };

      useEffect(() => {
        if (location) {
                    // console.log(location);
          const locationString = `${location.lat},${location.lng}`;

          retrieveRestaurants(locationString);
        }
      }, [location]);
      
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        isLoading: isLoading,
        error: error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};