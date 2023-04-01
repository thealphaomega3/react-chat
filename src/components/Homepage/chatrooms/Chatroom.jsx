import { Link } from 'react-router-dom';
const Chatroom = ({ title, id }) => {
  return (
    <div>
      <Link className="chat-link" to={`chat/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default Chatroom;
