import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Login',
    to: '/login'
  },
  {
    text: 'Register',
    to: '/register'
  }
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map((data) => (
          <li key={data.to}>
            <Link to={data.to}>{data.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
