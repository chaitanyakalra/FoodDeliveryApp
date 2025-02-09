// src/store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer); // Create your Redux store with the root reducer

export default store; // Export the store
