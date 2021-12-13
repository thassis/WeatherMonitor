import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addNewCity, removeCity } from "../../redux/actions/userActions";
import { storeNewCity, removeStoragedCity } from "./functions/services";
import { getWeatherCity } from "../SplashScreen/functions/services";

import SearchBar from "../../globalComponents/SearchBar/SearchBar";
import CardCity from "./components/CardCity/CardCity";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import styles from "./ListCitiesStyles";
import colors from "../../utils/colors";

const ListCities = ({ navigation, route }) => {
  const userObj = useSelector(state => state.user);
  const dispatch = useDispatch();
  const addCityState = (city) => dispatch(addNewCity(city));
  const removeCityState = (city) => dispatch(removeCity(city));

  const [searchedCityName, setSearchedCityName] = useState(route.params ? route.params.searchedCityName : '');
  const [searchedWeatherCity, setSearchedWeatherCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkCityInList = (cityName) => {
    const city = userObj.addedCities.find(el => el.name.toUpperCase() === cityName.toUpperCase())
    return city ? true : false;
  }

  useEffect(() => {
    const searchValue = route.params ? route.params.searchedCityName : '';
    if (searchValue) {
      async function getCityData() {
        setLoading(true);
        const weatherCity = await getWeatherCity({ name: searchValue, isFavorite: false });
        console.log('is here so', searchValue);
        weatherCity.isAdded = checkCityInList(weatherCity.name);
        setSearchedWeatherCity(weatherCity);
        setSearchedCityName(searchValue);
        setLoading(false);
      }
      getCityData();
    }
  }, [route]);

  useEffect(() =>
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    }),
    [navigation]
  );

  const renderUserCities = () => {
    if (loading) {
      return (
        <ActivityIndicator size="large" color={colors.primaryBlue} />
      )
    }

    if (searchedCityName) {
      if (searchedWeatherCity) {
        return (
          <CardCity
            city={searchedWeatherCity}
            alreadyAdded={searchedWeatherCity.isAdded}
            saveNewCity={(city) => saveNewCity(city)}
            removeCity={(cityName) => deleteCity(cityName)}
            fromSearch
          />
        );
      } else {
        return (<Text>Não encontramos essa cidade</Text>)
      }
    }
    if (userObj && userObj.addedCities && userObj.addedCities.length > 0) {
      return (
        <FlatList
          data={userObj.addedCities}
          renderItem={({ item }) => (
            <CardCity
              city={item}
              fromSearch={false}
              removeCity={(cityName) => deleteCity(cityName)}
            />
          )}
        />
      );
    }
    return (
      <Text>Não há cidades adicionadas</Text>
    )
  }

  const saveNewCity = async (city) => {
    console.log('store', city)
    await storeNewCity(userObj, city.name);
    addCityState(city);
    resetScreen();
  }

  const deleteCity = async (cityName) => {
    await removeStoragedCity(userObj, cityName);
    removeCityState(cityName);
    resetScreen()
  }

  const resetScreen = () => {
    console.log('reset screen');
    setSearchedCityName('');
    setSearchedWeatherCity(null);
    navigation.setParams({ searchedCityName: '' });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      <View style={styles.header}>
        <SearchBar
          value={searchedCityName}
          onPress={() => navigation.navigate('Search')}
          goBack={() => resetScreen()}
          showArrowLeft={searchedCityName ? true : false}
        />
        <TouchableOpacity style={styles.settingIcon} onPress={() => navigation.navigate("Search")}>
          <Icon name={'cog'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {renderUserCities()}
      </View>
    </View>
  );
}

export default ListCities;