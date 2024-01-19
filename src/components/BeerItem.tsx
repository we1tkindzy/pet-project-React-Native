import {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import ThemeContext from '../context/AppContext';

interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  brewers_tips: string;
}

interface BeerItemProps {
  beer: Beer;
  navigation: any;
}

const BeerItem = ({beer, navigation}: BeerItemProps) => {
  const {theme} = useContext(ThemeContext);

  const colorStyles = StyleSheet.create({
    textColor: {
      color: theme === 'dark' ? '#ffffff' : '#371005',
    },
    rightSectionBgColor: {
      backgroundColor: theme === 'dark' ? '#D9B597' : '#B6846B',
    },
  });

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Beer', {beer})}
      style={styles.beer}>
      <View style={styles.leftSection}>
        <Image
          style={styles.beerImg}
          alt={beer.name}
          height={120}
          width={120}
          resizeMode="contain"
          source={{uri: `${beer.image_url}`}}
        />

        <Text style={styles.beerTagline}>{beer.tagline}</Text>
      </View>

      <View style={[styles.rightSection, colorStyles.rightSectionBgColor]}>
        <Text style={styles.beerTitle}>{beer.name}</Text>

        <Text style={styles.beerTips}>{beer.brewers_tips}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BeerItem;

const styles = StyleSheet.create({
  beer: {
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  leftSection: {
    backgroundColor: '#B56735',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  beerImg: {
    margin: 'auto',
    marginBottom: 10,
  },
  beerTagline: {
    textAlign: 'center',
  },
  rightSection: {
    backgroundColor: '#B6846B',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    width: '60%',
  },
  beerTitle: {
    color: '#371005',
    fontSize: 24,
    marginBottom: 10,
  },
  beerTips: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
