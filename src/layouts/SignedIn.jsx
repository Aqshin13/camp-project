import React from "react";
import { Dropdown, Menu ,Image} from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
        />

        <Dropdown pointing="top left" text="Sofia">
            <Dropdown.Menu>

                <Dropdown.Item text="Bilgilerim" icon="info" />
                <Dropdown.Item onClick={signOut} text="Cikis Yap" icon="sign-out" />


            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
