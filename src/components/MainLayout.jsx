import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import InitMsg from './InitMsg';
const MainLayout = () => {
  return (
    <div>
      <InitMsg />
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;
