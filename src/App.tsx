import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TestPage />
    </Provider>
  );
};

export default App;
