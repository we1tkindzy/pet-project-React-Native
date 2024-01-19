import {RootNavigator} from './navigators/RootNavigator';
import {AppProvider} from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
};
export default App;
