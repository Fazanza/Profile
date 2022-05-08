import { useParams } from 'react-router-dom';
import BodePlotGenerator from '../../assests/projects/BodePlotGenerator';
import CircuitAnalysis from '../../assests/projects/CircuitAnalysis withFunctionGenerator';
import CPlusPlusProject from '../../assests/projects/CPlusPlusProject';
import EBike from '../../assests/projects/EBike';
import Website from '../../assests/projects/Website';

const chooseProject = (id) => {
  if (id === 'BodePlotGenerator') {
    return <BodePlotGenerator />;
  } if (id === 'CircuitAnalysis') {
    return <CircuitAnalysis />;
  } if (id === 'CPlusPlusProject') {
    return <CPlusPlusProject />;
  } if (id === 'E-Bike') {
    return <EBike />;
  } if (id === 'Website') {
    return <Website />;
  }
  return null;
};

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <>
      {chooseProject(id)}
    </>
  );
};

export default ProjectPage;
