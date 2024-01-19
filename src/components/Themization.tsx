import {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppContext from '../context/AppContext';

const Themization = () => {
  const {theme, toggleTheme} = useContext(AppContext);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    theme === 'light' ? setIsDarkTheme(false) : setIsDarkTheme(true);
  }, [theme]);

  const handleToggleLightTheme = () => {
    toggleTheme('light');
  };

  const handleToggleDarkTheme = () => {
    toggleTheme('dark');
  };

  return (
    <View style={styles.themeTogglersSection}>
      {isDarkTheme ? (
        <TouchableOpacity
          onPress={handleToggleLightTheme}
          style={[styles.themeToggler, styles.themeTogglerLight]}>
          <Text style={[styles.themeTogglerText, styles.themeTogglerTextLight]}>
            light theme
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleToggleDarkTheme}
          style={[styles.themeToggler, styles.themeTogglerDark]}>
          <Text style={[styles.themeTogglerText, styles.themeTogglerTextDark]}>
            dark theme
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Themization;

const styles = StyleSheet.create({
  themeTogglersSection: {
    width: '40%',
    marginLeft: 'auto',
  },
  themeToggler: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  themeTogglerText: {
    textAlign: 'center',
  },
  themeTogglerLight: {
    backgroundColor: '#E3D6C8',
  },
  themeTogglerDark: {
    backgroundColor: '#B6846B',
  },
  themeTogglerTextLight: {
    color: '#371005',
  },
  themeTogglerTextDark: {
    color: '#ffffff',
  },
});
