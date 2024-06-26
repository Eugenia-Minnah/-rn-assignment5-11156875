import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './Navigation/BottomTab';
import { ThemeProvider } from './Theme/ThemeContext';
import { EventRegister } from 'react-native-event-listeners';
import theme from './Theme/theme';
import themeContext from './Theme/ThemeContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() =>{
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
    })
    return()=> {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])

  return(
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer>
    <BottomTab/>
  </NavigationContainer>
    </themeContext.Provider>
  );
}
