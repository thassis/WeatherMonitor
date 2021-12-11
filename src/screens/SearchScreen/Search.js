import React from "react";
import { useSelector } from "react-redux";

import { Text } from 'react-native';

const Search = () => {
  const userCities = useSelector(state => state.cities)

  console.log('cities', userCities);
  return (
    <Text>Search</Text>
  );
}

export default Search;