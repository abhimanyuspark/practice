import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../Redux/LoginApi/LoginApi";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CenterWarapper,
  Container,
  Buttons,
  MainWrapper,
  H1,
  PaddingContainer,
  StickyBar,
  Icon,
  ToogleIconInput,
  InputWrapper,
  Label,
  FlexDiv,
  ErrorMessage,
} from "../../style/Export/Export";
import { LoginIcon, View, ViewOff } from "../../style/Icons/Icons";
import Logo from "../../assets/Vitelogo.svg";
import { toast } from "react-toastify";
import InputContainer from "../../components/InputContainer/InputContainer";
import { togglePersist } from "../../Redux/LoginApi/reducer";

const Login = () => {
  const { persist, loading, error } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const stateError = location?.state?.error;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation before submitting the form
    if (formData.username.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Enter Username",
      }));
      return;
    }

    if (formData.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Enter password",
      }));
      return;
    }

    if (formData.password.length < 10 || formData.password.length > 15) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be between 10 and 15 characters in length",
      }));
      return;
    }

    try {
      await dispatch(authenticateUser(formData));
      navigate(from, { replace: true });
      toast.success(`Login Successful ${formData.username}`, {
        position: "top-left",
      });
    } catch (error) {
      // Handle authentication error
      toast.error(error.message, {
        position: "top-left",
      });
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
              <H1 $color="white">Login In</H1>
              {stateError && (
                <ErrorMessage>Enter a valide username</ErrorMessage>
              )}
            </PaddingContainer>
          </CenterWarapper>

          <form onSubmit={handleSubmit}>
            <InputContainer
              sup
              type="text"
              name="username"
              label="Username"
              value={formData.username}
              error={errors.username ? true : false}
              onChange={handleChange}
              errorMessage={
                error === "Please Enter valid username"
                  ? error
                  : errors?.username
              }
              {...{
                autoComplete: "false",
                placeholder: "Enter your username...",
              }}
            />

            <InputContainer
              sup
              borderRight
              type={show ? "text" : "password"}
              name="password"
              label="Password"
              value={formData.password}
              error={errors.password ? true : false}
              onChange={handleChange}
              errorMessage={
                error === "Please Enter valid credentials"
                  ? error
                  : errors?.password
              }
              {...{
                autoComplete: "false",
                placeholder: "Enter your password...",
              }}
              children={
                <ToogleIconInput $borderLeft>
                  <Icon
                    icon={show ? View : ViewOff}
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                </ToogleIconInput>
              }
            />

            <InputWrapper>
              <FlexDiv>
                <input
                  id="persist"
                  type="checkbox"
                  onChange={(e) => {
                    const check = e.target.checked;
                    // console.log(check);
                    dispatch(togglePersist(check));
                  }}
                  checked={persist}
                />
                <Label htmlFor="persist">Remmber me</Label>
              </FlexDiv>
            </InputWrapper>

            <Buttons
              type="submit"
              text="Login"
              icon={LoginIcon}
              loading={loading}
              width="100%"
            />
          </form>
        </Container>
      </CenterWarapper>
    </MainWrapper>
  );
};

export default Login;
