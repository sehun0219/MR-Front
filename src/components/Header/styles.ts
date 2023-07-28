import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: relative;
  box-sizing: border-box;
  padding: 0px 20px;
  max-width: 1440px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 30px;
  background-color: #f6f6f7;
`;

const viewCartTextCss = css`
  z-index: 1;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-bottom: 1px solid #ffffff;
`;

export const CartText = styled.p<{
  isViewCart: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 4px;
  border: 1px solid transparent;
  ${({ isViewCart }) => (isViewCart ? viewCartTextCss : '')}
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  box-sizing: border-box;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  top: 29px;
  width: 335px;
  right: 20px;
`;
