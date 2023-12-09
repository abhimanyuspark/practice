import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FlexDiv,
  P,
  PaddingContainer,
  Loader,
  JustifyWrapper,
} from "../../../style/Export/Export";
import { useParams } from "react-router-dom";
import { getUserData } from "../../../Redux/ReduxApi/UserApi";
import { detailsMenu } from "../../../data/all_menu";
import DropDownMenu from "../../../components/Custom/DropDownMenu/DropDownMenu";

const UserDetails = () => {
  const { id } = useParams();
  const { user, loading } = useSelector((state) => state.users);
  const { name, date, status } = user;
  const newDate = new Date(date);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(id));
  }, [dispatch]);

  return (
    <PaddingContainer>
      <FlexDiv $direction>
        <JustifyWrapper $justify="flex-end">
          <DropDownMenu data={detailsMenu} />
        </JustifyWrapper>
        <Container>
          {loading ? (
            <Loader height="100px" />
          ) : (
            <FlexDiv $gap="15">
              <FlexDiv $direction>
                <P>Name</P>
                <P>Create Date</P>
                <P>Status</P>
              </FlexDiv>
              <FlexDiv $direction>
                <P>{name}</P>
                <P>{newDate.toLocaleDateString()}</P>
                <P>{status?.name}</P>
              </FlexDiv>
            </FlexDiv>
          )}
        </Container>
      </FlexDiv>
    </PaddingContainer>
  );
};

export default UserDetails;
