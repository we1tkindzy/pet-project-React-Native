import {useContext} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

import ThemeContext from '../context/AppContext';

interface SearchProps {
  searchAbv: string;
  setSearchText: (searchAbv: string) => void;
}

const Search = ({searchAbv, setSearchText}: SearchProps) => {
  const {theme} = useContext(ThemeContext);

  const colorStyles = StyleSheet.create({
    textColor: {
      color: theme === 'dark' ? '#ffffff' : '#371005',
    },
  });

  const abv = searchAbv || '0';

  return (
    <>
      <TextInput
        style={[styles.searchInput, colorStyles.textColor]}
        onChangeText={setSearchText}
        value={searchAbv}
        placeholder="Search for beer by strength(abv)"
      />
      <Text style={styles.searchInputText}>
        Beer strength(abv) is more than: {abv}
      </Text>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#D9B597',
    borderColor: '#371005',
  },
  searchInputText: {
    marginBottom: 10,
  },
});
