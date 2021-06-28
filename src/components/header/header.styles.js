import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  padding: 10px 0;
  color: #fff;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  text-align: center;
  background-color: var(--secondary-color);
  padding: 0 30px;

  > input {
    border: none;
    outline: none;
    background-color: transparent;
    min-width: 30vw;
    color: #fff;
    text-align: center;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
