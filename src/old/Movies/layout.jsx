import { NavLink, Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// import { Loader } from './loader';
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

export const Layout = () => {
  return (
    <Wrapper>
      {/* <Header> */}
      <nav>
        {/* <BtnList> */}
        <li>
          <StyledLink to="/">
            {/* <IconHome /> */}
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">{/* <IconMovie /> Movies */}</StyledLink>
        </li>
        {/* </BtnList> */}
      </nav>
      {/* </Header> */}
      {/* <Suspense fallback={<Loader />}> */}
      <Outlet />
      {/* </Suspense> */}
    </Wrapper>
  );
};
