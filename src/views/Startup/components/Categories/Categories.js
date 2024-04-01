/* eslint-disable linebreak-style */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Java Developer',
    subtitle:
      'Mastering Java: From Fundamentals to Advanced Programming Concepts',
    icon: 'https://www.svgrepo.com/show/452234/java.svg',
  },
  {
    color: colors.purple[500],
    title: 'Angular Developer',
    subtitle:
      'Mastering Angular: A Course for Building Dynamic Web Applications',
    icon: 'https://www.svgrepo.com/show/452156/angular.svg',
  },
  {
    color: colors.yellow[500],
    title: 'React Developer',
    subtitle:
      'Mastering Modern Web Development with React: From Fundamentals to Advanced Techniques',
    icon: 'https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg',
    png: true,
  },
  {
    color: colors.indigo[500],
    title: 'UI Developer',
    subtitle: 'Building User-Friendly Interfaces with Cutting-Edge Technology ',
    icon: 'https://www.svgrepo.com/show/395657/user-interface.svg',
  },
  {
    color: colors.red[500],
    title: 'Data Scientist',
    subtitle:
      'Master the Art of Data Analysis and Gain In-Demand Skills for the Digital Age.',
    icon: 'https://www.svgrepo.com/show/445691/data-science.svg',
  },
  {
    color: colors.green[500],
    title: 'Data Analyst',
    subtitle:
      'Master the Art of Data Analysis: Unlock Insights and Drive Business Decisions',
    icon: 'https://www.svgrepo.com/show/499846/data-trends.svg',
  },
  {
    color: colors.orange[500],
    title: 'Salesforce',
    subtitle: 'Master the Worlds #1 CRM Platform: Become a  Expert',
    icon: 'https://www.svgrepo.com/show/354306/salesforce.svg',
  },
  {
    color: colors.deepPurple[500],
    title: 'DevOps',
    subtitle:
      'Mastering Continuous Integration and Delivery with DevOps Practices',
    icon: 'https://www.svgrepo.com/show/339133/devops.svg',
  },
];

const Categories = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Categories
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Choose your course by categories
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          The best way to learn is by using skills.
          <br />
          Browse the available course categories, choose your favourite one and
          start learning.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component={Card}
                  padding={3}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box display={'flex'} flexDirection={'column'}>
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={2}
                      bgcolor={alpha(item.color, 0.0)}
                      color={item.color}
                      variant={'rounded'}
                      borderRadius={2}
                    >
                      <img src={item.icon} width={64} />
                    </Box>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      color="text.primary"
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" style={{}}>
                      {item.subtitle}
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1 }} /> */}
                    {/* <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'flex-end'}
                    >
                      <Button
                        endIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </Box>
                        }
                      >
                        Learn more
                      </Button>
                    </Box> */}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Categories;
