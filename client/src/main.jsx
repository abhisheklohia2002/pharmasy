import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {  
  BrowserRouter,
}   
from 'react-router-dom';  
import { Provider } from 'react-redux'
import Main_Store from './components/ReduxStore/Main_Store.jsx'


Main_Store.subscribe(() => console.log(Main_Store.getState()))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Main_Store} >

    <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
