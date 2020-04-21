import React from 'react';
import { Link, graphql } from 'gatsby';
import { SEO, Jumbo } from '../components';
import styled from 'styled-components';

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`;

const Button = styled.button`
  width: 8rem;
  color: ${(props) => props.color};
  background-color: #98ca3f;
  &:hover {
    transform: scale(1.4);
  }
  border: none;
  border-radius: 10px;
`;

const IndexPage = ({ data }) => (
  <>
    <SEO title='Home' />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button color='gray'>Comprar</Button>
  </>
);

export default IndexPage;
