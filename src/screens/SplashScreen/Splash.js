import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { setUser } from "../../redux/actions/userActions";
import { getUserData, getWeatherCitiesData } from "./functions/services";
import {
  PulseIndicator,
  UIActivityIndicator,
} from 'react-native-indicators';

import colors from "../../utils/colors";
import styles from "./SplashStyles";

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  const setUserState = (user) => dispatch(setUser(user));

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const user = await getUserData();
      if (user && user.addedCities && user.addedCities.length > 0) {
        console.log(user.addedCities);
        const weatherCitiesData = await getWeatherCitiesData(user.addedCities);
        user.addedCities = weatherCitiesData;
        dispatch(setUserState(user));
      }
      setLoading(false);
      navigation.navigate('ListCities');
    }
    fetchUser();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.secondaryBlue} barStyle='dark-content' />
      <UIActivityIndicator style={styles.center} color={colors.red} size={100} />
      <PulseIndicator style={styles.center} color={colors.red} size={80} />
      <Text style={styles.textTitle}>Weather Monitor</Text>
    </View>
  );
}

export default Splash;