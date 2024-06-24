import BottomNavbar from '@/app/components/BottomNavbar';
import ShareCard from '@/app/components/ShareCard';
import ShareService from '@/app/services/ShareService';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface ActionsForPurchaseScreenRouteParams {
  code: string
  brokerId: number
}

type ActionsForPurchaseScreenRouteProp = RouteProp<{ ActionsForPurchaseScreen: ActionsForPurchaseScreenRouteParams }, 'ActionsForPurchaseScreen'>;

const ActionsForPurchaseScreen = () => {
  const navigation = useNavigation<any>();
  
  const route = useRoute<ActionsForPurchaseScreenRouteProp>();
  const { brokerId } = route.params;

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
    navigation.navigate('BuyFormScreen', { code, brokerId });
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

export default ActionsForPurchaseScreen;
