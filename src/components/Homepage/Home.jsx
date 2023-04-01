import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {});
  };
  return (
    <div>
      <h1>Welcome to the home page!</h1>
      <button onClick={handleLogout} className="input-field">
        Log out
      </button>
    </div>
  );
};

export default Home;
