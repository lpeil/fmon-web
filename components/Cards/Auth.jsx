import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@material-ui/core';

const AuthCard = ({ children, title }) => (
  <Grid container className="auth" justify="center" alignItems="center">
    <Grid item>
      <Paper square>
        <Typography variant="h4">{title}</Typography>
        {children}
      </Paper>
    </Grid>
  </Grid>
);

AuthCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

AuthCard.defaultProps = {
  title: '',
};

export default AuthCard;
