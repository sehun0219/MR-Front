import styled from 'styled-components';

export const SelectedWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`;
export const SelectText = styled.p`
  font-size: 13px;
  color: #888888;

  &::after {
    content: '*';
    color: #c90000;
  }
`;
export const SelectedText = styled.p`
  font-size: 13px;
  color: #222222;
  font-weight: 700;
`;
export const SizeButtonList = styled.div`
  display: flex;
  gap: 4px;
`;
