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

import SearchBar from "../../globalComponents/SearchBar/SearchBar";
import CardCity from "./components/CardCity/CardCity";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import styles from "./ListCitiesStyles";

const ListCities = ({ navigation, route }) => {
  const searchedCity = route.params ? route.params.searchedCity : '';
  const userObj = useSelector(state => state.user);

  const dispatch = useDispatch();
  const addCityState = (city) => dispatch(addNewCity(city));

  const renderUserCities = () => {
    if (userObj && userObj.addedCities && userObj.addedCities.length > 0) {
      return (
        <FlatList
          data={[].fill.call({ length: 10 }, userObj.addedCities[0])}
          renderItem={({ item }) => (<CardCity city={item} />)}
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
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar value={searchedCity} onPress={() => navigation.navigate('Search')} />
        <TouchableOpacity style={styles.settingIcon} onPress={() => navigation.navigate("Search")}>
          <Icon name={'cog'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {renderUserCities()}
      </View>
      {/* <TouchableOpacity onPress={() => clean()}>
        <Text>Remove all</Text>
      </TouchableOpacity>*/}
      <TouchableOpacity onPress={() => saveNewCity('Belo Horizonte')}>
        <Text>ADD CITY</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListCities;