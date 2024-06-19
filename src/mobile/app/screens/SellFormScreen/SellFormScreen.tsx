import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import SellService from '@/app/services/SellShareService';
import { useNavigation } from '@react-navigation/native';

interface SellShareProps {
  code: string
}

const SellFormScreen: React.FC<SellShareProps> = ({ code }) => {
    const currentShareCode = code; 
    const [brokerId, setBrokerId] = useState(null); // Pegar do storage
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const navigation = useNavigation<any>();

    const handleSell = async () => {
        const sellRequest = {
            brokerId: "1",//Trocar id do storage
            active: currentShareCode,
            stockAmount: quantity,
            price: price,
        };

        try {
            const response = await SellService.sellShare(sellRequest);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Venda realizada com sucesso!');
                navigation.navigate('ActionsForPurchaseScreen');
            } else {
                console.error('Erro ao realizar venda:', response.statusText);
                Alert.alert('Erro', 'Erro ao realizar venda.');
            }
        } catch (error) {
            console.error('Erro ao realizar venda:', error);
            Alert.alert('Erro', 'Erro ao realizar venda.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Venda de Ação</Text>
            <Text style={styles.label}>Quantidade:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={quantity}
                onChangeText={setQuantity}
            />
            <Text style={styles.label}>Valor:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
            />
            <Button title="Confirmar Venda" onPress={handleSell} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default SellFormScreen;
