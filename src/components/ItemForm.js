import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const ItemForm = ({ route, navigation }) => {
    const { item } = route.params || {};
    const [name, setName] = useState(item ? item.name : '');
    const [description, setDescription] = useState(item ? item.description : '');

    const handleSubmit = async () => {
        if (item) {
            // Actualizar item
            await axios.put(`http://localhost:5000/api/items/${item._id}`, { name, description });
        } else {
            // Crear nuevo item
            await axios.post('http://localhost:5000/api/items', { name, description });
        }
        navigation.goBack();
    };

    return (
        <View>
            <Text>Nombre</Text>
            <TextInput value={name} onChangeText={setName} />
            <Text>Descripción</Text>
            <TextInput value={description} onChangeText={setDescription} />
            <Button title="Guardar" onPress={handleSubmit} />
        </View>
    );
};

export default ItemForm;
