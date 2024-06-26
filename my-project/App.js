import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './Navigation/BottomTab';

export default function App() {
  return(
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
}
