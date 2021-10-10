import { Container, ButtonField } from './styled';
import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  Text?: string;
  Type: 'submit';
}
export const Button: React.FC<ButtonProps> = ({ Text, Type }: ButtonProps) => {
  return (
    <Container>
      <ButtonField type={Type}>{Text}</ButtonField>
    </Container>
  );
};
