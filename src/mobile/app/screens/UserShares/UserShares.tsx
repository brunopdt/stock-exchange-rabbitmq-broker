import ActionsShareCard from '@/app/components/ActionsShareCard';
import BottomNavbar from '@/app/components/BottomNavbar';
import ShareCard from '@/app/components/ShareCard';
import OffersBookService from '@/app/services/OffersBookService';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const UserShares = () => {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    async function fetchShares() {
      try {
        const response: any = await OffersBookService.getBrokerPurchasedShares(1);
        setShares(response.data);
      } catch (error) {
        console.error('Erro ao buscar as ações:', error);
      }
    }

    fetchShares();
  }, []);

  const handleSell = (code: string) => {
    console.log(`Vender ação: ${code}`);
    // Chamar página de comprar a ação passando o id
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {shares.map((share: any) => (
          <ActionsShareCard
            key={share.id}
            code={share.share.code}
            name={share.share.name}
            activity={share.share.activity}
            quantity={share.quantity}
            purchasedBy={share.price}
            onSell={() => handleSell(share.code)}
          />
        ))}
      </ScrollView>
      <BottomNavbar />
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

export default UserShares;
