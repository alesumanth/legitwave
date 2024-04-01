import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Link from 'next/link';
import { Typography } from '@mui/material';

const SidebarNav = () => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="LegitWave"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              'https://firebasestorage.googleapis.com/v0/b/clientpanel-2bb9c.appspot.com/o/logo.jpg?alt=media&token=c8ef208d-4c39-448e-9dcc-31327086fb10'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Link href={'/'}>
          <Typography
            color="text.primary"
            variant="caption"
            component="p"
            sx={{
              flexGrow: 1,
              fontSize: 15,
              mb: 3,

              cursor: 'pointer',
            }}
          >
            HOME
          </Typography>
        </Link>
        <Link href={'/about'}>
          <Typography
            color="text.primary"
            variant="caption"
            component="p"
            sx={{
              flexGrow: 1,
              fontSize: 15,
              mb: 3,

              cursor: 'pointer',
            }}
          >
            ABOUT US
          </Typography>
        </Link>

        {/* <Link href={'#'}>
          <Typography
            color="text.primary"
            variant="caption"
            component="p"
            sx={{
              flexGrow: 1,
              fontSize: 15,
              mb:3,

              cursor: 'pointer',
              marginLeft: -1,
            }}
          >
            CONSULTING
          </Typography>
        </Link> */}
        <Link href={'/contact-page'}>
          <Typography
            color="text.primary"
            variant="caption"
            component="p"
            sx={{
              flexGrow: 1,
              fontSize: 15,
              mb: 3,

              cursor: 'pointer',
            }}
          >
            CONTACT US
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
