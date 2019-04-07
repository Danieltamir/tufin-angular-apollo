export const typeDefs = `
  type Developer {
    firstName: String
    lastName: String
    age: Int
    lovesAngular : Boolean
    locationInfo : Location
  } 
  
  type Location {
    address: String
    city: String
    country: String
    postalCode : Int
  }   
    
  type Query {
    getDevelopers: [Developer]
    getDeveloperById: Developer
  }
  
  type MutationResult {
    successful: Boolean
  }
  
  input DeveloperInput {
    firstName: String
    lastName: String
    age: Int
    lovesAngular : Boolean
    locationInfo : LocationInput
  } 
  
  input LocationInput {
    address: String
    city: String
    country: String
    postalCode : Int
  }  
  
  type Mutation {
    addNewDeveloper(input: DeveloperInput!): MutationResult!
    editDeveloper(input: DeveloperInput): MutationResult!
    deleteDeveloper(input: Int): MutationResult!
  }
`;