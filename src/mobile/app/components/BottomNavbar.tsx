import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavbar = ({ brokerId }: { brokerId: number }) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('ActionsForPurchaseScreen', { brokerId })} style={styles.button}>
        <Text style={styles.buttonText}>Ações</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UserShares', { brokerId })} style={styles.button}>
        <Text style={styles.buttonText}>Minhas Ações</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TransactionsScreen', { brokerId })} style={styles.button}>
        <Text style={styles.buttonText}>Transações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#5C5696',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BottomNavbar;
