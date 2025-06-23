import AppBarNavigationMenu from './components/AppBarNavigationMenu';
import Container from './components/Container';

const Layout = ({userConnected}) => {
  return (
    <>
      <AppBarNavigationMenu userConnected={userConnected} />
      <Container />
    </>
  );
};

export default Layout;
