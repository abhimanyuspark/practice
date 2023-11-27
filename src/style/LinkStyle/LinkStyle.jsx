import styled from "styled-components";
import { Link } from "react-router-dom";

export const RNavLink = styled(Link)`
  color: var(--grey);
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
