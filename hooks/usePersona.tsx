import { useState } from "react";

// custom imports
// --> none

type PersonaProps = {
  password: string;
  identifier: number;
  username: string;
};

const usePersona = ({ password, identifier, username }: PersonaProps) => {
  const [psd, setPassword] = useState(password);
  const [id, setId] = useState(identifier);
  const [name, setName] = useState(username);

  const getUserData = () => {
    return { password: psd, identifier: id, username: name };
  };

  const changeUserPassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const verifyUserPassword = (inputPassword: string) => {
    return inputPassword === psd;
  };

  return { getUserData, changeUserPassword, verifyUserPassword };
};

export default usePersona;
