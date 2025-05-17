import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {removeUserData} from '../utils';

const Screen1 = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await removeUserData();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="logout" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default Screen1; 