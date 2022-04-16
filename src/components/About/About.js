import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Icon from '@mui/material/Icon';
import Stats from './Stats';

const About = () => {
  const x = 1;
  console.log(x);
  return (
    <Box sx={{ width: '100%' }}>
      <h1>About Me</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Icon>
            <GitHubIcon fontSize="large" />
          </Icon>
        </Grid>
        <Grid item xs={4}>
          <p>Name:</p>
          <p>Year:</p>
          <p>Location:</p>
          <p>Email:</p>
          <p>University:</p>
          <p>Major/Minor:</p>
        </Grid>
        <Grid item xs={4}>
          <p>Wynn Kaza</p>
          <p>Sophomore</p>
          <p>Rochester Hills, MI</p>
          <p>wynnmka@gmail.com</p>
          <p>University of Michigan, Ann Arbor</p>
          <p>Electrical Engineering / Computer Science</p>
        </Grid>
      </Grid>
      <h3>Github Statistics</h3>
      <Stats />
    </Box>
  );
};

export default About;
