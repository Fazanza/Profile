import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

const GithubLink = ({ link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
  </Link>
);

export default GithubLink;
