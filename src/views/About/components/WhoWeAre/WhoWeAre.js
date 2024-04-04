/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Image from 'next/image';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="start"
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 3,
            }}
          >
            <img
              src={'https://img.icons8.com/?size=256&id=111406&format=png'}
              height={110}
              alt="Plant"
            />

            <Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                Our Vision
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                Our vision is not about revenues or profits, it rather is the
                complete satisfaction from our clients and expansion of our
                client base.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="start"
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 3,
            }}
          >
            <img
              src={'https://img.icons8.com/?size=256&id=115350&format=png'}
              height={110}
              alt="Plant"
            />

            <Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                Our Mission
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                To understand the client requirements and supply the right and
                best resources.
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                To design, develop and implement new applications which will
                help companies to grow.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="start"
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 3,
            }}
          >
            <img
              src={
                'https://img.icons8.com/?size=256&id=VemAfk457Vrg&format=png'
              }
              height={110}
              alt="Plant"
            />

            <Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                Our Philosophy
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                We are committed to delivering top-tier resources tailored to
                our clients' needs. With our deep understanding, we design,
                develop, and implement both enhancements to existing
                applications and new innovative solutions.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="start"
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 3,
            }}
          >
            <img
              src={'https://img.icons8.com/?size=256&id=110567&format=png'}
              height={110}
              alt="Plant"
            />

            <Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                Our Values
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                🔹 Respect and Faith to Customers
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                🔹 Creativity, Invention and Innovation
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                🔹 Transparency, Integrity and Excellence
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box marginTop={5}>
        <Typography variant={'h5'} fontWeight={700} gutterBottom>
          We expertise in providing solutions to many industries like,
        </Typography>

        <Grid container spacing={1} sx={{ marginTop: 1 }}>
          {[
            'Automobile',
            'Retail',
            'Banking',
            'Telecom',
            'Healthcare',
            'Manufacturing',
            'Education',
            'Media & Entertainment',
            'Travel & Hospitality',
            'Insurance',
            'Real Estate',
            'Government',
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={ListItem}
                disableGutters
                width={'auto'}
                padding={0}
              >
                <Box
                  component={ListItemAvatar}
                  minWidth={'auto !important'}
                  marginRight={2}
                >
                  <Box
                    component={Avatar}
                    bgcolor={theme.palette.secondary.main}
                    width={20}
                    height={20}
                  >
                    <svg
                      width={12}
                      height={12}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Box>
                </Box>
                <ListItemText primary={item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
