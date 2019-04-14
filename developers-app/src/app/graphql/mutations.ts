import gql from "graphql-tag";

export const addDeveloperMutation = gql`
    mutation addNewDeveloper($developer: DeveloperInput!) {
        addNewDeveloper(input: $developer) {
            successful
        }
    }
`;

export const editDeveloperMutation = gql`
    mutation editDeveloper($developer: DeveloperInput!) {
        editDeveloper(input: $developer) {
            successful
        }
    }
`;