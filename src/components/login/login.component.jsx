import Button from "@material-ui/core/Button";
import { auth, provider } from "../../firebase";

import { LoginContainer, LoginInnerContainer } from "./login.styles";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo"
        />
        <h1>Sign In</h1>
        <p>slack-clone-style-messaging.com</p>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
