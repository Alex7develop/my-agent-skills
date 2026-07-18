import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { INSTALL_ALL_CMD } from '../../data/skills';
import { CheckIcon } from '../CheckIcon';
import { CopyIcon } from '../CopyIcon';

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
  padding: 0.55rem 0.75rem 0.55rem 0.9rem;
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
  margin-right: auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
`;

const CopyButton = styled.button<{ $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: transparent;
  color: ${({ theme, $copied }) =>
    $copied ? theme.colors.accent : theme.colors.textSecondary};
  cursor: pointer;
  transition:
    color 160ms ease,
    border-color 160ms ease,
    background 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.bg};
    border-color: ${({ theme }) => theme.colors.border};
  }

  &:active {
    color: ${({ theme }) => theme.colors.accentDim};
  }
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
  animate?: boolean;
}

export function TerminalTypewriter({
  command = INSTALL_ALL_CMD,
  animate = true,
}: TerminalTypewriterProps) {
  const [text, setText] = useState(animate ? '' : command);
  const [done, setDone] = useState(!animate);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!animate || prefersReducedMotion()) {
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
  }, [animate, command]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Shell aria-label="Команда установки">
      <TitleBar>
        <Dot aria-hidden />
        <Dot aria-hidden />
        <Dot aria-hidden />
        <Title>terminal</Title>
        <CopyButton
          type="button"
          onClick={handleCopy}
          $copied={copied}
          aria-label={copied ? 'Скопировано' : 'Скопировать команду'}
          title={copied ? 'Скопировано' : 'Скопировать'}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </CopyButton>
      </TitleBar>
      <Body>
        <Prompt>$ </Prompt>
        <span>{text}</span>
        {!done && <Cursor aria-hidden />}
      </Body>
    </Shell>
  );
}
