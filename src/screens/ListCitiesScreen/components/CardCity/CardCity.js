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

import styles from "./CardCityStyles";

const CardCity = ({ city, fromSearch, alreadyAdded, saveNewCity, removeCity }) => {
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
      "Remover cidade",
      `Tem certeza que deseja remover a cidade ${cityName}?`,
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => removeCity(cityName) }
      ]
    );
  }

  const renderAddButton = () => {
    if (alreadyAdded) {
      return (
        <View style={styles.addedView}>
          <Icon name={"check-circle-o"} size={20} color={colors.green} />
          <Text style={styles.addedText}>Adicionada</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity style={styles.addButtonView} onPress={() => saveNewCity(city)}>
        <Text style={styles.otherDaysText}>ADICIONAR NA LISTA</Text>
        <Icon name={'chevron-right'} size={10} color={colors.primaryBlue} />
        <Icon name={'chevron-right'} size={10} color={colors.primaryBlue} />
      </TouchableOpacity>
    );
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
          {
            !fromSearch || alreadyAdded ? (
              <TouchableOpacity style={styles.trashIcon} onPress={() => alertRemoveMsg(city.name)}>
                <Icon name={'trash'} color={colors.red} size={15} />
              </TouchableOpacity>
            ) : null}
          <View style={styles.rightRow}>

            <Text numberOfLines={1} style={styles.tempText}>{`${city.temp} ºC`}</Text>
            <View style={styles.weatherCondition}>
              <Icon name={'arrow-down'} color={colors.blue} />
              <Text numberOfLines={1} style={styles.tempMax}>{`${city.temp_min} ºC  `}</Text>

              <Icon name={'arrow-up'} color={colors.red} />
              <Text numberOfLines={1} style={styles.tempMin}>{`${city.temp_max} ºC`}</Text>
            </View>
          </View>
        </View>
      </View>
      {!fromSearch ?
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
        : renderAddButton()}
    </View>
  )

}

export default CardCity;