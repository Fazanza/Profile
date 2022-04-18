/* eslint-disable no-unused-vars */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const SkillCard = ({ skill, points }) => (
  <Card sx={{ width: '250px', border: 0.5 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
        {skill}
      </Typography>
      <Rating
        name="read-only"
        value={points}
        readOnly
      />
    </CardContent>
  </Card>
);

export default SkillCard;
