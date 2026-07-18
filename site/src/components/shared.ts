import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.25rem;
`;

export const Section = styled.section`
  padding: 4.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SectionLabel = styled.p`
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.75rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
`;

export const SectionLead = styled.p`
  max-width: 40rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Button = styled.a<{ $variant?: 'primary' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.65rem 1.1rem;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.colors.border : theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $variant }) =>
    $variant === 'ghost' ? 'transparent' : theme.colors.accent};
  color: ${({ theme, $variant }) =>
    $variant === 'ghost' ? theme.colors.textPrimary : theme.colors.bg};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;

  &:hover {
    background: ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.colors.bgElevated : theme.colors.accentDim};
    border-color: ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.colors.textSecondary : theme.colors.accentDim};
    transform: translateY(-1px);
  }
`;

export const NativeButton = styled.button<{ $variant?: 'primary' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.65rem 1.1rem;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.colors.border : theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $variant }) =>
    $variant === 'ghost' ? 'transparent' : theme.colors.accent};
  color: ${({ theme, $variant }) =>
    $variant === 'ghost' ? theme.colors.textPrimary : theme.colors.bg};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    color 160ms ease;

  &:hover {
    background: ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.colors.bgElevated : theme.colors.accentDim};
    border-color: ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.colors.textSecondary : theme.colors.accentDim};
  }
`;

export const PhaseBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.45rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;
