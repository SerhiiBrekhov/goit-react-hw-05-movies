import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Home = () => {
  return (
    <Wrapper>
      <header>
        hello
        <ul>
          hello
          <li>
            <StyledLink to="/Home" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/Movies" end>
              Movies
            </StyledLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </Wrapper>
  );
};
