import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: url('https://i.pinimg.com/736x/7f/99/cb/7f99cbd17100174bb26d9433e7ed1388.jpg')
    no-repeat center/cover;
  height: 100%;
  width: 100%;
  margin: 0;
  color: white;
  overflow: hidden;

  .avoidwrap {
    display: inline-block;
  }

  header {
    margin: 40px;
    h1 {
      font-weight: 70;
      font-size: 5rem;
      text-align: center;
      text-shadow: 1px 1px 1px #fff;
    }
  }

  section {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    img {
      max-width: 240px;
      min-height: 240px;
      max-height: 240px;
      border-radius: 50%;
      border: 2px 10px 2px white;
    }

    h3 {
      margin: 20px;
    }

    h5 {
      text-align: center;
    }
  }

  .callouts {
    margin: 30px auto;
    display: flex;
    flex-flow: column wrap;
  }

  @media (min-width: 600px) {
    .callouts {
      flex-flow: row nowrap;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'ker ';
  font-size: 2rem;
  color: white;
  text-decoration: none;
  margin: 0.4rem;
  border: solid 8px white;
  border-radius: 18%;
  padding: 3%;
`;
