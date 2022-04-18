import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ExperienceCard = ({ item }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Card
      variant="outlined"
      sx={{
        marginBottom: '2em',
        width: '60%',
        border: 1,
        borderRadius: '0.5em',
      }}
    >
      <CardContent sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '12em' }}>
          <Typography color="black" gutterBottom>
            <b>{item.Company}</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.Location}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 10 }} color="text.secondary">
            {item.EmploymentDate}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ mb: 1.5 }} color="black">
            <b>{item.Position}</b>
          </Typography>
          <Typography color="text.secondary">
            {item.Content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default ExperienceCard;
