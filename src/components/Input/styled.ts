import styled from 'styled-components';
import { PropsCont } from './index';

export const Container = styled.div<PropsCont>`
  display: block;
  margin-bottom: ${(props) => (props.Mbottom ? props.Mbottom : 0)}rem;
  min-width: 35rem;

  @media (max-width: 50rem) {
    min-width: 27rem;
  }
`;

export const InputField = styled.input`
  border: 0.17rem solid #0094ff;

  display: block;
  width: 100%;
  margin-top: 0.3rem;
  padding: 1rem;
  height: 4.3rem;
  font-family: 'Roboto';
  border-radius: 5px;
  outline: none;
  ::-moz-placeholder {
    font-size: 14px;
  }
`;
export const Label = styled.label`
  font-size: 1.5rem;
  line-height: 121%;
  margin: 0 0 0rem 0.3125rem;
  letter-spacing: 0.0625rem;
  font-weight: 400;
  align-items: center;
  color: #010101;
`;
