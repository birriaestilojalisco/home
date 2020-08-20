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

function Privacy() {
  const [privacyText, setPrivacyText] = React.useState('');
  React.useEffect(() => {
    fetch(privacy)
    .then(response => response.text())
    .then(text => {
      setPrivacyText(text);
    });
  });

  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacyText}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
