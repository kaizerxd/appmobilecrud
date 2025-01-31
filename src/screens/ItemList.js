import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';

const ItemList = ({ navigation }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get('http://localhost:5000/api/items'); // Asegúrate de usar la IP correcta si estás en un dispositivo físico
        setItems(response.data);
    };

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Button title="Editar" onPress={() => navigation.navigate('ItemForm', { item })} />
                    </View>
                )}
            />
            <Button title="Agregar Item" onPress={() => navigation.navigate('ItemForm')} />
        </View>
    );
};

export default ItemList;
