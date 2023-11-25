import React, { useEffect, useState } from "react";
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
  FlexDiv,
} from "../../style/Export/Export";
import { Check } from "../../style/Icons/Icons";
import { getUserApi } from "../../Redux/ReduxApi/UserApi";

// const AdminUser = ({ setFormData }) => {
//   const { users } = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   const copyToClipboard = (textToCopy) => {
//     // navigator.clipboard.writeText(textToCopy);
//     setFormData((p) => ({
//       ...p,
//       username: textToCopy.name,
//       password: textToCopy.password,
//     }));
//   };

//   useEffect(() => {
//     dispatch(getUserApi());
//   }, [dispatch]);

//   return (
//     <div>
//       {users.map((d) => {
//         if (d.role === "admin") {
//           return (
//             <FlexDiv>
//               <p>{d.role}</p>
//               <p>{d.name}</p>
//               <p>{d.password}</p>
//               <button onClick={copyToClipboard(d)}>Copy</button>
//             </FlexDiv>
//           );
//         }
//       })}
//     </div>
//   );
// };

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
  };

  return (
    <CenterWarapper>
      <Container style={{ marginTop: "100px" }}>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              $error={errors.username ? true : false}
              autoFocus
            />
            {error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : (
              errors.username && <ErrorMessage>{errors.username}</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              $error={errors.password ? true : false}
            />
            {error === "Please Enter valid credentials" ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : (
              errors.password && <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </InputWrapper>

          <Buttons type="submit" text="Submit" icon={Check} loading={loading} />
        </form>
        <br />
        {/* <AdminUser setFormData={setFormData} /> */}
      </Container>
    </CenterWarapper>
  );
};

export default Login;
