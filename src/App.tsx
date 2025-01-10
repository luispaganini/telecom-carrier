import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
