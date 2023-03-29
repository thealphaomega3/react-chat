import { useState } from 'react';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form action="">
        <input type="text" value={userName} onChange={onUserNameChange} />
        <input type="text" value={password} onChange={onPasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
