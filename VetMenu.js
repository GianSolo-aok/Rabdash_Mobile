import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';  // Import the useAuth hook
import styles from './styles/mainmenu';

const VetMenu = () => {

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
    navigation.navigate('VetInputForms')
  }

  const navigateToVetArchiveMenu = () => {
    navigation.navigate('VetArchiveMenu')
  }

  const navigateToDownloadableForms = () => {
    navigation.navigate('DownloadableForms')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CVO and Rabdash Main Menu</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToInputForms}>
        <Text style={styles.buttonText}>Input Forms</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToVetArchiveMenu}>
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

export default VetMenu;