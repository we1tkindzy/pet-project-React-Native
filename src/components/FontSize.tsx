import {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppContext from '../context/AppContext';

const FontSize = () => {
  const {toggleFontSize} = useContext(AppContext);

  const handleSmallFontSize = () => {
    toggleFontSize('10');
  };

  const handleNoramlFontSize = () => {
    toggleFontSize('16');
  };

  const handleBigFontSize = () => {
    toggleFontSize('24');
  };

  const handleLargeFontSize = () => {
    toggleFontSize('32');
  };

  return (
    <View style={styles.fontSizeSection}>
      <TouchableOpacity onPress={handleSmallFontSize} style={styles.fontSize}>
        <Text style={[styles.fontSizeText, styles.fontSizeTextSmall]}>
          font
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNoramlFontSize} style={styles.fontSize}>
        <Text style={[styles.fontSizeText, styles.fontSizeTextNoraml]}>
          font
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBigFontSize} style={styles.fontSize}>
        <Text style={[styles.fontSizeText, styles.fontSizeTextBig]}>font</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLargeFontSize} style={styles.fontSize}>
        <Text style={[styles.fontSizeText, styles.fontSizeTextLarge]}>
          font
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FontSize;

const styles = StyleSheet.create({
  fontSizeSection: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  fontSize: {
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  fontSizeText: {
    textAlign: 'center',
    color: '#371005',
  },
  fontSizeTextSmall: {
    fontSize: 10,
  },
  fontSizeTextNoraml: {
    fontSize: 16,
  },
  fontSizeTextBig: {
    fontSize: 24,
  },
  fontSizeTextLarge: {
    fontSize: 32,
  },
});
