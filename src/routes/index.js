import React from 'react';
import { View, Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from '../containers/Search';


function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = {
    style: {
        backgroundColor: "#304b53",
    },
    labelStyle: {
        fontSize: 18
    },
};

const Routes = () => {
    return (
        <Tab.Navigator tabBarOptions={{ ...styles }} initialRouteName="Search">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    )
}

export default Routes
