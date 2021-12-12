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

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  const setUserState = (user) => dispatch(setUser(user));

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const user = await getUserData();
      if (user && user.addedCities && user.addedCities.length > 0) {
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
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('ListCities')}>
        <Text>SPLASH</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Splash;