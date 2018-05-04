import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/index.css';
import App from './components/App';
import store from './stories/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
