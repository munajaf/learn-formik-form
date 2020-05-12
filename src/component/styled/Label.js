import styled from "styled-components";

export default styled.label`
  color: ${({error}) => error ? 'red' : 'white'};
`