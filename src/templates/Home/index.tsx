import {
  Container,
  DivField,
  CenterFlex,
  Field,
  FlexField,
  FirtClass,
  ButtonField,
  GoogleButton,
  GoogleFlex,
  Divisor,
} from './styled';
import { Particle } from '../../components/Particles';
import Logo from '../../assets/Logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import GoogleLogo from '../../assets/GoogleLogo.svg';
import { useAuth } from '../../hooks/userAuth';

export const Home: React.FC = () => {
  const { user, signInWithGoogle, signInWithEmail } = useAuth();

  const SignupSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Username To Short!').max(50, 'Too Long!').required('Required'),
    password: Yup.string().min(2, 'Password Too Short!').max(20, 'Too Long!').required('Required'),
  });

  return (
    <>
      <Particle />
      <Container>
        <FlexField>
          <DivField>
            <FirtClass>
              <img src={Logo} alt="Logo" />
            </FirtClass>
            <Field>
              <Formik
                initialValues={{
                  username: '',
                  password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  signInWithEmail(values.username, values.password);
                }}
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                  <CenterFlex onSubmit={handleSubmit}>
                    <Input
                      Name={'username'}
                      event={handleChange}
                      eventBlur={handleBlur}
                      value={values.username}
                      Mbottom={'1.5'}
                      PlaceText={'Insira seu E-mail'}
                      LabelText={'E-mail:'}
                    />

                    <Input
                      Name={'password'}
                      value={values.password}
                      PlaceText={'Insira sua Senha'}
                      eventBlur={handleBlur}
                      event={handleChange}
                      LabelText={'Senha:'}
                    />

                    <ButtonField>
                      <Button Text={'Entrar'} Type={'submit'} />
                    </ButtonField>
                  </CenterFlex>
                )}
              </Formik>

              <GoogleFlex>
                <Divisor />
                <GoogleButton onClick={signInWithGoogle}>
                  <img src={GoogleLogo} alt="Logo do Google" />
                  Continue com o Google
                </GoogleButton>
              </GoogleFlex>
            </Field>
          </DivField>
        </FlexField>
      </Container>
    </>
  );
};
export default Home;
