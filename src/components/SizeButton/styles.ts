import styled from 'styled-components';

export const ButtonWrap = styled.button<{
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid ${({ selected }) => (selected ? '#222222' : '#cccccc')};
  font-size: 11px;
  color: #888888;
`;
