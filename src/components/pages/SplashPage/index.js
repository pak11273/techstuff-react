import { StyledDiv, StyledLink } from './styled';

import React from 'react';
import { SplashGrid } from 'components/common';

export function SplashPage() {
  return (
    <StyledDiv>
      <SplashGrid maxwidth="960px">
        <header style={{ gridArea: 'header' }}>
          <h1>
            <span className="avoidwrap">Rent My</span>{' '}
            <span className="avoidwrap">Tech Stuff</span>
          </h1>
        </header>
        <section style={{ gridArea: 'body' }}>
          <h3>Tech is expensive</h3>
          <img
            alt="high tech equipment"
            src="https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=979&q=80"
          />
          <h3>Rent it!</h3>
        </section>
        <section className="callouts" style={{ gridArea: 'callout' }}>
          <StyledLink to="/login">Login</StyledLink>
          <p>or</p>
          <StyledLink to="/register">Register</StyledLink>
        </section>
      </SplashGrid>
    </StyledDiv>
  );
}
