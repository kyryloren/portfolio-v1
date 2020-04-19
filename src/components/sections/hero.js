import React from 'react';
import styled from 'styled-components';

import ExternalLink from '@components/common/ExternalLink';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '../common/avatar';

const HeroWrapper = styled.div`
  height: 100vh;
`;

const StyledLink = styled(ExternalLink)`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: black;
  padding: 0 1px;
  -webkit-transition: color ease 0.3s;
  transition: color ease 0.3s;
  :after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 8%;
    left: 0;
    bottom: 0;
    background-color: #00b388;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
  }
  :hover {
    color: #fff;
  }
  :hover::after {
    height: 100%;
  }
`;

const StyledButton = styled.a`
  padding: 15px 30px;
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  background-color: #00b388;
  border: 2px solid #00b388;
  cursor: pointer;
  width: max-content;
  transition: 0.25s ease;
  text-decoration: none;

  &:hover {
    box-shadow: 0 6px 18px 0 rgba(#000, 0.1);
    transform: translateY(-6px);
  }
`;

function Hero() {
  return (
    <HeroWrapper>
      <Container fluid>
        <Row>
          <Col className="d-flex align-items-center min-vh-100">
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col lg={6} className="text-center">
                  <Row className="justify-content-center">
                    <Avatar />
                  </Row>
                  <Row>
                    <h2>
                      <span role="img" aria-label="wave">
                        &#128075;
                      </span>{' '}
                      Hey I'm{' '}
                      <StyledLink href="https://instagram.com/kyryloren">
                        Kyrylo
                      </StyledLink>
                      , a freelance developer and UX/UI designer based in New
                      York. Have a project in mind or just wanna see what I can
                      do? I think you should{' '}
                      <StyledLink href="mailto:dev@kyryloorlov.com">
                        contact me
                      </StyledLink>
                      .
                    </h2>
                  </Row>
                  <Row className="justify-content-center mt-4">
                    <StyledButton
                      className="m-3"
                      href="https://github.com/kyryloren"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      View GitHub
                    </StyledButton>
                    <StyledButton
                      className="m-3"
                      href={`resume.pdf`}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      View Resume
                    </StyledButton>
                    <StyledButton
                      className="m-3"
                      href="https://medium.com/@kyryloren"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      Blog
                    </StyledButton>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </HeroWrapper>
  );
}

export default Hero;
