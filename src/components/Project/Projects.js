import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import projects from '../../assests/data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
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
          <u>Projects</u>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {projects.map((project) => (
          <ProjectCard
            image={project.img}
            alt={project.alt}
            title={project.title}
            content={project.content}
            date={project.data}
            link={project.links}
          />
        ))}
      </Grid>
    </Grid>
  </Box>
);

export default Projects;
