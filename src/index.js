import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { StartEndNodesProvider } from './context/StartEndNodesContext';

import Hyrule from './routes/Hyrule';
import Dungeon1 from './routes/Dungeon1';
import Dungeon2 from './routes/Dungeon2';
import Dungeon3 from './routes/Dungeon3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hyrule /> },
      { path: "/dungeon_1", element: <Dungeon1 /> },
      { path: "/dungeon_2", element: <Dungeon2 /> },
      { path: "/dungeon_3", element: <Dungeon3 /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StartEndNodesProvider>
      <RouterProvider router={router} />
    </StartEndNodesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
