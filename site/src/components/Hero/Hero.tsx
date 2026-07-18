import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { GITHUB_URL } from '../../data/skills';
import { TerminalTypewriter } from '../TerminalTypewriter/TerminalTypewriter';
import { Button, Container } from '../shared';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrap = styled.section`
  padding: 4.5rem 0 3.5rem;
  background:
    radial-gradient(
      ellipse 80% 50% at 50% -20%,
      rgba(94, 234, 212, 0.08),
      transparent 60%
    ),
    ${({ theme }) => theme.colors.bg};
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const Badge = styled.p`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.55rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  animation: ${fadeUp} 500ms ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Title = styled.h1`
  max-width: 16ch;
  font-size: clamp(2.1rem, 5.5vw, 3.4rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.08;
  animation: ${fadeUp} 560ms ease 60ms both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Lead = styled.p`
  max-width: 38rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  animation: ${fadeUp} 560ms ease 120ms both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const TerminalWrap = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  animation: ${fadeUp} 560ms ease 180ms both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.25rem;
  animation: ${fadeUp} 560ms ease 240ms both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export function Hero() {
  return (
    <Wrap>
      <Inner>
        <Badge>6 skills · MIT licensed</Badge>
        <Title>Практики senior-разработчика — для вашего AI-агента</Title>
        <Lead>
          Набор из 6 навыков, закрывающих цикл разработки от спеки до PR.
          Одна команда — и они работают в 70+ агентах: Cursor, Claude Code,
          Codex, Copilot и других.
        </Lead>
        <TerminalWrap>
          <TerminalTypewriter />
        </TerminalWrap>
        <Actions>
          <Button as={Link} to="/skills">
            Get started
          </Button>
          <Button
            as="a"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            $variant="ghost"
          >
            View on GitHub
          </Button>
        </Actions>
      </Inner>
    </Wrap>
  );
}
