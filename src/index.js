import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Nav from './Nav';
import Projects from './projects';
import store from './redux/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutMe from './about-me';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: 'projects',
        element: <Projects />
      }
      ,
      {
        path: 'about_me',
        element: <AboutMe />
      }
    ]
  }
]);
const router2 = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Nav />}>
    <Route index element={<AboutMe />} />
    <Route path='about_me' element={<AboutMe />} />
    <Route path='projects' element={<Projects />} />
  </Route>
))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router2} />
  </Provider>
);