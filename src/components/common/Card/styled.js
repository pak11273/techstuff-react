import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: white;
  opacity: 0.7;
  border-radius: 10%;
  flex-grow: 1;
  justify-content: flex-start;
  width: 20rem;
  min-height: 280px;
  color: ${props => props.theme.colors.medBlue};
  padding: 20px;
  position: relative;

  div {
    position: absolute;
    left: 10px;
    bottom: 5px;
    display: flex;
  }

  button {
    font-size: 1.2rem;
    margin: 1rem;
    border-radius: 20%;
    width: 70px;
    &:hover {
      background: ${props => props.theme.colors.medBlue};
      color: white;
      cursor: pointer;
    }
  }
`;
