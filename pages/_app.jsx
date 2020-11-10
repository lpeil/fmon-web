import Head from 'next/head';

import { Navbar } from '../components';
import '../stylesheets/app.scss';

// eslint-disable-next-line
const MyApp = ({ Component }) => (
  <div className="home">
    <Head>
      <title>FMON</title>
    </Head>
    <Navbar />
    <Component />
  </div>
);

export default MyApp;
