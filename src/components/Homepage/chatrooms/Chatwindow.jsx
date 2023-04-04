import { useParams } from 'react-router-dom';

const Chatwindow = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Chatwindow;
