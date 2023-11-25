import { Provider } from 'react-redux';
import './App.css';
import Navigation from './Navigation';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store/store';

function App() {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
    <Navigation/>
       </PersistGate>
    </Provider>
  );
}

export default App;
