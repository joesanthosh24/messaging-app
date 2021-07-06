import {
  SidebarOptionsContainer,
  SidebarOptionChannel,
} from "./sidebar-options.styles";

const SidebarOptions = ({ Icon, title, addChannelOption }) => {
  const addChannel = () => {
    const roomName = prompt("Enter Room Name: ");

    if (roomName) {
      addChannelOption(roomName);
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
