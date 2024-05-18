import { gql } from 'graphql-request';

export const EXAMPLE_QUERY = gql`
  query Example {
    Page(id: "597d4a8e-baaa-4e5a-8712-7ebc55314e11") {
      _id
      title
      _slug
      page_header {
        _id
        title
        image {
          _id
          url
        }
        text
      }
      html
    }
  }
`;
