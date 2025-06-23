import AppBarNavigationMenu from './components/AppBarNavigationMenu';
import Container from './components/Container';

const Layout = ({userConnected}) => {
  return (
    <>
      { userConnected && <AppBarNavigationMenu /> }
      <Container />
    </>
  );
};

export default Layout;
