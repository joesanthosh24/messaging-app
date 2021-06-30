import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--primary-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #fff;
  max-width: 260px;
  margin-top: 60px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const SidebarInfo = styled.div`
  > h3 {
    display: flex;
    align-items: center;
  }

  > .MuiSvgIcon-root {
    color: green;
  }
`;
