import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import PeopleIcon from "@material-ui/icons/People";

import { SidebarContainer, SidebarHeader, SidebarInfo } from "./sidebar.styles";

import SidebarOptions from "../sidebar-options/sidebar-options.component";

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
        <CreateIcon />
      </SidebarHeader>
      <SidebarOptions Icon={PeopleIcon} title="People and Groups" />
      <SidebarOptions Icon={AddIcon} title="Add Channel" />
    </SidebarContainer>
  );
};

export default Sidebar;
