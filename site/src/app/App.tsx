import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { CatalogPage } from '../pages/CatalogPage';
import { HomePage } from '../pages/HomePage';
import { SkillPage } from '../pages/SkillPage';

const Shell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

export function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<CatalogPage />} />
            <Route path="/skills/:slug" element={<SkillPage />} />
          </Routes>
        </Main>
        <Footer />
      </Shell>
    </BrowserRouter>
  );
}
