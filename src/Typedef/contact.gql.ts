const commonFields = `
    name: String!
    email: String!
    subject: String!
    message: String!
`;

export default `
type ContactType {
    id: ID!
    ${commonFields}
   
}

input ContactInput {
    ${commonFields}
}

type ContactListingType {
    data: [ContactType]
    pagination: PaginationType
}

extend type Query {
    getContacts(listing: ListingInput): ContactListingType
    getContact(id: ID!): ContactType
}

extend type Mutation {
    createContact(input: ContactInput): ContactType
    updateContact(id: ID!, input: ContactInput): ContactType
    deleteContact(id: ID!): Message
}
`;
