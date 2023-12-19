import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FlexDiv,
  P,
  PaddingContainer,
  Loader,
  JustifyWrapper,
  Shape,
} from "../../../style/Export/Export";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUserData } from "../../../Redux/ReduxApi/UserApi";
import DropDownMenu from "../../../components/Custom/DropDownMenu/DropDownMenu";
import { detailsMenu } from "../../../data/all_menu";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useTitle } from "../../../hooks/useTitle";

const UserDetails = () => {
  const { id } = useParams();
  const { user, loading } = useSelector((state) => state.users);
  const { name, date, status, progress, visits, age, email } = user;
  const newDate = new Date(date);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/users";
  useTitle(name);

  useEffect(() => {
    dispatch(getUserData(id));
  }, [dispatch]);

  const handelli = (d, id) => {
    switch (d) {
      case "Edit":
        Edit(id);
        break;
      case "Delete":
        Delete(id);
        break;
      default:
        break;
    }
  };

  const Edit = (id) => {
    navigate(`/users/update/${id}`);
  };

  const Delete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete the ${name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
        navigate(from, { replace: true });
        toast.success(`${name} deleted successfull`, {
          position: "top-right",
        });
      }
    });
  };

  return (
    <PaddingContainer>
      {loading ? (
        <Loader height="100px" />
      ) : (
        <FlexDiv $direction>
          <JustifyWrapper $justify="flex-end">
            <DropDownMenu data={detailsMenu} onSubmitLi={handelli} id={id} />
          </JustifyWrapper>

          <Container>
            <FlexDiv $gap="15">
              <FlexDiv $gap="2" $direction>
                <P>Name</P>
                <P>Create Date</P>
                <P>Progress</P>
                <P>Status</P>
                <P>Email</P>
                <P>Age</P>
                <P>Visits</P>
              </FlexDiv>
              <FlexDiv $gap="2" $direction>
                <P>{name}</P>
                <P>{newDate.toLocaleDateString()}</P>
                <P>{progress}</P>
                <FlexDiv $gap="0.5">
                  <Shape $circle $color={status?.color} />
                  <P>{status?.name}</P>
                </FlexDiv>
                <P>{email}</P>
                <P>{age}</P>
                <P>{visits}</P>
              </FlexDiv>
            </FlexDiv>
          </Container>
        </FlexDiv>
      )}
    </PaddingContainer>
  );
};

export default UserDetails;
