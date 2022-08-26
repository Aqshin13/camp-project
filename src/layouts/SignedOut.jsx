import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut() {
  return (
    <div>
      <Menu.Item>
        <Button primary>Giris Yap</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Kayit ol</Button>
      </Menu.Item>
    </div>
  );
}
