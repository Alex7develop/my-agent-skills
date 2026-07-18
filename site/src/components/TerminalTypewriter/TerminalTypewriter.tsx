import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { INSTALL_ALL_CMD } from '../../data/skills';

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const Shell = styled.div`
  width: 100%;
  max-width: 40rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bgElevated};
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Dot = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.border};
`;

const Title = styled.span`
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
`;

const Body = styled.pre`
  margin: 0;
  padding: 1.1rem 1rem 1.25rem;
  overflow-x: auto;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.8rem, 2.2vw, 0.95rem);
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.55ch;
  margin-left: 0.1ch;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${blink} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

interface TerminalTypewriterProps {
  command?: string;
}

export function TerminalTypewriter({
  command = INSTALL_ALL_CMD,
}: TerminalTypewriterProps) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(command);
      setDone(true);
      return;
    }

    let index = 0;
    setText('');
    setDone(false);

    const id = window.setInterval(() => {
      index += 1;
      setText(command.slice(0, index));
      if (index >= command.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, 28);

    return () => window.clearInterval(id);
  }, [command]);

  return (
    <Shell aria-label="Команда установки">
      <TitleBar>
        <Dot aria-hidden />
        <Dot aria-hidden />
        <Dot aria-hidden />
        <Title>terminal</Title>
      </TitleBar>
      <Body>
        <Prompt>$ </Prompt>
        <span>{text}</span>
        {!done && <Cursor aria-hidden />}
      </Body>
    </Shell>
  );
}
