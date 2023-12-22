import React, { useEffect, useState } from "react";
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
  LinkStyle,
  Checkbox,
} from "../../style/Export/Export";
import { LoginIcon, View, ViewOff } from "../../style/Icons/Icons";
import Logo from "../../assets/Vitelogo.svg";
import InputContainer from "../../components/InputContainer/InputContainer";
import { togglePersist } from "../../Redux/LoginApi/reducer";
import { useTitle } from "../../hooks/useTitle";
import { Tooltip } from "antd";

const Login = () => {
  const { persist, loading, error, user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const formValiDate = async (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (data.email.trim() === "") {
      errors.email = "Enter an email";
    } else if (!regex.test(data.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (data.password.trim() === "") {
      errors.password = "Enter a password";
    } else if (data.password.length < 8 || data.password.length > 10) {
      errors.password = "Password must be between 8 to 10 characters in length";
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      ...errors,
    }));

    const hasErrors = Object.keys(errors).length > 0;
    setIsSubmited(!hasErrors);
    if (hasErrors) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Data Invalid",
      }));
    } else {
      try {
        await dispatch(authenticateUser(formData));
        setFormData((prevData) => ({
          ...prevData,
          email: "",
          password: "",
        }));
      } catch (error) {
        // Handle authentication error
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: error,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation before submitting the form
    formValiDate(formData);
  };

  useEffect(() => {
    let mounted = true;
    if (isSubmited && Object.keys(user).length > 0 && mounted) {
      navigate(from, { replace: true });
    }
    return () => (mounted = false);
  }, [isSubmited, user]);

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
            </PaddingContainer>
          </CenterWarapper>

          <form onSubmit={handleSubmit}>
            <InputContainer
              sup
              type="email"
              name="email"
              label="Email Address"
              value={formData.email}
              error={formErrors.email ? true : false}
              onChange={handleChange}
              errorMessage={
                error === "Please Enter valid email" ? error : formErrors?.email
              }
              {...{
                autoComplete: "false",
                placeholder: "Enter your email address...",
              }}
            />

            <InputContainer
              sup
              borderRight
              type={show ? "text" : "password"}
              name="password"
              label="Password"
              value={formData.password}
              error={formErrors.password ? true : false}
              onChange={handleChange}
              errorMessage={
                error === "Please Enter valid credentials"
                  ? error
                  : formErrors?.password
              }
              {...{
                autoComplete: "false",
                placeholder: "Enter your password...",
              }}
              children={
                <Tooltip title="Show/Hide">
                  <ToogleIconInput $borderLeft>
                    <Icon
                      icon={show ? View : ViewOff}
                      onClick={() => {
                        setShow(!show);
                      }}
                    />
                  </ToogleIconInput>
                </Tooltip>
              }
            />

            <InputWrapper>
              <LinkStyle to="/forget">Forget your password?</LinkStyle>
            </InputWrapper>

            <InputWrapper $margin="20px 0px">
              <FlexDiv $gap="0.5">
                <Tooltip title={`${persist ? "Checked" : "UnChecked"}`}>
                  <Checkbox
                    id="persist"
                    type="checkbox"
                    onChange={(e) => {
                      const check = e.target.checked;
                      dispatch(togglePersist(check));
                    }}
                    checked={persist}
                  />
                </Tooltip>
                <Label htmlFor="persist">Remember me</Label>
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
