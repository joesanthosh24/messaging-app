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
  padding: 15px;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    background-color: #fff;
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    border-radius: 999px;
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;

    > .MuiSvgIcon-root {
      color: var(--active-status-color);
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
    }
  }
`;
