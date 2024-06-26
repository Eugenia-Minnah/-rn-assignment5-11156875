import { View, ScrollView, Text ,StyleSheet, Pressable, Image, Switch} from 'react-native'
import React, { useState, useContext } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../Theme/ThemeContext';

export default function SettingsScreen() {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState(false);
  const settingsOptions =[
    {id:'1', title:'Language' },
    {id:'2', title:'My Profile' },
    {id:'3', title:'Contact Us' },
    {id:'4', title:'Change Password' },
    {id:'5', title:'Privacy Policy' }
  ];
  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={styles.header}>Settings</Text>
    {settingsOptions.map((option, id) =>(
      <View style={styles.optionsContainer}>
        <Pressable key={id} style={styles.option}>
        <Text style={styles.optionText}>{option.title}</Text>
      </Pressable>
      <Image source={require('./../assets/right_arrow.png')} style={styles.arrow}/>
      </View>
    ))}
    <View style={styles.themeContainer}>
    <Text style={[styles.themeText, { fontWeight: 'bold' }]}>Theme</Text>
        <Switch
          value={darkMode}
          onValueChange={(value)=> {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme', value)
          }}
          
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    top:60,

  },
  header:{
    top:10,
    textAlign:'center',
    fontSize:22,
    fontWeight:'400',
  },
  optionsContainer:{
    flexDirection:'row',
    top:70,
    paddingHorizontal:10,
    borderBottomWidth:1.5,
    width:'88%',
    marginLeft:30,
    borderBottomColor:'#E8E8E8',
  },
  option:{
    flex:1,
    paddingVertical:25,
  },
  optionText:{
    top:10,
    fontSize:18,
    fontWeight:'400',
  },
  arrow:{
    height:26,
    width:26,
    top:30,
    color: '#0000FF'
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 120,
    paddingHorizontal: 10,
  },
  themeText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontWeight: '400',
    left: 30
  },
  switch: {
    marginLeft: 10,
  },
});