import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Loader,
  H2,
} from "../../../style/Export/Export";
import { useParams } from "react-router-dom";
import { getUserData, editUser } from "../../../Redux/ReduxApi/UserApi";
import { useTitle } from "../../../hooks/useTitle";
import { makeData } from "../../../data/makeData";
import AvatarImage from "../../../components/Custom/AvatarImage/AvatarImage";
import { Tooltip } from "antd";
import { useRandomPassword } from "../../../hooks/useRandomPassword";
import { Check, Random, View, ViewOff } from "../../../style/Icons/Icons";
import InputContainer from "../../../components/InputContainer/InputContainer";
import Select from "../../../components/Custom/Select/SelectDropDown";
import { useThemeProvider } from "../../../hooks/useThemeProvider";
import { toast } from "react-toastify";

const UsersEdit = () => {
  const { id } = useParams();
  const { user, loading: userLoading } = useSelector((state) => state.users);
  const { statusMenu } = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    id: id,
    profile: "",
    name: "",
    email: "",
    role: "",
    password: "",
    allowFollowUp: "",
    status: "",
    age: "",
    visits: "",
    progress: "",
    theme: "",
    sideBar: "",
    date: new Date(),
    statusMenu: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
  });
  useTitle(formData.name);
  const dispatch = useDispatch();
  const [theme] = useThemeProvider();
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
      const UpdateUser = async () => {
        await dispatch(editUser(formData));
        setLoading(false);
        setIsSubmited(false);
        toast.success(`${formData.name} updated user details`);
      };
      UpdateUser();
    }
  }, [isSubmited]);

  useEffect(() => {
    dispatch(getUserData(id));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData((p) => ({
        ...p,
        name: user?.name || "",
        profile: user?.profile || "",
        email: user?.email || "",
        role: user?.role || "",
        password: user?.password || "",
        allowFollowUp: user?.allowFollowUp || "",
        status: user?.status || "",
        age: user?.age || "",
        visits: user?.visits || "",
        progress: user?.progress || "",
        theme: user?.theme || "",
        sideBar: user?.sideBar || "",
        statusMenu: user?.statusMenu || "",
      }));
    }
  }, [user]);

  return (
    <PaddingContainer>
      <Container $padding="0px">
        {userLoading ? (
          <Loader />
        ) : (
          <>
            <PaddingContainer $padding="25px">
              <H2>Update User</H2>
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
                      setImage={(newProfile) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          profile: newProfile,
                        }))
                      }
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
                      options={statusMenu}
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
                              setFormData((p) => ({
                                ...p,
                                password: password,
                              }));
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
                      type="submit"
                      text="Save / Update user"
                      icon={Check}
                      loading={loading}
                    />
                  </FlexDiv>
                </PaddingContainer>
              </form>
            </PaddingContainer>
          </>
        )}
      </Container>
    </PaddingContainer>
  );
};

export default UsersEdit;
