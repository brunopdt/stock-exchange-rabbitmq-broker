import BottomNavbar from '@/app/components/BottomNavbar';
import TransactionCard from '@/app/components/TransactionCard';
import TransactionService from '@/app/services/TransactionService';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface ScreenRouteParams {
  brokerId: number
}

type ScreenRouteProp = RouteProp<{ TransactionsScreen: ScreenRouteParams }, 'TransactionsScreen'>;

const TransactionsScreen = () => {
  const [transactions, setTransactions] = useState([]);

  const route = useRoute<ScreenRouteProp>();
  const { brokerId } = route.params;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response: any = await TransactionService.getBrokerTransactions(brokerId);
        setTransactions(response.data);
      } catch (error) {
        console.error('Erro ao buscar as transações:', error);
      }
    };

    fetchTransactions();
  }, [brokerId]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {transactions.map((transaction: any) => (
          <TransactionCard
            key={transaction.id}
            transactionDate={transaction.transactionDate}
            value={transaction.value}
            quantity={transaction.quantity}
            share={transaction.share}
          />
        ))}
      </ScrollView>
      <BottomNavbar brokerId={brokerId}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingBottom: 60,
  },
});

export default TransactionsScreen;
