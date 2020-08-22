import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { FormattedMessage } from 'react-intl';

const backgroundImage = 'https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3625&q=80'
  //'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        <FormattedMessage
          id="product-hero.header" 
          default-message="Upgrade Your Sundays"
          description="header" />
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        <FormattedMessage
          id="product-hero.subheader" 
          default-message="Enjoy delicious birria tacos every Sunday."
          description="subheader" />
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        target="_blank"
        href="https://www.instagram.com/birriaestilojalisco909"
      >
        <FormattedMessage 
          id="product-hero.action"
          default-messsage="Follow Us on Instagram"
          description="product hero action" />
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        <FormattedMessage 
        id="product-hero.footnote" 
        default-message="Discover the experience" 
        description="product hero footnote" />
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
