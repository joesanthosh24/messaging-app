import { useCollection } from "react-firebase-hooks/firestore";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import PeopleIcon from "@material-ui/icons/People";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { SidebarContainer, SidebarHeader, SidebarInfo } from "./sidebar.styles";

import SidebarOptions from "../sidebar-options/sidebar-options.component";

import { db } from "../../firebase";

const Sidebar = () => {
  const [rooms] = useCollection(db.collection("rooms"));

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
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      {rooms?.docs.map((doc) => (
        <SidebarOptions id={doc.id} key={doc.id} title={doc.data().name} />
      ))}
      <hr />
      <SidebarOptions addChannelOption Icon={AddIcon} title="Add Channel" />
    </SidebarContainer>
  );
};

export default Sidebar;
