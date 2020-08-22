import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { FormattedMessage } from 'react-intl';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="static/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="static/productValues1.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                <FormattedMessage 
                  id="product-values.value1.header" 
                  default-message="The best birria" 
                  description="product value 1 header"/>
              </Typography>
              <Typography variant="h5">
                <FormattedMessage 
                  id="product-values.value1.body" 
                  default-message="From the latest trendy ramen to the iconic tacos, go for a tasty meal just a few stops away from your home." 
                  description="product value 1 body"/>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="static/productValues2.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                <FormattedMessage 
                  id="product-values.value2.header" 
                  default-message="New experiences" 
                  description="product value 2 header"/>
              </Typography>
              <Typography variant="h5">
                <FormattedMessage 
                  id="product-values.value2.body" 
                  default-message="Try our ramen, take a sip of our aguas frescas or enjoy our delicious quesabirria tacos… your Sundays will not be alike." 
                  description="product value 2 body"/>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="static/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                <FormattedMessage 
                  id="product-values.value3.header" 
                  default-message="Exclusive Offers" 
                  description="product value 3 header"/>
              </Typography>
              <Typography variant="h5">
                <FormattedMessage 
                  id="product-values.value3.body" 
                  default-message="By following us on instagram, you will access offers that you will not find anywhere else." 
                  description="product value 3 body"/>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
