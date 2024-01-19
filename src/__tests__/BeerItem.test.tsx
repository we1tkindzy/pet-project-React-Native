import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import BeerItem from '../components/BeerItem';

const testBeerData = {
  id: 1,
  name: 'Beer Name',
  tagline: 'tagline',
  image_url: 'img/beer.png',
  brewers_tips: 'tips',
};

it('should renders BeerItem component with data', () => {
  const beerItem = renderer.create(
    <BeerItem beer={testBeerData} navigation={jest.fn()} />,
  );
  expect(beerItem).toMatchSnapshot();
});
