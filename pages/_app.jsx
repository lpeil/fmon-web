import Head from 'next/head';

import { Navbar } from '../components';
import '../stylesheets/app.scss';
import wrapper from '../redux/store';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component }) => (
  <div className="home">
    <Head>
      <title>FMON</title>
    </Head>
    <Navbar />
    <Component />
  </div>
);

export default wrapper.withRedux(MyApp);
