import React from 'react';
import {createRoot} from 'react-dom/client';
import'./index.css'
import App from './App'
import * as serviceWorker from './serviceWorker';
import { Store } from './Redux/reducer';
import { Provider } from 'react-redux';
const root = createRoot(document.getElementById('root'))

root.render(<Provider store={Store}> <App /></Provider>)

serviceWorker.unregister();
