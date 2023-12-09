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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUserData } from "../../../Redux/ReduxApi/UserApi";
import DropDownMenu from "../../../components/Custom/DropDownMenu/DropDownMenu";
import { detailsMenu } from "../../../data/all_menu";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UserDetails = () => {
  const { id } = useParams();
  const { user, loading } = useSelector((state) => state.users);
  const { name, date, status } = user;
  const newDate = new Date(date);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/users";

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
    navigate(`/user/update/${id}`);
  };

  const Delete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete the ${id}!`,
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
      <FlexDiv $direction>
        <JustifyWrapper $justify="flex-end">
          <DropDownMenu data={detailsMenu} onSubmitLi={handelli} id={id} />
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
                <P>
                  <span
                    className="activate-user-logo"
                    style={{
                      background: status?.color,
                      margin: "0px 10px 0px 0px",
                    }}
                  ></span>
                  {status?.name}
                </P>
              </FlexDiv>
            </FlexDiv>
          )}
        </Container>
      </FlexDiv>
    </PaddingContainer>
  );
};

export default UserDetails;
