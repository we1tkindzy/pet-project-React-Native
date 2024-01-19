import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import Pagintaion from '../components/Pagination';

it('should renders Pagintaion component with a second active page', () => {
  const pagination = renderer.create(
    <Pagintaion pageNumber="2" setPageNumber={jest.fn()} />,
  );
  expect(pagination).toMatchSnapshot();
});
