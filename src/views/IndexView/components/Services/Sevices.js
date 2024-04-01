/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Guidance',
    subtitle:
      // "We provide 24/7 support for our clients, ensuring that they're never left in the dark.",
      // eslint-disable-next-line quotes
      "With our team of experienced recruiters and industry experts, you can trust that you're in capable hands. We stay updated on the latest trends and technologies in IT staffing to provide you with informed guidance and support.",
    icon: 'https://img.icons8.com/?size=256&id=eBq7ykZNs0an&format=png',
  },
  {
    title: 'Expertise',
    subtitle:
      'Our team of experienced recruiters and industry experts understand the unique demands of IT staffing. Our network includes the best IT professionals in the industry, carefully vetted for their skills, experience, and expertise',
    icon: 'https://img.icons8.com/?size=256&id=58861&format=png',
  },
  {
    title: 'Partnership',
    subtitle:
      'We work closely with our clients to provide tailored solutions that meet their specific needs Beyond just filling positions, we aim to be your trusted partner in building a strong and resilient IT workforce for sustained success.',
    icon: 'https://img.icons8.com/?size=256&id=qtmxiFzhBiJq&format=png',
  },
];

const Services = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Empowering Your IT Journey: Our Approach
            {/*  Guiding Your Success with Expertise and Partnership */}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            At LegitWave, we specialize in connecting top IT professionals with
            leading companies, ensuring seamless integration and optimal
            productivity.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  padding={1}
                  bgcolor={'#fff'}
                  src={item.icon}
                ></Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
