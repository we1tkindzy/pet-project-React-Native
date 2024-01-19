import {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ThemeContext from '../context/AppContext';
import Home from '../screens/Home';
import Beer from '../screens/Beer';

const {Navigator, Screen} = createStackNavigator();

export const RootNavigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Navigator initialRouteName={'Home'}>
        <Screen
          name="Catalog"
          component={Home}
          options={{
            headerTintColor: theme === 'dark' ? '#371005' : '#FFFFFF',
            headerStyle: {
              backgroundColor: theme === 'dark' ? '#E3D6C8' : '#B6846B',
            },
          }}
        />
        <Screen
          name="Beer"
          component={Beer}
          options={{
            headerTintColor: theme === 'dark' ? '#371005' : '#FFFFFF',
            headerStyle: {
              backgroundColor: theme === 'dark' ? '#E3D6C8' : '#B6846B',
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
