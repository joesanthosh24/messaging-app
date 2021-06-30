import styled from "styled-components";

export const SidebarOptionsContainer = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  font-size: 12px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: var(--secondary-color);
  }

  > .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

export const SidebarOptionChannel = styled.div``;
