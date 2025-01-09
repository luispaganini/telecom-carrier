import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NumberTable from './components/NumberTable/NumberTable';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <h2>Phone Numbers for Sale</h2>
        <NumberTable />
      </div>
    </Provider>
  );
};

export default App;
