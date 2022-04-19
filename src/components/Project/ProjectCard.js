import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import importAll from '../importAllImages';

const ProjectCard = ({
  image, alt, title, content, date, link,
}) => {
  const images = importAll(require.context('../../assests/images', false, /\.(png|jpg|jpeg|gif|svg|jfif)$/));
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardActionArea target="_blank" href={link}>
        <CardMedia
          component="img"
          height="140"
          image={images[image]}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            {date}
          </Typography>
          <Typography variant="body2" color="text.seconday">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={link} target="_blank" rel="noopener noreferrer">Github</a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
