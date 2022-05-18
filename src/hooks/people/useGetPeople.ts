import { gql, useQuery } from "@apollo/client";
import { People } from "../../common/interfaces/personInterface";

export const GET_PEOPLE = gql`
    query people($page: Int!) {
      people(page: $page) {
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

export const useGetPeople = ($page: number): People | undefined => {
    const { data } = useQuery(GET_PEOPLE, {
        variables: {page: $page}        
    });
    
   
    return data?.people;
}