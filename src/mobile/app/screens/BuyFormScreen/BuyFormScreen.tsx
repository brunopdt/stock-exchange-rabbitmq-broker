import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import BuyService from '@/app/services/BuyShareService';
import { useNavigation } from '@react-navigation/native';

interface BuyShareProps {
  code: string
}

const BuyFormScreen: React.FC<BuyShareProps> = ({ code }) => {
    const currentShareCode = code;
    const [brokerId, setBrokerId] = useState<string | null>(null); // Pegar do storage
    const [quantity, setQuantity] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const navigation = useNavigation<any>();

    const handleBuy = async () => {
        if (!brokerId) {
            Alert.alert('Erro', 'Broker ID não encontrado.');
            return;
        }

        const buyRequest = {
            brokerId: "1", // Trocar para Brokerid
            active: currentShareCode,
            stockAmount: quantity,
            price: price,
        };

        try {
            const response = await BuyService.buyShare(buyRequest);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Compra realizada com sucesso!');
                navigation.navigate('ActionsForPurchaseScreen');
            } else {
                console.error('Erro ao realizar compra:', response.statusText);
                Alert.alert('Erro', 'Erro ao realizar compra.');
            }
        } catch (error) {
            console.error('Erro ao realizar compra:', error);
            Alert.alert('Erro', 'Erro ao realizar compra.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Compra de Ação</Text>
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
            <Button title="Confirmar Compra" onPress={handleBuy} />
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

export default BuyFormScreen;
