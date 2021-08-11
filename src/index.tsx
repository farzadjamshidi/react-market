import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';
import store from './store';

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root'));