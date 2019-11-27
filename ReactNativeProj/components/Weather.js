import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { conditions } from '../utils/Conditions';

const Weather = ({ weather, temperature, city }) => {
  return (
    <View style={[	styles.weatherContainer, { backgroundColor: conditions[weather].color }	]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons	size={104} name={conditions[weather].icon} color={'#fff'} />
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{conditions[weather].title}</Text>
        <Text style={styles.city}>{city}</Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
  	marginLeft: 0,
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  city: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;