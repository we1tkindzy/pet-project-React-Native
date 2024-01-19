import {useContext} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import AppContext from '../context/AppContext';
import Header from '../components/Header';

const Beer = ({route, navigation}: any) => {
  const {beer} = route.params;
  const {
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    ingredients,
    volume,
    food_pairing,
    brewers_tips,
    contributed_by,
    abv,
    ebc,
    ibu,
    ph,
    srm,
    target_og,
    target_fg,
  } = beer;

  const {theme, fontSize} = useContext(AppContext);

  const textColor = theme === 'dark' ? '#ffffff' : '#371005';
  const bgColor = theme === 'dark' ? '#B6846B' : '#E3D6C8';

  const colorStyles = StyleSheet.create({
    text: {
      color: theme === 'dark' ? 'white' : 'black',
    },

    textColor: {
      color: textColor,
    },
    bgColor: {
      backgroundColor: bgColor,
    },
    borderColor: {
      borderColor: textColor,
    },
  });

  const themeStyle = {
    backgroundColor: bgColor,
  };

  return (
    <SafeAreaView style={[themeStyle, styles.flex]}>
      <StatusBar
        barStyle={theme === 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={themeStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={themeStyle}>
        <Header notMainPage={true} navigation={navigation} />

        <View style={styles.container}>
          <View style={colorStyles.bgColor}>
            <View style={styles.wrapper}>
              <Image
                alt={name}
                height={150}
                width={150}
                resizeMode="contain"
                source={{uri: `${image_url}`}}
                style={styles.img}
              />

              <View style={styles.info}>
                <Text style={[styles.title, colorStyles.textColor]}>
                  {name} -&nbsp;<Text style={styles.tagline}>{tagline}</Text>
                </Text>

                <Text style={[styles.infoText, colorStyles.textColor]}>
                  {volume.value} {volume.unit}
                </Text>

                <Text style={[styles.infoText, colorStyles.textColor]}>
                  Drink strength: {abv}
                </Text>
                <Text style={[styles.infoText, colorStyles.textColor]}>
                  Bitterness: {ibu}
                </Text>
                <Text style={[styles.infoText, colorStyles.textColor]}>
                  Hydrogen ion concentration: {ph}
                </Text>
                <Text style={[styles.infoText, colorStyles.textColor]}>
                  Beer color: SRM - {srm}, EBC - {ebc}
                </Text>
                <Text style={[styles.infoText, colorStyles.textColor]}>
                  Beer density: OG - {target_og}, FG - {target_fg}
                </Text>

                <Text style={[styles.infoText, colorStyles.textColor]}>
                  First brewed {first_brewed}
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.description,
                colorStyles.textColor,
                {fontSize: Number(fontSize)},
              ]}>
              {description}
            </Text>

            <Text style={[styles.ingredientsTitle, colorStyles.textColor]}>
              Ingredients
            </Text>
            <View style={[styles.ingredientsWrapper, colorStyles.borderColor]}>
              <View style={styles.ingredient}>
                <Text style={colorStyles.textColor}>malt:</Text>
                {ingredients.malt.map(
                  (ingredient: {name: string}, id: number) => (
                    <Text key={id} style={colorStyles.textColor}>
                      {ingredient.name}
                    </Text>
                  ),
                )}
              </View>

              <View style={styles.ingredient}>
                <Text style={colorStyles.textColor}>hops:</Text>
                {ingredients.hops.map(
                  (ingredient: {name: string}, id: number) => (
                    <Text key={id} style={colorStyles.textColor}>
                      {ingredient.name}
                    </Text>
                  ),
                )}
              </View>

              <View style={styles.ingredient}>
                <Text style={colorStyles.textColor}>yeast:</Text>
                <Text style={colorStyles.textColor}>{ingredients.yeast}</Text>
              </View>
            </View>

            <View style={styles.foodPairing}>
              <Text style={colorStyles.textColor}>Food pairing:</Text>
              {food_pairing.map((food: string, id: number) => (
                <Text style={colorStyles.textColor} key={id}>
                  - {food}
                </Text>
              ))}
            </View>

            <Text style={[styles.brewersTips, colorStyles.textColor]}>
              <Text style={styles.brewersTipsTitle}>Brewers tips:</Text> "
              {brewers_tips}"
            </Text>

            <Text style={colorStyles.textColor}>
              Contributed by {contributed_by}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Beer;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 25,
  },
  img: {
    width: '40%',
  },
  info: {
    rowGap: 5,
    width: '60%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagline: {
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'normal',
  },
  infoText: {
    fontSize: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  ingredientsWrapper: {
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  ingredient: {
    width: '30%',
  },
  foodPairing: {
    marginBottom: 10,
  },
  brewersTips: {
    marginBottom: 10,
  },
  brewersTipsTitle: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
