import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { languages } from "../../utils/settings";

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from "./SearchBarStyles";

const SearchBar = ({ onPress, value, onChange }) => {
  const userObj = useSelector(state => state.user);
  const strings = languages(userObj.language);

  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef && searchRef.current)
      searchRef.current.focus();
  }, []);

  const getTextValue = () => {
    if (value)
      return value;
    return strings.searchNewCity;
  }

  if (onPress)
    return (
      <TouchableOpacity style={styles.textInput} onPress={onPress}>
        <Icon name={'search'} size={20} />
        <Text style={styles.searchText}>{getTextValue()}</Text>
      </TouchableOpacity>
    );

  return (
    <View style={styles.textInput} onPress={onPress}>
      <Icon name={'search'} size={20} />
      <TextInput
        ref={searchRef}
        value={value}
        onChangeText={onChange}
        style={styles.searchText}
        placeholder={strings.searchNewCity}
      />
    </View>
  );
}

export default SearchBar;