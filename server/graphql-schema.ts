export const typeDefs = `

  ## Queries! 
  ## =========================================
  
  type Query {
    characters: [Character]
    dragons: [Dragon]
    getCharacterByName(name: String): Character
  }
  
  type Character {
    firstName: String
    lastName: String
    age: Int
    alive: Boolean
    locationInfo : Location
  } 
  
  type Location {
    address: String
    city: String
    country: String
    postalCode : Int
  }   
    
  type Dragon {
    name: String
    height: Int
    age: Int
    kills: Int
    fireType: FireType
  }
  
  enum FireType {
    FIRE
    ICE
  }

  ## Mutations! 
  ## =========================================
  
  type Mutation {
    addNewCharacter(input: CharacterInput): MutationResult!
    editCharacter(input: CharacterInput): MutationResult!
    killCharacter(input: CharacterInput): MutationResult!
    deleteCharacter(input: CharacterInput): MutationResult!
  }
  
  input CharacterInput {
    firstName: String!
    lastName: String
    age: Int
    alive : Boolean
    locationInfo : LocationInput
  } 
  
  input LocationInput {
    address: String
    city: String
    country: String
    postalCode : Int
  }  
  
  type MutationResult {
    successful: Boolean
  }
`;
