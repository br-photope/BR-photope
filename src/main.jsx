import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NewCustomer from "./components/NewCustomer.jsx";
import OrderPipeline from "./components/OrderPipeline.jsx";
import AllCustomers from "./components/AllCustomers.jsx";
import Setting from "./components/Setting.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/newcustomer",
        element: <NewCustomer/>
      },
      {
        path: "/orderpipeline",
        element: <OrderPipeline />
      },
      {
        path: "/allcustomer",
        element: <AllCustomers />
      },
      {
        path: "/setting",
        element: <Setting />
      }, 
    ]
  },
  {
    path: "/login",
    element: <LoginButton />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-syl50qw016d8wt55.us.auth0.com"
    clientId="XkpHT3jqqRjAc9TRUIxJGgcTgZhkIsgy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <React.StrictMode>
        <RouterProvider router={router} />                                  
      </React.StrictMode>,
  </Auth0Provider>
)