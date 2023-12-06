import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../Redux/LoginApi/LoginApi";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CenterWarapper,
  Container,
  InputWrapper,
  Label,
  Input,
  ErrorMessage,
  Buttons,
  MainWrapper,
  H1,
  PaddingContainer,
  StickyBar,
} from "../../style/Export/Export";
import { LoginIcon } from "../../style/Icons/Icons";
import Logo from "../../assets/Vitelogo.svg";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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

    // If there are no errors, proceed with form submission
    await dispatch(authenticateUser(formData));
    navigate(from, { replace: true });
    toast.success(`Login Successfull ${formData.username}`, {
      position: "top-left",
    });
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
            </PaddingContainer>
          </CenterWarapper>

          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                autoCapitalize="true"
                autoComplete="false"
                placeholder="Enter your username..."
                value={formData.username}
                onChange={handleChange}
                $error={errors.username ? true : false}
                autoFocus
              />
              <ErrorMessage>
                {error === "Please Enter valid username"
                  ? error
                  : errors?.username}
              </ErrorMessage>
            </InputWrapper>

            <InputWrapper>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password..."
                value={formData.password}
                onChange={handleChange}
                $error={errors.password ? true : false}
                autoComplete="false"
              />
              <ErrorMessage>
                {error === "Please Enter valid credentials"
                  ? error
                  : errors?.password}
              </ErrorMessage>
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
