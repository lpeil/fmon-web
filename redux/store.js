import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/root';

const store = createStore(rootReducer);

const makeStore = () => store;

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
