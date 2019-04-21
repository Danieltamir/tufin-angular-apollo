import gql from "graphql-tag";

export const getAllCharactersQuery = gql`
  query characters {
    characters {
      firstName
      lastName
      alive
    }
  }
`;

export function getCharacterByNameQuery() {
  return gql`
    query getCharacterByName {
      getCharacterByName(name: "Daniel") {
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
}

export const getAllDragonsQuery = gql`
  query dragons {
    dragons {
      name
      kills
      fireType
    }
  }
`;

