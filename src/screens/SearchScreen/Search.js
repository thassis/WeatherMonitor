import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useDebouncedCallback } from 'use-debounce';
import { getAutocompleteCities } from "./functions/services";

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SearchBar from '../../globalComponents/SearchBar/SearchBar';

import { languages } from "../../utils/settings";
import colors from "../../utils/colors";
import styles from "./SearchStyles";

const Search = ({ navigation }) => {
  const userObj = useSelector(state => state.user);

  const strings = languages(userObj.language);

  const [search, setSearch] = useState('');
  const [loadingAutoComplete, setLoadingAutoComplete] = useState(false);
  const [autoCompleteCities, setAutoCompleteCities] = useState([]);
  const [showNotFoundSuggested, setShowNotFoundSuggested] = useState(false);

  const searchCities = async () => {
    setLoadingAutoComplete(true);
    const cities = await getAutocompleteCities(search);
    setAutoCompleteCities(cities);
    setShowNotFoundSuggested(true);
    setLoadingAutoComplete(false);
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
        <TouchableOpacity
          style={styles.cancelIcon}
          onPress={() =>
            search ? setSearch('') : navigation.navigate('ListCities', { searchedCityName: '' })}
        >
          <Icon name={'close'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.white}>
        {
          loadingAutoComplete
            ? <ActivityIndicator color={colors.primaryBlue} />
            : <FlatList
              keyboardShouldPersistTaps='handled'
              data={autoCompleteCities}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.name}
                  style={styles.suggestedCity}
                  onPress={() => navigation.navigate('DetailsCity', { city: item })}
                >
                  <Icon name={'map-marker'} size={15} style={{ marginLeft: 8 }} />
                  <Text style={styles.suggestedText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
        }
        {search.length > 0 && showNotFoundSuggested && (
          <TouchableOpacity
            style={styles.suggestedCity}
            onPress={() => navigation.navigate('DetailsCity', { city: { name: search } })}
          >
            <Text style={[styles.suggestedText, { textAlign: "center", textDecorationLine: 'underline' }]}>
              {strings.tryToSearchThisWay}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default Search;