import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import skills from '../../assests/data/skills';
import SkillCard from './SkillCard';

const Skills = () => (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={12} sx={{ marginTop: '1em' }}>
      <Typography
        sx={{
          fontSize: '2.2em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <u>Technical Skills</u>
      </Typography>
    </Grid>
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        marginLeft: '15%',
        marginRight: '10%',
        marginTop: '0.75em',
      }}
    >
      {skills.map((item) => (
        <SkillCard
          skill={item.skill}
          points={item.points}
        />
      ))}
    </Grid>
  </Grid>
);

export default Skills;
