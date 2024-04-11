import styled from 'styled-components';

export const ArrowLayout = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  fill: rgba(255, 255, 255, 0.9);
  stroke-width: 1px;
  stroke: var(--grayscale-300);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  backdrop-filter: blur(2px);
  cursor: pointer;
`;
