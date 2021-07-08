import {
  SidebarOptionsContainer,
  SidebarOptionChannel,
} from "./sidebar-options.styles";

import { db } from "../../firebase";

const SidebarOptions = ({ Icon, title, addChannelOption, id }) => {
  const addChannel = () => {
    const roomName = prompt("Enter Room Name: ");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionsContainer>
  );
};

export default SidebarOptions;
