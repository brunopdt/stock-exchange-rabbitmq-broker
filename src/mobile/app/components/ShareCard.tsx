import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface ShareCardProps {
  code: string;
  name: string;
  activity: string;
  onBuy: () => void;
}

const ShareCard: React.FC<ShareCardProps> = ({ code, name, activity, onBuy }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text>{code}</Text>
      <Text>{activity}</Text>
      <Button title="Comprar" onPress={onBuy} color="#5C5696" />
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

export default ShareCard;
