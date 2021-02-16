import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import FormButton from '../styledElements/FormButton';

const LogoutButton = (authenticated) => {
  const { logout } = useAuth0();

  return (
    <FormButton backgroundColor='berry' onClick={() => logout()}>
      Log Out
    </FormButton>
  );
};

export default LogoutButton;
