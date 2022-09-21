import { gql } from "@apollo/client";

const GET_POSTS = gql`
    query{
        posts {
            id
            slug
            title
            coverPhoto {
                url
            }
            author {
                avatar {
                    url
                }
            name
            slug
            }
        }
}
`;


const GET_AUTHORS = gql`
    query{
        authors {
            avatar {
                url
            }
            id
            name
            slug
        }
}
`;

const GET_AUTHOR = gql`
    query getAuthor ($slug : String!){
        author(where: {slug: $slug}) {
            avatar {
                url
            }
            field
            name
            posts {
                id
                coverPhoto {
                    url
                }
                slug
                title
            }
            description {
                html
            }
        }
    }
`;

const GET_POST = gql`
    query getPost($slug : String!){
        post(where: {slug: $slug}) {
            title
            content {
                html
            }
            author {
                field
                name
                slug
                avatar {
                    url
                }
            }
            coverPhoto {
                url
            }
        }
}
`;

const GET_COMMENTS = gql`
    query getComments($slug : String!){
            comments(where: {post: {slug: $slug}}) {
                body
                id
                name
            }
    }
`;

export {
    GET_POSTS,
    GET_AUTHORS,
    GET_AUTHOR,
    GET_POST,
    GET_COMMENTS
}