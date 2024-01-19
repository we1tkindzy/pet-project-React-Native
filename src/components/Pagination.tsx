import {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import ThemeContext from '../context/AppContext';

interface PaginationProps {
  pageNumber: string;
  setPageNumber: (pageNumber: string) => void;
}

const countOfPage: string[] = ['1', '2', '3', '4', '5'];

const Pagintaion = ({pageNumber, setPageNumber}: PaginationProps) => {
  const {theme} = useContext(ThemeContext);

  const borderColor = theme === 'dark' ? '#D9B597' : '#371005';

  const colorStyles = StyleSheet.create({
    textColor: {
      color: theme === 'dark' ? '#371005' : '#B56735',
    },
    borderColorPagination: {
      borderColor: borderColor,
    },
    borderColorButton: {
      borderColor: borderColor,
    },
  });

  return (
    <View style={[styles.pagination, colorStyles.borderColorPagination]}>
      {countOfPage.map((pageNum: string, id: number) => (
        <TouchableOpacity
          key={id}
          style={[styles.paginationButton, colorStyles.borderColorButton]}
          onPress={() => setPageNumber(pageNum)}>
          <Text
            style={[
              colorStyles.textColor,
              pageNum === pageNumber && styles.activePage,
            ]}>
            {pageNum}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Pagintaion;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    borderColor: '#371005',
    borderWidth: 1,
  },
  paginationButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#371005',
    borderWidth: 1,
  },
  activePage: {
    color: '#FFFFFF',
  },
});
