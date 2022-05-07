import { useParams } from 'react-router-dom';
import BodePlotGenerator from '../../assests/projects/BodePlotGenerator';

const ProjectPage = () => {
  const { params } = useParams();
  console.log('hello');

  return (
    <div>
      {params}
      <BodePlotGenerator />
    </div>
  );
};

export default ProjectPage;
