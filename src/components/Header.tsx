import {View, StyleSheet, Button} from 'react-native';
import Themization from '../components/Themization';

interface HeaderProps {
  notMainPage?: boolean;
  navigation: any;
}

const Header = ({notMainPage, navigation}: HeaderProps) => {
  return (
    <View style={styles.settingsSection}>
      {notMainPage && (
        <Button
          color={'#371005'}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      )}

      <Themization />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  settingsSection: {
    width: '100%',
    backgroundColor: '#D9B597',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
});
