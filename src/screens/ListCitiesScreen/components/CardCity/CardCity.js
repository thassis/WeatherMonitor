import React from "react";
import {
  Image,
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from "../../../../utils/colors";

import styles from "./CardCityStyles";

const CardCity = ({ city }) => {

  const renderOpwIcon = () => {
    var iconurl = "https://openweathermap.org/img/wn/" + city.icon + "@2x.png";
    return (
      <Image source={{ uri: iconurl }} style={styles.weatherIcon} />
    );
  }

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
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
          <Text numberOfLines={1} style={styles.tempText}>{`${city.temp} ºC`}</Text>
          <View style={styles.weatherCondition}>
            <Icon name={'arrow-down'} color={colors.blue} />
            <Text numberOfLines={1} style={styles.tempMax}>{`${city.temp_min} ºC  `}</Text>

            <Icon name={'arrow-up'} color={colors.red} />
            <Text numberOfLines={1} style={styles.tempMin}>{`${city.temp_max} ºC`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row, { marginTop: 8 }]}>
        <View style={styles.row}>
          <Icon name={'heart-o'} size={20} color={colors.red} />
          <Text style={styles.favoriteText}>Favoritar</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.otherDaysText}>Próximos dias</Text>
          <Icon name={'chevron-right'} size={10} color={colors.primaryBlue} />
          <Icon name={'chevron-right'} size={10} color={colors.primaryBlue} />
        </View>
      </View>
    </View>
  )

}

export default CardCity;