import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import CardScreen from '../Screens/CardScreen';
import StatisticsScreen from '../Screens/StatisticsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import homeIcon from '../assets/home.png';
import cardIcon from '../assets/Card.png';
import statisticsIcon from '../assets/statistics.png';
import settingsIcon from '../assets/settings.png';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#888',
        tabBarActiveTintColor: '#0165E1',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={homeIcon} style={{ width: 25, height: 25, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={CardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={cardIcon} style={{ width: 25, height: 25, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={statisticsIcon} style={{ width: 25, height: 25, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={settingsIcon} style={{ width: 25, height: 25, tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
