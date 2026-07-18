import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GITHUB_URL, INSTALL_ALL_CMD, SKILLS_SH_URL } from '../../data/skills';
import { Container } from '../shared';
import { TerminalTypewriter } from '../TerminalTypewriter/TerminalTypewriter';

const Wrap = styled.footer`
  padding: 3rem 0 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgElevated};
`;

const Inner = styled(Container)`
  display: grid;
  gap: 1.75rem;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const RouterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Wrap>
      <Inner>
        <TerminalTypewriter command={INSTALL_ALL_CMD} animate={false} />
        <Links>
          <FooterLink href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </FooterLink>
          <FooterLink
            href={`${GITHUB_URL}/blob/main/README.md`}
            target="_blank"
            rel="noreferrer"
          >
            README
          </FooterLink>
          <FooterLink href={SKILLS_SH_URL} target="_blank" rel="noreferrer">
            skills.sh
          </FooterLink>
          <RouterLink to="/skills">Skills</RouterLink>
        </Links>
        <Copyright>© {year} my-agent-skills · MIT</Copyright>
      </Inner>
    </Wrap>
  );
}
