import { TextField } from "@mui/material";
import styled from "styled-components";

const AccountInformationWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const TextfieldInput = styled(TextField)`
  width: 30%;
  text-align: left;
`;

export {AccountInformationWrapper, TextfieldInput};
