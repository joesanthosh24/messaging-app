import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { SidebarContainer, SidebarHeader, SidebarInfo } from "./sidebar.styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Joe Santhosh
          </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;
