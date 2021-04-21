import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AddScreen from './AddScreen';
import ShopScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen'
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

const BottomTab = createBottomTabNavigator();

const Tab = () => {
    return(
        <BottomTab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                height: 60
            }
        }}>
            <BottomTab.Screen name="Bongo Cha" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="ios-home-outline" size={25} />
                    </View>
                )
            }} />
            <BottomTab.Screen name="Search Screen" component={SearchScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="ios-search-outline" size={25} />
                    </View>
                )
            }} />
            <BottomTab.Screen name="Add Screen" component={AddScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center', 
                    }}>
                        <Ionicons name="ios-add-outline" size={35} />
                    </View>
                )
            }} />
            <BottomTab.Screen name="Shop Screen" component={ShopScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="ios-cart-outline" size={25} />
                    </View>
                )
            }} />
            <BottomTab.Screen name="Profile Screen" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="ios-person-outline" size={22} />
                    </View>
                )
            }} />
        </BottomTab.Navigator>
    )
}

export default Tab;