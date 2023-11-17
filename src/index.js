import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Projects from './projects';
import store from './redux/store'
import { Provider } from 'react-redux'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from './about_me';
import Memory from './projects/memory';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <AboutMe />
      },
      {
        path: 'projects',
        element: <Projects />
      }
      ,
      {
        path: 'about_me',
        element: <AboutMe />
      },
      {
        path: 'projects/memory',
        element: <Memory />
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);