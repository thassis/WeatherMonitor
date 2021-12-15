import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ActivityIndicator,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList
} from 'react-native';

import { getAllDataWeatherCity } from "./functions/services";
import { getDayName, formatTime } from "./functions/dateTime";
import { addNewCity } from "../../redux/actions/userActions";
import { storeNewCity } from "../ListCitiesScreen/functions/services";
import { getWeatherCity } from "../SplashScreen/functions/services";

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { languages, units } from "../../utils/settings";
import colors from "../../utils/colors";
import styles from "./DetailsCityStyles";

const DetailsCity = ({ navigation, route }) => {
  const userObj = useSelector(state => state.user);
  const dispatch = useDispatch();

  const strings = languages(userObj.language);

  const addCityState = (city) => dispatch(addNewCity(city));

  const coords = route.params && route.params.city ? route.params.city.coord : null;
  const cityName = route.params && route.params.city ? route.params.city.name : '';

  const [allWeatherDataCity, setAllWeatherDataCity] = useState();
  const [showAddCity, setShowAddCity] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cityNotFound, setCityNotFound] = useState(false);

  const checkCityInList = (cityName) => {
    if (userObj && userObj.addedCities && userObj.addedCities.length > 0) {
      const cityNameWithoutCountry = cityName.split(',')[0];
      const city = userObj.addedCities.find(el => el.name.toUpperCase() === cityNameWithoutCountry.toUpperCase());
      return city ? true : false;
    }
    return false;
  }

  useEffect(() => {
    async function getAllWeatherData() {
      var coordinates = coords;
      if (!coordinates) {
        const city = await getWeatherCity(userObj, { name: cityName, isFavorite: false });
        if (city)
          coordinates = city.coord;
        else {
          setCityNotFound(true);
          return;
        }
      }
      setAllWeatherDataCity(await getAllDataWeatherCity(userObj, coordinates));
      if (!checkCityInList(cityName)) {
        setShowAddCity(true);
      }

      setLoading(false);
    }

    getAllWeatherData();
  }, [route]);

  const renderOpwIcon = (icon, sizeStyle = styles.weatherIcon) => {
    var iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    return (
      <Image source={{ uri: iconurl }} style={sizeStyle} />
    );
  }

  const saveNewCity = async () => {
    setLoading(true);
    await storeNewCity(userObj, { name: cityName, isFavorite: false });
    const city = await getWeatherCity(userObj, { name: cityName, isFavorite: false });
    addCityState(city);
    setLoading(false);
    navigation.navigate('ListCities');
  }

  const renderCityNotFound = () => (
    <View style={styles.centerView}>
      <Image source={require('../../assets/images/not_found.png')} resizeMode="contain" style={styles.noCityImg} />
      <Text style={styles.noCityTextDescription}>{strings.notFoundCity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate("ListCities", { searchedCityName: '' })}>
        <Icon name={'arrow-left'} size={20} />
        <Text numberOfLines={1} style={styles.cityTitle}>{cityName}</Text>
      </TouchableOpacity>
      {cityNotFound ? renderCityNotFound()
        :
        <View style={styles.body}>
          {loading
            ? <View style={styles.centerView}>
              <ActivityIndicator size={'large'} color={colors.primaryBlue} />
            </View>
            : <>
              <View style={styles.currentDayView}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.currentTempText}>{`${allWeatherDataCity.temp} ${units(userObj.units)}`}</Text>
                  <Text style={styles.feelsLikeTitle}>{`${strings.feelsLike}: ${allWeatherDataCity.feels_like} ${units(userObj.units)}`}</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  {renderOpwIcon(allWeatherDataCity.icon)}
                  <Text style={styles.descriptionTitle}>{`${allWeatherDataCity.description}`}</Text>
                </View>
              </View>
              <View style={styles.blueCard}>
                <FlatList
                  data={allWeatherDataCity.hourly}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View style={styles.hourlyView} key={item.dt}>
                      <Text style={styles.text}>{formatTime(item.dt)}</Text>
                      {renderOpwIcon(item.weather[0].icon, { width: 30, height: 30 })}
                      <Text style={styles.text}>{`${Math.round(item.temp)} ${units(userObj.units)}`}</Text>
                    </View>
                  )}
                />
              </View>
              <FlatList
                style={{ marginTop: 32 }}
                data={allWeatherDataCity.daily}
                renderItem={({ item, index }) => (
                  <View style={styles.dailyView} key={item.dt}>
                    <View >
                      <Text style={[styles.text, { marginLeft: 8 }]}>{getDayName(item.dt, index, strings)}</Text>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {renderOpwIcon(item.weather[0].icon, { width: 30, height: 30 })}
                        <Text style={styles.text}>{item.weather[0].description}</Text>
                      </View>
                    </View>
                    <View style={styles.weatherCondition}>
                      <Icon name={'arrow-down'} color={colors.blue} />
                      <Text numberOfLines={1} style={[styles.text, { marginLeft: 4 }]}>{`${Math.round(item.temp.min)} ${units(userObj.units)}  `}</Text>

                      <Icon name={'arrow-up'} color={colors.red} />
                      <Text numberOfLines={1} style={[styles.text, { marginLeft: 4 }]}>{`${Math.round(item.temp.max)} ${units(userObj.units)}`}</Text>
                    </View>
                  </View>
                )}
              />
            </>
          }
        </View>
      }
      {showAddCity && (
        <TouchableOpacity style={styles.addView} onPress={() => saveNewCity()}>
          <Text style={styles.addButton}>{strings.addCity}</Text>
        </TouchableOpacity>
      )}
    </View >
  );
}

export default DetailsCity;