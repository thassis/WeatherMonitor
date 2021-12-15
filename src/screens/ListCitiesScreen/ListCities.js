import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import RNRestart from 'react-native-restart';

import { useSelector, useDispatch } from "react-redux";
import { removeCity, favoriteCityState } from "../../redux/actions/userActions";
import {
  removeStoragedCity,
  favoriteStoragedCity,
  changeLanguageStorage,
  changeUnitStorage
} from "./functions/services";

import SearchBar from "../../globalComponents/SearchBar/SearchBar";
import CardCity from "./components/CardCity/CardCity";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { languages, units } from "../../utils/settings";
import styles from "./ListCitiesStyles";
import colors from "../../utils/colors";

const ListCities = ({ navigation }) => {
  const userObj = useSelector(state => state.user);
  const dispatch = useDispatch();

  const strings = languages(userObj.language);

  const removeCityState = (city) => dispatch(removeCity(city));
  const changeFavoriteCityState = (city) => dispatch(favoriteCityState(city));

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(userObj.language);
  const [selectedUnit, setSelectedUnit] = useState(userObj.units);

  useEffect(() =>
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    }),
    [navigation]
  );

  const renderUserCities = () => {
    if (userObj && userObj.addedCities && userObj.addedCities.length > 0) {
      return (
        <FlatList
          data={userObj.addedCities}
          renderItem={({ item }) => (
            <CardCity
              city={item}
              userObj={userObj}
              removeCity={(cityName) => deleteCity(cityName)}
              onPressFavorite={(cityName) => favoriteCity(cityName)}
              onPressNextDays={(city) => navigation.navigate('DetailsCity', { city })}
            />
          )}
        />
      );
    }
    return (
      <View style={styles.centerView}>
        <Image source={require('../../assets/images/emptyList.png')} resizeMode="contain" style={styles.noCityImg} />
        <Text style={styles.noCityTextDescription}>{strings.emptyList}</Text>
      </View>
    )
  }

  const deleteCity = async (cityName) => {
    await removeStoragedCity(userObj, cityName);
    removeCityState(cityName);
  }

  const favoriteCity = async (cityName) => {
    await favoriteStoragedCity(userObj, cityName);
    changeFavoriteCityState(cityName);
  }

  const changeLanguage = async (language) => {
    await changeLanguageStorage(userObj, language);
    setModalVisible(false);
    RNRestart.Restart();
  }

  const changeUnit = async (unit) => {
    await changeUnitStorage(userObj, unit);
    setModalVisible(false);
    RNRestart.Restart();
  }

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.flexEnd} onPress={() => setModalVisible(false)}>
              <Icon name={"close"} size={15} color={colors.red} />
            </TouchableOpacity>
            <Text style={styles.modalText}>{strings.preferences}</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => {
                changeLanguage(itemValue);
                setSelectedLanguage(itemValue)
              }}>
              <Picker.Item label="Português" value="pt_Br" />
              <Picker.Item label="English" value="en" />
            </Picker>
            <Picker
              selectedValue={selectedUnit}
              onValueChange={(itemValue) => {
                changeUnit(itemValue);
                setSelectedUnit(itemValue);
              }}>
              <Picker.Item label="Celsius (ºC)" value="metric" />
              <Picker.Item label="Fahrenheit (ºF)" value="imperial" />
            </Picker>
          </View>
        </View>
      </Modal>

      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      <View style={styles.header}>
        <SearchBar
          onPress={() => navigation.navigate('Search')}
        />
        <TouchableOpacity style={styles.settingIcon} onPress={() => setModalVisible(!modalVisible)}>
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