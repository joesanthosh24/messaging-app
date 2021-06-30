import {
  SidebarOptionsContainer,
  SidebarOptionChannel,
} from "./sidebar-options.styles";

const SidebarOptions = ({ Icon, title }) => {
  return (
    <SidebarOptionsContainer>
      {Icon && <Icon />}
      {Icon ? (
        <p>{title}</p>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionsContainer>
  );
};

export default SidebarOptions;
