import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import importAll from '../importAllImages';
import GithubLink from './GithubLink';

const ProjectCard = ({
  image,
  alt,
  title,
  content,
  date,
  link,
  Github,
}) => {
  const images = importAll(require.context('../../assests/images', false, /\.(png|jpg|jpeg|gif|svg|jfif)$/));
  return (
    <Card sx={{ width: 345, height: 355 }} variant="outlined">
      <Link to={link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <CardMedia
          component="img"
          height="140"
          image={images[image]}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="black" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.seconday">
            {date}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 10 }} color="text.seconday">
            {content}
          </Typography>
        </CardContent>
      </Link>
      <CardContent>
        {Github.length > 0 ? <GithubLink link={link} /> : null}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
