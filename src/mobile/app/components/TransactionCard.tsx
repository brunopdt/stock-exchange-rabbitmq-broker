import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Transaction from '../models/Transaction';

const TransactionCard: React.FC<Transaction> = ({ transactionDate, value, quantity, share }) => {
  const formatDate = (date: Date) => {
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  };

  const formattedTransactionDate = transactionDate ? formatDate(transactionDate) : '';

  return (
    <View style={styles.card}>
      <Text style={styles.date}>Transação realizada em: {formattedTransactionDate}</Text>
      <Text>no valor de: {value} e com quantidade: {quantity}</Text>
      <Text>Ação: {share?.code} - {share?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  date: {
    fontWeight: 'bold',
  },
});

export default TransactionCard;
