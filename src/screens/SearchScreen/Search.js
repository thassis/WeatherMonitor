import React, { useRef, useEffect, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useDebouncedCallback } from 'use-debounce';
import { getAutocompleteCities } from "./functions/services";

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SearchBar from '../../globalComponents/SearchBar/SearchBar';


import colors from "../../utils/colors";
import styles from "./SearchStyles";

const Search = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const [autoCompleteCities, setAutoCompleteCities] = useState([]);
  const [showNotFoundSuggested, setShowNotFoundSuggested] = useState(false);

  const searchCities = async () => {
    const cities = await getAutocompleteCities(search);
    setAutoCompleteCities(cities);
    setShowNotFoundSuggested(true);
  }

  const searchCitiesDebounced = useDebouncedCallback(
    () => {
      searchCities();
    },
    1000
  );

  useEffect(() => {
    if (search.length === 0) {
      setAutoCompleteCities([]);
    } else {
      searchCitiesDebounced();
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          value={search}
          onChange={setSearch}
        />
        <TouchableOpacity style={styles.cancelIcon} onPress={() => setSearch('')}>
          <Icon name={'close'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.white}>
        <FlatList
          keyboardShouldPersistTaps='handled'
          data={autoCompleteCities}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item}
              style={styles.suggestedCity}
              onPress={() => navigation.navigate('ListCities', { searchedCityName: item })}
            >
              <Icon name={'map-marker'} size={15} style={{ marginLeft: 8 }} />
              <Text style={styles.suggestedText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        {search.length > 0 && showNotFoundSuggested && (
          <TouchableOpacity
            style={styles.suggestedCity}
            onPress={() => navigation.navigate('ListCities', { searchedCityName: search })}
          >
            <Text style={[styles.suggestedText, { textAlign: "center", textDecorationLine: 'underline' }]}>
              {'Não encontrou uma sugestão? Tente buscar assim mesmo'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default Search;