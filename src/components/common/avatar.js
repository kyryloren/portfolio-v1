import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "art/avatar.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
    </LogoWrap>
  );
};

export default Avatar;
