import styled from 'styled-components';

export const DropDownLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 318px;
  height: 220px;
  padding: 10px 1px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  background: #ffffff;
  font-size: 16px;
`;

export const DropDownItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 316px;
  height: 50px;
  padding: 12px 16px;
  gap: 10px;
  background: #f6f6f6;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  &:hover {
    /* list / Hover */
    background: #f6f6f6;
  }
`;
