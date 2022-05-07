import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Icon from '@mui/material/Icon';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Github from './Github';
import Skills from './Skills';
import about from '../../assests/data/about';

const About = () => (
  <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '2.2em',
            display: 'flex',
            marginTop: '0.3em',
            justifyContent: 'center',
          }}
        >
          <u>About me</u>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0.4em',
          }}
        >
          <Link
            href="https://github.com/Fazanza"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              sx={{
                width: '100%',
                height: '80%',
              }}
            >
              <GitHubIcon fontSize="large" />
            </Icon>
          </Link>
          <Link
            href="mailto:wynnmka@gmail.com"
          >
            <Icon
              sx={{
                width: '100%',
                height: '80%',
              }}
            >
              <EmailIcon fontSize="large" />
            </Icon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/wynn-kaza-24a773223/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              sx={{
                width: '100%',
                height: '80%',
              }}
            >
              <LinkedInIcon fontSize="large" />
            </Icon>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {about.map((item) => (
          <Typography
            key={item.topic}
            sx={{
              fontSize: '1.2em',
              display: 'flex',
              justifyContent: 'center',
              direction: 'column',
            }}
          >
            <b>
              {item.topic}
              &nbsp;
            </b>
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
