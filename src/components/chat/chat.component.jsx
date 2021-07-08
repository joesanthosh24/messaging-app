import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import { ChatContainer, Header, HeaderLeft, HeaderRight } from "./chat.styles";

const Chat = () => {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong># Room Name</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </HeaderRight>
      </Header>
    </ChatContainer>
  );
};

export default Chat;
