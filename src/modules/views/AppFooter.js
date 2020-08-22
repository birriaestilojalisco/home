import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import { FormattedMessage } from 'react-intl';
import {  IntlContext } from "../../IntlContext";

import {
  Link as RouterLink
} from "react-router-dom";

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" component={RouterLink} to="/">
        <FormattedMessage 
          id="app.author" 
          default-message="birria estilo jalisco" 
          description="author"/>
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'es',
    name: 'Español',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  const context = React.useContext(IntlContext);

  const handleLanguageChange = (event) => {
    context.handleLanguageChange(event.target.value);
  };

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={8} sm={5} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a 
                  href="https://www.instagram.com/birriaestilojalisco909" 
                  target="_blank" 
                  className={classes.icon}>
                  <img
                    src="static/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/birriaestilojalisco909"
                  target="_blank" 
                  className={classes.icon}
                >
                  <img
                    src="static/appFooterInstagram.png"
                    alt="Instagram"
                  />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              <FormattedMessage 
                id="app-footer.legal.title" 
                default-message="Legal" 
                description="legal"/>
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link to="/terms" component={RouterLink}>
                  <FormattedMessage 
                    id="app-footer.legal.terms.title" 
                    default-message="Terms" 
                    description="terms"/>
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link to="/privacy" component={RouterLink} >
                  <FormattedMessage 
                    id="app-footer.legal.privacy.title" 
                    default-message="Privacy" 
                    description="privacy"/>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={9} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              <FormattedMessage 
                id="app-footer.language.title" 
                default-message="Language" 
                description="language"/>
            </Typography>
            <TextField
              select
              onChange={handleLanguageChange}
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code} selected={language.code == context.locale}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {' from '}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
