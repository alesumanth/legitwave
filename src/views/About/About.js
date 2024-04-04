import React from 'react';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Hero,
  Story,
  Team,
  WhoWeAre,
  Application,
} from './components';
import { Box } from '@mui/material';

const About = () => {
  const theme = useTheme();

  return (
    <Main colorInvert={true}>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <Team />
      </Container>

      <Contact />

      {/* <Container maxWidth={800}>
        <Application />
      </Container> */}
    </Main>
  );
};

export default About;
