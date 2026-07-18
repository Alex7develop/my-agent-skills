import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GITHUB_URL } from '../../data/skills';
import { Button, Container } from '../shared';

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(10, 10, 11, 0.92);
  backdrop-filter: blur(10px);
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 3.75rem;
`;

const Brand = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const GitHubIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition:
    color 160ms ease,
    border-color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.textSecondary};
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
    fill: currentColor;
  }
`;

const Cta = styled(Button)`
  min-height: 2.25rem;
  padding: 0.4rem 0.85rem;
  font-size: 0.85rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export function Header() {
  return (
    <Bar>
      <Inner>
        <Brand to="/">my-agent-skills</Brand>
        <Nav aria-label="Основная навигация">
          <NavLink to="/skills">Skills</NavLink>
          <ExternalLink
            href={`${GITHUB_URL}/blob/main/README.md`}
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </ExternalLink>
          <Actions>
            <GitHubIcon
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub репозиторий"
            >
              <svg viewBox="0 0 16 16" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </GitHubIcon>
            <Cta as={Link} to="/skills">
              Get started
            </Cta>
          </Actions>
        </Nav>
      </Inner>
    </Bar>
  );
}
