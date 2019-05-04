import gql from "graphql-tag";

export const getAllCharactersQuery = gql`
  query characters {
    characters {
      id
      firstName
      lastName
      alive
    }
  }
`;

export const getCharacterByIdQuery = gql`
  query getCharacterById($characterId: ID!) {
    getCharacterById(id: $characterId) {
      firstName
      lastName
      age
      alive
      locationInfo {
        address
        citys
        country
        postalCode
      }
    }
  }
`;

export const getAllDragonsQuery = gql`
  query dragons {
    dragons {
      id
      name
      kills
      type
    }
  }
`;
