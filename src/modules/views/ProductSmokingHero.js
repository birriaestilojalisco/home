import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import { FormattedMessage } from 'react-intl';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button} href="tel:+1-909-293-8790">
        <Typography variant="h4" component="span">
          <FormattedMessage 
            id="product-smoking-hero.action.title" 
            default-message="Got any questions? Call us at (909) 293-8790" 
            description="action title"/>
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        <FormattedMessage id="product-smoking-hero.action.subtitle" default-message="We are here to help. Get in touch!" description="action subtitle"/>
      </Typography>
      <img
        src="static/producBuoy.svg"
        className={classes.buoy}
        alt="buoy"
      />
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
