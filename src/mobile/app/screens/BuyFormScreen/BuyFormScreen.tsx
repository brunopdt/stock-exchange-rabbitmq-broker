import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import TransactionService from '@/app/services/TransactionService';
import OrderRequest from '@/app/requests/OrderRequest';

interface BuyFormScreenRouteParams {
    code: string;
    brokerId: number
}

type BuyFormScreenRouteProp = RouteProp<{ BuyFormScreen: BuyFormScreenRouteParams }, 'BuyFormScreen'>;

const BuyFormScreen: React.FC = () => {
    const navigation = useNavigation<any>();

    const route = useRoute<BuyFormScreenRouteProp>();
    const { code } = route.params;
    const { brokerId } = route.params;

    const [quantity, setQuantity] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const handleBuy = async () => {
        if (!brokerId) {
            Alert.alert('Erro', 'Broker ID não encontrado.');
            return;
        }

        const request: OrderRequest = {
            brokerId,
            active: code,
            stockAmount: parseInt(quantity, 10),
            price: parseFloat(price),
        };

        try {
            const response = await TransactionService.buyShare(request);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Compra realizada com sucesso!');
                navigation.navigate('ActionsForPurchaseScreen', { brokerId });
            } else {
                console.error('Erro ao realizar a compra: ', response.statusText);
                Alert.alert('Erro', 'Erro ao realizar compra.');
            }
        } catch (error) {
            console.error('Erro ao realizar compra: ', error);
            Alert.alert('Erro', 'Erro ao realizar compra.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Compra de Ação</Text>
            <Text style={styles.label}>Quantidade:</Text>
            <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Valor:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
            />
            <Button title="Confirmar Compra" onPress={handleBuy} color="#5C5696" />
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