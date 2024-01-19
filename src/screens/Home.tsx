import {useContext, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import ThemeContext from '../context/AppContext';
import BeerItem from '../components/BeerItem';
import Header from '../components/Header';
import Search from '../components/Search';
import Pagintaion from '../components/Pagination';

import axios from 'axios';

interface BeerProps {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  brewers_tips: string;
  navigation?: () => void;
}

interface NavigationProps {
  navigation: () => void;
}

const Home = ({navigation}: NavigationProps) => {
  const {theme, pageNumber, setPageNumber, searchAbv, setSearchText} =
    useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme === 'light' ? '#E3D6C8' : '#B6846B',
  };

  const [bearsArray, setBearsArray] = useState([]);

  const search = searchAbv ? searchAbv : '0';

  const options = {
    method: 'GET',
    url: `https://api.punkapi.com/v2/beers?abv_gt=${search}&page=${pageNumber}&per_page=5`,
    headers: {
      'x-ratelimit-limit': '3600',
      'x-ratelimit-remaining': '3587',
    },
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.request(options);
      setBearsArray(response.data);
    };

    getData().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, searchAbv]);

  return (
    <SafeAreaView style={[themeStyle, styles.flex]}>
      <StatusBar
        barStyle={theme === 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={themeStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={themeStyle}>
        <Header navigation={navigation} />

        <View style={styles.container}>
          <Search searchAbv={searchAbv} setSearchText={setSearchText} />

          {bearsArray && (
            <View style={styles.bookList}>
              {bearsArray.map((beer: BeerProps) => (
                <BeerItem key={beer.id} beer={beer} navigation={navigation} />
              ))}
            </View>
          )}

          <Pagintaion pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 15,
  },
  bookList: {
    width: '100%',
    flex: 2,
  },
});
