import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './css/GlobalStyle';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Nav />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </PageWrapper>
  );
}

export default App;
