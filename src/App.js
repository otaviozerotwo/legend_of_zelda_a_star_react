import { Outlet } from 'react-router-dom';

import './assets/fonts.css';

import '../src/styles/MenuAcoes.css';

function App() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default App;
