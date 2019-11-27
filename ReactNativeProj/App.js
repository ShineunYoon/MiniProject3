import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { API_KEY } from './utils/WeatherAPIKey';
import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    loading: true,
    temperature: 0,
    condition: null,
    city: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {  this.setState({ error: 'Error' });  }
    );
  }

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          condition: json.weather[0].main,
          city: json.name,
          loading: false
        });
      });
  }

  render() {
    const { loading, condition, temperature, city } = this.state;
    return (
      <View style={styles.container}>
        {
          loading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <Weather weather={condition} temperature={temperature} city={city}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 20
  }
});