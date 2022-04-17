import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Icon from '@mui/material/Icon';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Github from './Github';
import Skills from './Skills';
import about from '../../assests/data/about';

const About = () => (
  <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Typography
          sx={{
            fontSize: '1.2em',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          About me
        </Typography>
        <Icon
          sx={{
            fontSize: '10em',
            color: '#0850A2',
            display: 'flex',
            direction: 'column',
          }}
        >
          <GitHubIcon fontSize="large" />
          <EmailIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
        </Icon>
      </Grid>
      <Grid item xs={6}>
        {about.map((item) => (
          <Typography
            id={item.topic}
            sx={{
              fontSize: '1.2em',
            }}
          >
            {item.topic}
            {item.answer}
          </Typography>
        ))}
      </Grid>
    </Grid>
    <Skills />
    <Github />
  </Box>
);

export default About;
