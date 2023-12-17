import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, P, PaddingContainer } from "../../../style/Export/Export";
import { useParams } from "react-router-dom";
import { getUserData } from "../../../Redux/ReduxApi/UserApi";
import { useTitle } from "../../../hooks/useTitle";

const UsersEdit = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.users);
  const { name } = user;
  const dispatch = useDispatch();
  useTitle(name);

  useEffect(() => {
    dispatch(getUserData(id));
  }, [dispatch]);

  return (
    <PaddingContainer>
      <Container>
        <P>{name}</P>
      </Container>
    </PaddingContainer>
  );
};

export default UsersEdit;
