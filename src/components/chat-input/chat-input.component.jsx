import Button from "@material-ui/core/Button";
import { useState } from "react";
import firebase from "firebase";

import { ChatInputContainer } from "./chat-input.styles";

import { db } from "../../firebase";

const ChatInput = ({ channelName, channelId }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Aomine GOAT",
      userImage: "https://static.zerochan.net/Aomine.Daiki.full.2599090.png",
    });

    setMessage("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
