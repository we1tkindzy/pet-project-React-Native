import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

it('should renders Header component', () => {
  const header = renderer.create(<Header navigation={() => jest.fn()} />);
  expect(header).toMatchSnapshot();
});

it('should renders Header component with Back button', () => {
  const header = renderer.create(
    <Header notMainPage={true} navigation={() => jest.fn()} />,
  );
  expect(header).toMatchSnapshot();
});
