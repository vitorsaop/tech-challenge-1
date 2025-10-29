import styled from "styled-components";

export const Button = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.disabled ? "#CCC" : "#47A138")};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#CCC" : "#3A8A2E")};
  }
`;
