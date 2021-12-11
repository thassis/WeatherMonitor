import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import { addNewCity } from "../../redux/actions/userActions";
import { storeNewCity, clean } from "./functions/services";

const ListCities = ({ navigation }) => {
  const userObj = useSelector(state => state.user);

  const dispatch = useDispatch();
  const addCityState = (city) => dispatch(addNewCity(city));

  const renderUserCities = () => {
    if (userObj && userObj.addedCities && userObj.addedCities.length > 0) {
      return (
        <FlatList
          data={userObj.addedCities}
          renderItem={({ item, index }) => (
            <View key={item + index}>
              <Text>{item.name + " " + item.temp}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      );
    }
    return (
      <Text>Não há cidades adicionadas</Text>
    )
  }

  const saveNewCity = async (city) => {
    await storeNewCity(userObj, city);
    addCityState(city);
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => clean()}>
        <Text>Remove all</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => saveNewCity('Belo Horizonte')}>
        <Text>ADD CITY</Text>
      </TouchableOpacity>
      {renderUserCities()}
    </View>
  );
}

export default ListCities;