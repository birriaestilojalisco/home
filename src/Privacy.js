/* eslint-disable import/order */
import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from './modules/components/Markdown';
import Typography from './modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import privacy from './modules/views/privacy.md';
import AppFooter from './modules/views/AppFooter';

fetch(privacy)
  .then(response => response.text())
  .then(text => {
    // Logs a string of Markdown content.
    // Now you could use e.g. <rexxars/react-markdown> to render it.
    console.log(text);
  });

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
