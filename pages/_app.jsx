import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

import { Navbar } from '../components';
import '../stylesheets/app.scss';
import store from '../redux/store';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component }) => (
  <Provider store={store}>
    <div className="home">
      <Head>
        <title>FMON</title>
      </Head>
      <Navbar />
      <Component />
    </div>
  </Provider>
);

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
