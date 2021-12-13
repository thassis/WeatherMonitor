import React, { useEffect, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from "./SearchBarStyles";

const SearchBar = ({ onPress, value, onChange, showArrowLeft, goBack }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef && searchRef.current)
      searchRef.current.focus();
  }, []);

  const getTextValue = () => {
    if (value)
      return value;
    return 'Busca nova cidade';
  }

  if (onPress)
    return (
      <>
        {showArrowLeft && (
          <TouchableOpacity style={{ marginRight: 8 }} onPress={goBack}>
            <Icon name={'arrow-left'} size={20} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.textInput} onPress={onPress}>
          {!showArrowLeft && (
            <Icon name={'search'} size={20} />
          )}
          <Text style={styles.searchText}>{getTextValue()}</Text>
        </TouchableOpacity>
      </>
    );

  return (
    <View style={styles.textInput} onPress={onPress}>
      <Icon name={'search'} size={20} />
      <TextInput
        ref={searchRef}
        value={value}
        onChangeText={onChange}
        style={styles.searchText}
        placeholder={'Buscar nova cidade'}
      />
    </View>
  );
}

export default SearchBar;