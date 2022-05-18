import { gql, useQuery } from "@apollo/client";
import { Individual } from "../../common/interfaces/personInterface";


export const GET_PERSON = gql`
    query person($search: String!) {
      person(search: $search) {
        results {
          name
          height
          mass
          gender
          homeworld {
            name
          }
        }
      }
    }
`

export const useGetPerson = ($search: string): Individual => {
    const { data } = useQuery(GET_PERSON, {
        variables: {search: $search}        
    });
   
    return data?.person;
}