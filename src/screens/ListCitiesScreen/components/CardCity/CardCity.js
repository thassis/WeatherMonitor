import React from "react";
import {
  Alert,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from "../../../../utils/colors";
import { languages, units } from "../../../../utils/settings";

import styles from "./CardCityStyles";

const CardCity = ({
  city,
  removeCity,
  onPressFavorite,
  onPressNextDays,
  userObj,
}) => {
  const strings = languages(userObj.language)
  const renderOpwIcon = () => {
    var iconurl = "https://openweathermap.org/img/wn/" + city.icon + "@2x.png";
    return (
      <Image source={{ uri: iconurl }} style={styles.weatherIcon} />
    );
  }

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const alertRemoveMsg = (cityName) => {
    Alert.alert(
      strings.removeCity,
      `${strings.sureToRemoveCity} ${cityName}?`,
      [
        {
          text: strings.no,
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: strings.yes, onPress: () => removeCity(cityName) }
      ]
    );
  }

  const renderFavoriteIcon = () => {
    if (!city.isFavorite)
      return (
        <View style={styles.row}>
          <Icon name={'heart-o'} size={20} color={colors.red} />
          <Text style={styles.favoriteText}>{strings.favorite}</Text>
        </View>
      );
    return (
      <View style={styles.row}>
        <Icon name={'heart'} size={20} color={colors.red} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text numberOfLines={1} style={styles.cityTitle}>{city.name}</Text>
          <Text numberOfLines={1} style={styles.countryTitle}>{city.country}</Text>
          <View style={styles.weatherCondition}>
            {renderOpwIcon()}
            <Text numberOfLines={1} style={styles.textDescription}>{capitalizeFirstLetter(city.description)}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <TouchableOpacity style={styles.trashIcon} onPress={() => alertRemoveMsg(city.name)}>
            <Icon name={'trash'} color={colors.red} size={15} />
          </TouchableOpacity>
          <View style={styles.rightRow}>

            <Text numberOfLines={1} style={styles.tempText}>{`${city.temp} ${units(userObj.units)}`}</Text>
            <View style={styles.weatherCondition}>
              <Icon name={'arrow-down'} color={colors.blue} />
              <Text numberOfLines={1} style={styles.tempMinMax}>{`${city.temp_min} ${units(userObj.units)}  `}</Text>

              <Icon name={'arrow-up'} color={colors.red} />
              <Text numberOfLines={1} style={styles.tempMinMax}>{`${city.temp_max} ${units(userObj.units)}`}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.row, { marginTop: 8 }]}>
        <TouchableOpacity onPress={() => onPressFavorite(city.name)}>
          {renderFavoriteIcon()}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressNextDays(city)} style={styles.row}>
          <Text style={styles.otherDaysText}>{strings.nextDays}</Text>
          <Icon name={'chevron-right'} size={10} color={colors.primaryBlue} />
          <Icon name={'chevron-right'} size={10} color={colors.primaryBlue} />
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default CardCity;