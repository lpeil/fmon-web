import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';

import { Navbar } from '../components';
import theme from '../theme/material';
import wrapper from '../redux/store';
import '../stylesheets/app.scss';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component }) => (
  <ThemeProvider theme={theme}>
    <div className="home">
      <Head>
        <title>FMON</title>
      </Head>
      <Navbar />
      <Component />
    </div>
  </ThemeProvider>
);

export default wrapper.withRedux(MyApp);
