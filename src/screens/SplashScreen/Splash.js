import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { setUser } from "../../redux/actions/userActions";
import { getUserData, getWeatherCitiesData } from "./functions/services";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import colors from "../../utils/colors";
import styles from "./SplashStyles";

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  const setUserState = (user) => dispatch(setUser(user));

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // async function fetchUser() {
    //   const user = await getUserData();
    //   if (user && user.addedCities && user.addedCities.length > 0) {
    //     const weatherCitiesData = await getWeatherCitiesData(user.addedCities);
    //     user.addedCities = weatherCitiesData;
    //     dispatch(setUserState(user));
    //   }
    //   setLoading(false);
    //   navigation.navigate('ListCities');
    // }
    // fetchUser();
  }, [])

  return (
    <View style={styles.container}>
      <UIActivityIndicator style={styles.center} color={colors.yellow} size={100} />
      <PulseIndicator style={styles.center} color={colors.yellow} size={80} />
      <Text style={styles.textTitle}>Weather Monitor</Text>
    </View>
  );
}

export default Splash;