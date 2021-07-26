import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Detail';
import ProfileScreen from './Screens/Profile';
import SettingsScreen from './Screens/Setting';
import CartScreen from './Screens/Cart';
import FilterScreen from './Screens/Filter';
import SearchScreen from './Screens/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}
      />
      <Stack.Screen
      name = "Search"
      component = {SearchScreen}
      options = {{title: 'Search Page'}}/>
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}
      />
    </Stack.Navigator>
  );
}
function FilterStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Filter"
        component={FilterScreen}
        options={{ title: 'Filter Page' }}
      />
      <Stack.Screen
      name = "Search"
      component = {SearchScreen}
      options = {{title: 'Search Page'}}/>
    </Stack.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#F60101',
          inactiveTintColor: '#207080'
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Filter"
          component={FilterStack}
          options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="grid-large" color = {color} size = {size}/>
            )
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({color, size})=> (
              <MaterialCommunityIcons name="cart" color = {color} size = {size}/>
            )
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cog-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size})=> (
              <MaterialCommunityIcons name="account-circle" color={color} size={size}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
