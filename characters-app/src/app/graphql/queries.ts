import gql from "graphql-tag";

export const getAllCharactersQuery = gql`
  query characters {
    characters {
      id
      firstName
      lastName
      alive
      age
      father {
        firstName
      }
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
        city
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
