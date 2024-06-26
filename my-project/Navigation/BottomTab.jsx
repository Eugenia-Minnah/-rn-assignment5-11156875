import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CardScreen from '../Screens/CardScreen';
import StatisticsScreen from '../Screens/StatisticsScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="My Cards" component={CardScreen} />
    <Tab.Screen name="Statistics" component={StatisticsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
);
}