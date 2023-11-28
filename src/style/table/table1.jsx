import styled from "styled-components";

export const Table1 = styled.table`
  border-collapse: collapse;
  color: ${(props) => props.theme.cl_dark};
  height: 100%;
  width: 100%;
  & thead,
  tfoot {
    height: 50px;
  }
`;

export const Td1 = styled.td`
  padding: 5px;
  text-align: left;
  &:last-child {
    padding: 5px;
    padding-right: 15px;
    text-align: right;
  }
  &.no-data {
    padding: 10px;
    text-align: center;
  }
`;

export const Th1 = styled.th`
  cursor: pointer;
  padding: 5px;
  text-align: left;
  &:last-child {
    padding: 5px;
    text-align: right;
  }
  & > .different {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > .different .sort {
    width: 8px;
    font-size: 0.8em;
    transition: 0.2s ease;
    color: grey;
  }
  & > .different .sort:hover {
    color: ${(props) => props.theme.cl_dark};
  }
  & > .different .sort.active {
    color: ${(props) => props.theme.cl_dark};
  }
`;

export const Tr1 = styled.tr`
  border: none;
  &.selectedrow {
    background-color: rgba(0, 0, 0, 0.3);
  }
  & .table-loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .table-loading > div {
    padding: 10px 15px;
    border: 1px solid ${(props) => props.theme.cl_dark};
    background-color: ${(props) => props.theme.bg_cl};
    border-radius: 3px;
    font-size: 15px;
  }
`;
