import React from 'react';
import {useState, ChangeEvent} from 'react';
import CSS from 'csstype';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useLazyQuery} from '@apollo/client';
import { NavLink } from 'react-router-dom';

import PersonListItem from '../../components/people/person-list-item';
import { GET_PERSON } from '../../hooks/people/useGetPerson';
import Spinner from '../../components/loader';


const bodyStyle: CSS.Properties = {
  backgroundColor: '#27282A',
  minHeight: '100vh',
  paddingTop: '20px',
  width: '100%',
}

const searchButtonStyle:CSS.Properties = {
  backgroundColor: '#0068df',
  borderRadius: '22px',
  color: 'white',
  height: '45px',
  width: '45px',
  marginLeft: '5px'
}


const searchBoxStyle:CSS.Properties = {
  width: '250px',
  height: '40px',
  border: '#0068df 1px solid',
  borderRadius: '12px',
  marginLeft: '10px',
  paddingLeft: '15px',
  fontSize: '16px',
  fontWeight: '600'
}

const linkStyle:CSS.Properties = {
  textDecoration: 'none'
}

const Searcher: React.FC = () => {

  const [search, setSearch]  = useState<string>("");
  var message = '';

  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value);
  }  
 
  const [getPerson, {loading, error, data}] = useLazyQuery(GET_PERSON);

    if(loading){
      return <Spinner />
    }
    if(error){
      message = `Error!! ${error.message}`;
    }
    
    if(data && data.person.results.length === 0){
      message = `No data found `;
    }
    return (
      <div style={bodyStyle} >
        <input style={searchBoxStyle} type={'text'} onChange={handleChange} placeholder={'Enter a persons name'} />
        <button style={searchButtonStyle} onClick={()=>{getPerson({variables:{search: search}})}} >
          <FontAwesomeIcon icon={faSearch} />
        </button> 
        {data?.person?.results.map((person:any) => (
           <NavLink to={`/about/${person.name}`} style={linkStyle} key={person.name}
             state={
               { name:person.name,
                 height: person.height,
                 mass: person.mass,
                 gender: person.gender,
                 homeworld: person.homeworld
                }
              }>
              <PersonListItem person={person} />
             </NavLink>
          ))} 
          <h1>{message}</h1>             
      </div>
    )
}

export default Searcher;