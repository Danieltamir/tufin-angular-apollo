import gql from "graphql-tag";


export const addCharacterMutation = gql`
  mutation addNewCharacter($character: CharacterInput) {
    addNewCharacter(input: $character) {
      successful
    }
  }
`;

export const editCharacterMutation = gql`
  mutation editCharacter($character: CharacterInput) {
    editCharacter(input: $character) {
      successful
    }
  }
`;

export const deleteCharacterMutation = gql`
  mutation deleteCharacter($character: CharacterInput) {
    deleteCharacter(input: $character) {
      successful
    }
  }
`;

export const killCharacterMutation = gql`
  mutation killCharacter($character: CharacterInput) {
    killCharacter(input: $character) {
      successful
    }
  }
`;
