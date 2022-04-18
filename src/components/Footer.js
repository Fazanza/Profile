import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Footer = () => (
  <Box sx={{ bgcolor: 'primary.main', height: '20vh', marginTop: '1.5em' }}>
    <Typography variant="h4" component="div">
      Hello
    </Typography>
    <Typography variant="h4" component="div">
      2022
    </Typography>
  </Box>
);

export default Footer;
