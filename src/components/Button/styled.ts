import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  min-width: 30rem;
  @media (max-width: 50rem) {
    min-width: 27rem;
  }
`;

export const ButtonField = styled.button`
  width: 100%;
  letter-spacing: 0.1rem;

  border: 0.14rem solid #4a4a4a;
  height: 4.2rem;
  border-radius: 5px;
  font-size: 14px;
  font-weight: regular;

  background-color: transparent;
  cursor: pointer;
  transition: 1s;
  &&:hover {
    background-color: rgba(255, 255, 255);
    filter: brightness(0.9);
  }
`;
