import renderer from 'react-test-renderer';
import SplashScreen from '../src/Screens/SplashScreen';

test('renders splash screen', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
