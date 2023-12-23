import React, { useEffect, useState } from "react";
import {
  PaddingContainer,
  Buttons,
  InputWrapper,
  Label,
  Container,
  ToogleIconInput,
  Icon,
  FlexDiv,
  FlexWrapper,
  H1,
  H2,
} from "../../../style/Export/Export";
import InputContainer from "../../../components/InputContainer/InputContainer";
import { Check, Random, View, ViewOff } from "../../../style/Icons/Icons";
import Select from "../../../components/Custom/Select/SelectDropDown";
import { useDispatch, useSelector } from "react-redux";
import { useThemeProvider } from "../../../hooks/useThemeProvider";
import { useTitle } from "../../../hooks/useTitle";
import { Tooltip } from "antd";
import { useRandomPassword } from "../../../hooks/useRandomPassword";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../../../Redux/ReduxApi/UserApi";
import { makeData } from "../../../data/makeData";
import AvatarImage from "../../../components/Custom/AvatarImage/AvatarImage";
import { toast } from "react-toastify";

const UsersAdd = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [theme] = useThemeProvider();
  useTitle("Add User");

  const id = uuidv4();
  const [formData, setFormData] = useState({
    id: id,
    profile: "",
    name: "",
    email: "",
    role: "client",
    password: "",
    allowFollowUp: {
      type: "Yes",
    },
    status: "",
    age: "",
    visits: "",
    progress: "",
    theme: true,
    sideBar: true,
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
  const [isSubmited, setIsSubmited] = useState(false);
  const [show, setShow] = useState(false);
  const [avatarloading, setAvatarloading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setFormError((p) => ({ ...p, [e.target.name]: "" }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formValiDate(formData);
  };

  const formValiDate = (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (data.name.trim() === "") {
      errors.name = "Enter an username";
    }

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

    setFormError((prevErrors) => ({
      ...prevErrors,
      ...errors,
    }));

    const hasErrors = Object.keys(errors).length > 0;
    setIsSubmited(!hasErrors);
    if (hasErrors) {
      toast.error(`data invalid`);
    }
  };

  const handleFile = async () => {
    try {
      setAvatarloading(true); // Set loading to true immediately

      const data = await makeData(1);
      const { profile } = data[0];

      // Use setTimeout to delay setting the profile in formData
      const time = setTimeout(() => {
        setFormData((prevData) => ({ ...prevData, profile: profile }));
        setAvatarloading(false); // Set loading to false after the delay
      }, 1500);

      return () => clearTimeout(time);
    } catch (error) {
      console.error("Error: ", error);
      setFormData((prevData) => ({ ...prevData, profile: "" }));
      setAvatarloading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    if (isSubmited) {
      setLoading(true);
      const AddUser = async () => {
        await dispatch(addUser(formData));
        setLoading(false);
        setIsSubmited(false);
        toast.success(`${formData.name} added successfully`);
        setFormData((p) => ({
          ...p,
          name: "",
          password: "",
          email: "",
          status: "",
          allowFollowUp: { type: "Yes" },
          date: "",
          visits: "",
          progress: "",
          profile: "",
        }));
      };
      AddUser();
    }
  }, [isSubmited]);

  return (
    <PaddingContainer>
      <Container $padding="0px">
        <PaddingContainer $padding="25px">
          <H2>Add User</H2>
        </PaddingContainer>
        <hr />
        <PaddingContainer $padding="25px">
          <form onSubmit={onSubmit}>
            <FlexWrapper>
              <InputContainer
                name="name"
                sup
                type="text"
                value={formData.name}
                label="Username"
                onChange={handleChange}
                error={formError.name ? true : false}
                errorMessage={formError.name}
                {...{
                  placeholder: "Enter a username",
                  autoFocus: true,
                }}
              />

              <InputContainer
                name="email"
                sup
                type="text"
                value={formData.email}
                label="Email"
                onChange={handleChange}
                error={formError.email ? true : false}
                errorMessage={formError.email}
                {...{
                  placeholder: "Enter a email",
                }}
              />

              <InputWrapper>
                <Label>Profile</Label>
                <AvatarImage
                  image={formData.profile}
                  loading={avatarloading}
                  onClick={() => {
                    handleFile();
                  }}
                />
              </InputWrapper>
            </FlexWrapper>

            <FlexWrapper $grow="315px">
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

              <InputWrapper>
                <Label>Allow FollowUp</Label>
                <Select
                  id="allowFollowUp"
                  value={formData.allowFollowUp}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, allowFollowUp: e }));
                  }}
                  fields={{ labelFn: (e) => e.type }}
                  options={[{ type: "Yes" }, { type: "No" }]}
                  theme={theme}
                />
              </InputWrapper>

              <InputContainer
                name="password"
                sup
                type={show ? "text" : "password"}
                value={formData.password}
                label="Password"
                onChange={handleChange}
                error={formError.password ? true : false}
                errorMessage={formError.password}
                borderRight
                {...{
                  autoComplete: "false",
                  placeholder: "Enter a password",
                }}
                children={
                  <>
                    <Tooltip title="Show/Hide">
                      <ToogleIconInput
                        $borderLeft
                        $borderRight
                        onClick={() => {
                          setShow(!show);
                        }}
                      >
                        <Icon icon={show ? View : ViewOff} />
                      </ToogleIconInput>
                    </Tooltip>
                    <Tooltip title="Random Password">
                      <ToogleIconInput
                        $borderLeft
                        onClick={() => {
                          const password = useRandomPassword();
                          setFormData((p) => ({ ...p, password: password }));
                          setFormError((p) => ({ ...p, password: "" }));
                        }}
                      >
                        <Icon icon={Random} />
                      </ToogleIconInput>
                    </Tooltip>
                  </>
                }
              />
            </FlexWrapper>

            <PaddingContainer $padding="20px 0px 0px">
              <FlexDiv>
                <Buttons
                  loading={loading}
                  type="submit"
                  text="Save / Add More"
                  icon={Check}
                />
              </FlexDiv>
            </PaddingContainer>
          </form>
        </PaddingContainer>
      </Container>
    </PaddingContainer>
  );
};

export default UsersAdd;
