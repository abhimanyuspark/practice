import React, { useState } from "react";
import InputContainer from "../../components/InputContainer/InputContainer";
import {
  CenterWarapper,
  Container,
  Buttons,
  MainWrapper,
  H1,
  PaddingContainer,
  StickyBar,
  LinkStyle,
} from "../../style/Export/Export";
import { LoginIcon } from "../../style/Icons/Icons";
import Logo from "../../assets/Vitelogo.svg";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  useTitle("Recover Password");

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Enter a email");
    } else {
      toast.success("Submited" + email);
    }
  };

  return (
    <MainWrapper>
      <StickyBar>
        <img src={Logo} alt="svg" width="40px" height="40px" /> Practice
      </StickyBar>

      <CenterWarapper>
        <Container $width="450px" $margin="80px 0px 0px">
          <CenterWarapper>
            <PaddingContainer $padding="5px 0px 20px">
              <H1 $color="white">Recover Password</H1>
            </PaddingContainer>
          </CenterWarapper>
          <form onSubmit={onSubmit}>
            <InputContainer
              sup
              type="username"
              name="Eamil"
              label="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={error ? true : false}
              errorMessage={error && error}
              {...{
                autoComplete: "false",
                autoFocus: "true",
                reqiure: "true",
                placeholder: "Enter your email address...",
              }}
            />

            <Buttons
              text="Send Reset Password"
              type="submit"
              icon={LoginIcon}
              //   loading={loading}
              width="100%"
            />

            <CenterWarapper>
              <PaddingContainer>
                <LinkStyle to="/login">Login</LinkStyle>
              </PaddingContainer>
            </CenterWarapper>
          </form>
        </Container>
      </CenterWarapper>
    </MainWrapper>
  );
};

export default Forget;
