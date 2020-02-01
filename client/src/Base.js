import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './components/App';

class Base extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default Base;