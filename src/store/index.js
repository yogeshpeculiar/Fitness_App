import store from './configureStore';
import {setjWT} from './actions/index';

window.store = store;
window.setJwt = setjWT();
