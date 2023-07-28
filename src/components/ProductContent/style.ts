import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  margin: 36px auto 0px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 28px;
  }
`;

export const AddButton = styled.button`
  width: 128px;
  height: 40px;
  margin-top: 20px;
  background-color: #ffffff;
  color: #222222;
  border: 2px solid #222222;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #222222;
    color: #ffffff;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: #888888;
  margin-bottom: 20px;
`;

export const Price = styled.p`
  font-size: 15px;
  color: #222222;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding: 8px 0px;
  margin: 20px 0px;
  font-weight: 700;
  @media screen and (max-width: 767px) {
    border: none;
  }
`;

export const ProductImg = styled.img`
  width: 400px;
  height: 600px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

export const ProductInfo = styled.div`
  width: 472px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
