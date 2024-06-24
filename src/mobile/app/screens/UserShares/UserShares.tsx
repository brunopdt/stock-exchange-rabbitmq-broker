import ActionsShareCard from '@/app/components/ActionsShareCard';
import BottomNavbar from '@/app/components/BottomNavbar';
import OffersBookService from '@/app/services/OffersBookService';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface ScreenRouteParams {
  brokerId: number
}

type ScreenRouteProp = RouteProp<{ UserShares: ScreenRouteParams }, 'UserShares'>;

const UserShares = () => {
  const navigation = useNavigation<any>();

  const route = useRoute<ScreenRouteProp>();
  const { brokerId } = route.params;
  
  const [shares, setShares] = useState([]);

  useEffect(() => {
    async function fetchShares() {
      try {
        const response: any = await OffersBookService.getBrokerPurchasedShares(brokerId);
        setShares(response.data);
      } catch (error) {
        console.error('Erro ao buscar as ações:', error);
      }
    }

    fetchShares();
  }, [brokerId]);

  const handleSell = (code: string) => {
    navigation.navigate('SellFormScreen', { code, brokerId });
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
            onSell={() => handleSell(share.share.code)}
          />
        ))}
      </ScrollView>
      <BottomNavbar brokerId={brokerId} />
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
