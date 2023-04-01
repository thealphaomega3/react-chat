import { chatrooms } from './chatrooms/chatrooms';
import Chatroom from './chatrooms/Chatroom';

const ChatroomLayout = () => {
  return (
    <div>
      <h2>Chatrooms</h2>
      {chatrooms.map((data) => {
        return <Chatroom key={data.id} id={data.id} title={data.title} />;
      })}
    </div>
  );
};

export default ChatroomLayout;
