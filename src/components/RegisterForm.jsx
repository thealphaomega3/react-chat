import { useState } from 'react';

import { submitRegisterForm } from '../firebase.js';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitRegisterForm(email, password)}>
        <input type="text" value={email} onChange={onEmailChange} />
        <input type="text" value={password} onChange={onPasswordChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
