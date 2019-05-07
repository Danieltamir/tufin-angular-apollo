export const schemaTypes = `

  ## Queries! 
  ## =========================================
  
  type Query {
    characters: [Character]
    dragons: [Dragon]
    getCharacterById(id: ID!): Character
  }
  
  type Character {
    id: ID
    firstName: String
    lastName: String
    age: Int
    alive: Boolean
    locationInfo : Location
    father: Character
    mother: Character
  } 
  
  type Location {
    address: String
    city: String
    country: String
    postalCode : Int
  }   
    
  type Dragon {
    id: ID
    name: String
    height: Int
    age: Int
    kills: Int
    type: DragonType
  }
  
  enum DragonType {
    FIRE
    ICE
  }

  ## Mutations! 
  ## =========================================
  
  type Mutation {
    addNewCharacter(input: CharacterInput): MutationResult!
    editCharacter(input: CharacterInput): MutationResult!
    killCharacter(characterId: ID): MutationResult!
    deleteCharacter(characterId: ID): MutationResult!
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
