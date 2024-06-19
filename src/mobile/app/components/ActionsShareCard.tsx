import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface ShareCardProps {
  code: string;
  name: string;
  activity: string;
  purchasedBy: string;
  quantity: number;
  onSell: () => void;
}

const ActionsShareCard: React.FC<ShareCardProps> = ({ code, name, activity, purchasedBy, quantity, onSell }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{code} - {name}</Text>
      <Text>Atividade: {activity}</Text>
      <Text>Comprada por: {purchasedBy} - Quantidade: {quantity}</Text>
      <Button title="Vender" onPress={onSell} color="#5C5696" />
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ActionsShareCard;
