import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import TransactionService from '@/app/services/TransactionService';
import OrderRequest from '@/app/requests/OrderRequest';

interface SellFormScreenRouteParams {
  code: string
  brokerId: number;
}

type SellFormScreenRouteProp = RouteProp<{ SellFormScreen: SellFormScreenRouteParams }, 'SellFormScreen'>;

const SellFormScreen: React.FC = () => {
    const route = useRoute<SellFormScreenRouteProp>();
    const { code } = route.params;
    const { brokerId } = route.params;

    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const navigation = useNavigation<any>();

    const handleSell = async () => {
        const sellRequest: OrderRequest = {
            brokerId,
            active: code,
            stockAmount: parseInt(quantity, 10),
            price: parseFloat(price),
        };
        
        try {
            const response = await TransactionService.sellShare(sellRequest);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Venda realizada com sucesso!');
                navigation.navigate('ActionsForPurchaseScreen', { brokerId });
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
            <Button title="Confirmar Venda" onPress={handleSell} color="#5C5696" />
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
