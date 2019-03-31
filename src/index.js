import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: grey
    },
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
    <ReduxProvider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </ReduxProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
