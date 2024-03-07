import styled from "styled-components"

const HomeWrapper = styled.div`
  width: 30%;
  display: flex
`;

const AccountMenuWrapper = styled.div`
  width: 30%;
  text-align: right;
`;

const AcountMenuWrapper = styled.div`
  padding: 1em;
`;

const TextFieldStyle = {
  fontWeight: "bold",
  border: `0.2em solid black`,
  borderRadius: "0.5em",

  "input": {
      "&::placeholder": {
        fontSize: "0.8em",
        color: "white"
      }
  }
}

export { HomeWrapper, AccountMenuWrapper, AcountMenuWrapper, TextFieldStyle }
