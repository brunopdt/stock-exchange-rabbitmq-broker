import BottomNavbar from '@/app/components/BottomNavbar';
import ShareCard from '@/app/components/ShareCard';
import ShareService from '@/app/services/ShareService';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const ActionsForPurchaseScreen = () => {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    async function fetchShares() {
      try {
        const response: any = await ShareService.getShares();
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
          <ShareCard
            key={share.code}
            code={share.code}
            name={share.name}
            activity={share.activity}
            onBuy={() => handleSell(share.code)}
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

export default ActionsForPurchaseScreen;
