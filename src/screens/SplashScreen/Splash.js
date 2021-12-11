import React, { useState } from "react";
import { TouchableOpacity, Text, View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { setCities } from "../../redux/actions/userActions";

const Splash = ({ navigation }) => {
  const userObj = useSelector(state => state.user);

  const dispatch = useDispatch();
  const setCitiesState = (cities) => dispatch(setCities(cities));

  console.log('cities', userObj);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <TouchableOpacity onPress={() => { setCitiesState(['BH']) }}>
        <Text>Splash</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Splash;