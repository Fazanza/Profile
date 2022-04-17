import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Github = () => (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
      <Typography>
        Github Statistics
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <a
        href="https://github.com/anuraghazra/github-readme-stats"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="github-stats"
          alt="gh-stats-img"
          src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=Fazanza&show_icons=true&count_private=true&include_all_commits=true"
        />
      </a>
      <a
        href="https://github.com/anuraghazra/github-readme-stats"
      >
        <img
          id="github-languages"
          alt="gh-stats-img"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Fazanza"
        />
      </a>
    </Grid>
  </Grid>
);

export default Github;
