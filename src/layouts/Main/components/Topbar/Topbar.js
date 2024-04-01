import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { Typography } from '@mui/material';
import Link from 'next/link';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();
  // const {
  //   // landings: landingPages,
  //   // secondary: secondaryPages,
  //   // company: companyPages,
  //   // account: accountPages,
  //   // portfolio: portfolioPages,
  //   // blog: blogPages,
  // } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      padding={1}
    >
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
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: {
            xs: 1,
            md: 2,
            lg: 4,
          },
        }}
        alignItems={'center'}
      >
        <Link href={'/'}>
          <Typography
            color="text.primary"
            variant="caption"
            component="p"
            sx={{
              flexGrow: 1,
              fontSize: 15,

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

              cursor: 'pointer',
            }}
          >
            CONTACT US
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
