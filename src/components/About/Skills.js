import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import skills from '../../assests/data/skills';

const Skills = () => (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
      {skills.map((item) => (
        <Typography>
          {item.skill}
        </Typography>
      ))}
    </Grid>
    <Grid item xs={6}>
      <Typography>
        Technical Skills
      </Typography>
    </Grid>
  </Grid>
);

export default Skills;
