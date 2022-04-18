import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Github = () => (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={12} sx={{ marginTop: '1em' }}>
      <Typography
        sx={{
          fontSize: '2.2em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <u>Github Statistics</u>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Link
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '0.5em',
        }}
        href="https://github.com/anuraghazra/github-readme-stats"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="github-stats"
          alt="gh-stats-img"
          src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=Fazanza&show_icons=true&count_private=true&include_all_commits=true"
        />
      </Link>
    </Grid>
    <Grid item xs={12}>
      <Link
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1em',
        }}
        href="https://github.com/anuraghazra/github-readme-stats"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="github-languages"
          alt="gh-stats-img"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Fazanza"
        />
      </Link>
    </Grid>
  </Grid>
);

export default Github;
