import { useParams } from 'react-router-dom';

const Chatwindow = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default Chatwindow;
