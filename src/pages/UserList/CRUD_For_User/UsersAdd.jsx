import React, { useState } from "react";
import {
  PaddingContainer,
  Buttons,
  InputWrapper,
  Label,
  Container,
} from "../../../style/Export/Export";
import InputContainer from "../../../components/InputContainer/InputContainer";
import { Check } from "../../../style/Icons/Icons";
import Select from "../../../components/Custom/Select/SelectDropDown";
import { useSelector } from "react-redux";
import { useThemeProvider } from "../../../hooks/useThemeProvider";
// import { v4 as uuidv4 } from "uuid";

const UsersAdd = () => {
  const { user } = useSelector((state) => state.auth);
  const [theme] = useThemeProvider();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    role: "client",
    password: "",
    followUp: "",
    status: "",
    age: "",
    visits: "",
    progress: "",
    date: new Date(),
    statusMenu: [
      {
        name: "Pending",
        color: "yellow",
        id: "1c180990-7c1e-46e2-b81d-b909f2551f0c",
      },
      {
        name: "Inprocess",
        color: "#159afb",
        id: "d290236c-35aa-4faf-b4dd-3a879bf9f49e",
      },
      {
        name: "Complete",
        color: "#0cf90c",
        id: "20125f8e-6d7f-430d-b3bb-c17a5e41d425",
      },
    ],
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setFormError((p) => ({ ...p, [e.target.name]: "" }));
  };

  const formValiDate = (data) => {
    if (data.name.trim() === "") {
      setFormError((p) => ({ ...p, name: "Enter a Username" }));
      return;
    }
    if (data.email.trim() === "") {
      setFormError((p) => ({ ...p, email: "Enter a email" }));
      return;
    }
    if (data.password.trim() === "") {
      setFormError((p) => ({ ...p, password: "Enter a password" }));
      return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formValiDate(formData);
  };

  return (
    <PaddingContainer>
      <Container>
        <form onSubmit={onSubmit}>
          <InputContainer
            name="name"
            sup
            value={formData.name}
            label="Username"
            onChange={handleChange}
            error={formError.name ? true : false}
            errorMessage={formError.name}
            {...{
              placeholder: "Enter a username",
            }}
          />
          <InputContainer
            name="email"
            sup
            value={formData.email}
            label="Email"
            onChange={handleChange}
            error={formError.email ? true : false}
            errorMessage={formError.email}
            {...{
              placeholder: "Enter a email",
            }}
          />
          <InputContainer
            name="password"
            sup
            value={formData.password}
            label="Password"
            onChange={handleChange}
            error={formError.password ? true : false}
            errorMessage={formError.password}
            {...{
              placeholder: "Enter a password",
            }}
          />

          <InputWrapper>
            <Label>Status</Label>
            <Select
              id="status"
              enableSearch
              enableNoDataList
              value={formData.status}
              onChange={(e) => {
                setFormData((p) => ({ ...p, status: e }));
              }}
              fields={{ labelFn: (e) => e.name }}
              options={user.statusMenu}
              theme={theme}
            />
          </InputWrapper>

          <Buttons type="submit" text="Submit" icon={Check} />
        </form>
      </Container>
    </PaddingContainer>
  );
};

export default UsersAdd;
