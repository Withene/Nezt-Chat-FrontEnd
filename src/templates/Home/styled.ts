import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 120px 0 120px;
  height: 100vh;
`;
export const Divisor = styled.div`
  height: 0.16rem;
  width: 60%;
  background-color: #4a4a4a;
`;
type SubTitleProps = {
  MLeft?: string;
};
export const SubTitle = styled.a<SubTitleProps>`
  margin-left: ${(props) => (props.MLeft ? props.MLeft : 0.2)}rem;
  margin-top: 2rem;
  display: block;
  font-size: 13px;
  cursor: pointer;
  font-weight: 400;
  color: #0094ff;
`;
export const ButtonField = styled.div`
  margin-top: 4rem;
  display: block;
`;

export const GoogleButton = styled.button`
  width: 23rem;
  cursor: pointer;
  background-color: transparent;
  border: 0.14rem solid #4a4a4a;
  border-radius: 5px;
  height: 4.5rem;
  display: flex;
  transition: 1s;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-top: 20px;
  justify-content: center;
  img {
    margin-right: 20px;
  }
  &&:hover {
    background-color: rgba(255, 255, 255);
    filter: brightness(0.9);
  }
  min-width: 30rem;
  @media (max-width: 50rem) {
    min-width: 27rem;
  }
`;
export const FlexField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const DivField = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 301px;
  width: 421px;
  height: 441px;
  background-color: transparent;
  border-radius: 20px;
  @media (max-width: 50rem) {
    width: 421px;
    height: 400px;
  }
`;

export const Field = styled.div`
  padding: 2rem;
`;
export const CenterFlex = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GoogleFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  h1 {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;

export const FirtClass = styled.div`
  margin-top: 4rem;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.8rem;
  @media (max-width: 50rem) {
    margin-top: 0rem;
    margin-bottom: 1.8rem;
  }
`;
export const ValidateMessage = styled.span`
  display: inline-flex;
  position: absolute;
  text-align: left;

  /* text-align: right; */
  color: red;
  font-size: 14.8px;
`;
