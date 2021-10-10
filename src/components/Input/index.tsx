import { Container, InputField, Label } from './styled';
import React from 'react';
export const Input: React.FC<PropsCont> = ({
  Mbottom,
  PlaceText,
  LabelText,
  event,
  eventBlur,
  value,
  Name,
  IpuntRef,
}: PropsCont) => {
  return (
    <Container Mbottom={Mbottom}>
      <Label>{LabelText}</Label>
      <InputField
        placeholder={PlaceText}
        name={Name}
        onChange={event}
        ref={IpuntRef}
        value={value}
        onBlur={eventBlur}
      />
    </Container>
  );
};
export interface PropsCont extends React.HTMLAttributes<HTMLElement> {
  Mbottom?: string;
  PlaceText?: string;
  LabelText?: string;
  value?: string;
  Name?: string;
  eventBlur?: (event: any) => void;
  event?: (event: any) => void;
  IpuntRef?: any;
}
