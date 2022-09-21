import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
    mutation sendComment ($name : String! , $email :String! , $body : String! , $slug : String!) {
  createComment(
    data: {name: $name, email: $email, body: $body, post: {connect: {slug: $slug}}}
  ) {
    id
  }
}
`;

export {
    SEND_COMMENT
}