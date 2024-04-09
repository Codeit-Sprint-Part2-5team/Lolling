import styled from "styled-components";

const SIZES = {
  s: {
    pc: 28,
    mo: 28,
  },
  m: {
    pc: 56,
    mo: 56,
  },
};

export const ProfileImageLayout = styled.img`
  width: ${({ size }) => SIZES[size].pc}px;
  height: ${({ size }) => SIZES[size].pc}px;
  border-radius: 50%;
  object-fit: cover;
`;
