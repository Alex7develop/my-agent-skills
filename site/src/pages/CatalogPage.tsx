import styled from 'styled-components';
import { SearchAndFilter } from '../components/SearchAndFilter/SearchAndFilter';
import { SkillGrid } from '../components/SkillGrid/SkillGrid';
import {
  Container,
  SectionLabel,
  SectionLead,
  SectionTitle,
} from '../components/shared';

const Page = styled.div`
  padding: 3rem 0 4.5rem;
`;

export function CatalogPage() {
  return (
    <Page>
      <Container>
        <SectionLabel>Каталог</SectionLabel>
        <SectionTitle>Все навыки</SectionTitle>
        <SectionLead>
          Шесть практических навыков для AI-агентов. Фильтруйте по фазе или
          ищите по тексту.
        </SectionLead>
        <SearchAndFilter />
        <SkillGrid />
      </Container>
    </Page>
  );
}
