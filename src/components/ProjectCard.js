import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProjectCard = ({
  image, alt, title, content,
}) => (
  <Card sx={{ maxWidth: 345 }} variant="outlined">
    <CardActionArea>
      <CardMedia
        components="img"
        height="140"
        image={image}
        alt={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.seconday">
          {content}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ProjectCard;
