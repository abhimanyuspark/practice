import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return <div>Detalis {id}</div>;
};

export default UserDetails;
