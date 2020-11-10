import { Grid } from '@material-ui/core';

const Home = () => (
  <div className="home-index">
    <Grid container className="grid" justify="space-around">
      <Grid container item md={5} sm={12}>
        <Grid style={{ backgroundColor: 'red' }} className="card fullHeight" />
      </Grid>
      <Grid
        container
        item
        md={6}
        sm={12}
        justify="space-between"
        direction="column"
      >
        <Grid item style={{ backgroundColor: 'blue' }} className="card halfHeight" />
        <Grid item style={{ backgroundColor: 'brown' }} className="card halfHeight" />
      </Grid>
    </Grid>
  </div>
);

export default Home;
