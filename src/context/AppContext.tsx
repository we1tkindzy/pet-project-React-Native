import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext({
  theme: 'light',
  toggleTheme: (newTheme: string): void => {},
  fontSize: '16',
  toggleFontSize: (newFontSize: string): void => {},
  pageNumber: '1',
  setPageNumber: (newPageNumber: string): void => {},
  searchAbv: '',
  setSearchText: (newSearchText: string): void => {},
});

interface ModifyChildrenProp {
  children: any;
}

export const AppProvider = ({children}: ModifyChildrenProp) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
  };

  const [fontSize, setFontSize] = useState('16');

  useEffect(() => {
    const getFontSize = async () => {
      try {
        const savedFontSize = await AsyncStorage.getItem('font');
        if (savedFontSize) {
          setFontSize(savedFontSize);
        }
      } catch (error) {
        console.log('Error loading font size:', error);
      }
    };
    getFontSize();
  }, [fontSize]);

  const toggleFontSize = (newFontSize: string) => {
    setFontSize(newFontSize);
    AsyncStorage.setItem('font', newFontSize);
  };

  const [pageNumber, setPage] = useState('1');

  useEffect(() => {
    const getPageNumber = async () => {
      try {
        const savedPageNumber = await AsyncStorage.getItem('page');
        if (savedPageNumber) {
          setPage(savedPageNumber);
        }
      } catch (error) {
        console.log('Error loading page number:', error);
      }
    };
    getPageNumber();
  }, [pageNumber]);

  const setPageNumber = (newPageNumber: string) => {
    setPage(newPageNumber);
    AsyncStorage.setItem('page', newPageNumber);
  };

  const [searchAbv, setSearch] = useState('');

  useEffect(() => {
    const getSearchText = async () => {
      try {
        const savedPageNumber = await AsyncStorage.getItem('search');
        if (savedPageNumber) {
          setSearch(savedPageNumber);
        }
      } catch (error) {
        console.log('Error loading search params:', error);
      }
    };
    getSearchText();
  }, [searchAbv]);

  const setSearchText = (newSearchText: string) => {
    setSearch(newSearchText);
    AsyncStorage.setItem('search', newSearchText);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        fontSize,
        toggleFontSize,
        pageNumber,
        setPageNumber,
        searchAbv,
        setSearchText,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
