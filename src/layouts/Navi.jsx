import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const history = useHistory();

  function handleSingOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSingIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />

            {isAuthenticated ? (
              <SignedIn signOut={handleSingOut} />
            ) : (
              <SignedOut signIn={handleSingIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
