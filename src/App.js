import { Outlet } from 'react-router-dom';

import './assets/fonts.css';

function App() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default App;
