import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Footer = () => (
  <Box
    sx={{
      bgcolor: 'primary.main',
      height: '20vh',
      marginTop: '1.5em',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography variant="h4" component="div">
      Wynn Kaza
    </Typography>
    <Typography variant="h5" component="div" color="text.secondary">
      2022
    </Typography>
  </Box>
);

export default Footer;
