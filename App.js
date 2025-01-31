import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemList from './src/screens/ItemList';
import ItemForm from './src/components/ItemForm';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ItemList" component={ItemList} />
                <Stack.Screen name="ItemForm" component={ItemForm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
