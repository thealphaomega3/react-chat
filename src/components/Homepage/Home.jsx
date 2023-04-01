import { getAuth, signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import ChatroomLayout from './ChatroomLayout';

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
    <div className="container">
      <h1>Welcome to the home page!</h1>
      <UserProfile />
      <ChatroomLayout />
      <button onClick={handleLogout} className="input-field">
        Log out
      </button>
    </div>
  );
};

export default Home;
