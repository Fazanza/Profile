import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Icon from '@mui/material/Icon';
import experiences from '../../assests/data/experiences';
import ExperienceCard from './ExperienceCard';
import Pdf from '../../assests/Documents/resume.pdf';

const Experiences = () => (
  <Box sx={{ width: '100%' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: '2.2em',
            display: 'flex',
            marginTop: '0.3em',
            justifyContent: 'center',
            marginBot: '0.1em',
          }}
        >
          <u>Experiences</u>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {experiences.map((item) => (
          <ExperienceCard item={item} />
        ))}
      </Grid>
    </Grid>
    <Typography
      sx={{
        fontSize: '1.7em',
        display: 'flex',
        marginTop: '0.3em',
        justifyContent: 'center',
      }}
    >
      <u>Resume</u>
    </Typography>
    <Link
      href={Pdf}
      target="_blank"
      rel="noreferrer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0.3em',
      }}
    >
      <Icon>
        <FileDownloadIcon />
      </Icon>
      Download Resume
    </Link>
  </Box>
);

export default Experiences;
