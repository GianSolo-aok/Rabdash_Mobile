import React from 'react';
import { View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles/login';

const MainMenu = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    console.log('Logout button pressed!');
    navigation.navigate('Login');
  };

  const navigateToAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  const navigateToUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const navigateToInputForms = () => {
    navigation.navigate('InputForms')
  }

  const navigateToClientDatabase = () => {
    navigation.navigate('ClientDatabase')
  }

  const navigateToDownloadableForms = () => {
    navigation.navigate('DownloadableFormsPrivVet')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Main Menu</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToInputForms}>
        <Text style={styles.buttonText}>Input Forms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToClientDatabase}>
        <Text style={styles.buttonText}>Form Archives</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToDownloadableForms}>
        <Text style={styles.buttonText}>Downloadable Forms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToUserProfile}>
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToAboutUs}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainMenu;
