import React, {useState} from 'react';
import CSS from 'csstype';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';


import Search from '../../components/search/search';
import PersonListItem from '../../components/people/person-list-item';
import Spinner from '../../components/loader';
import { useGetPeople } from '../../hooks/people/useGetPeople'

const listStyle: CSS.Properties = {
    backgroundColor: '#27282A',
    minHeight: '100vh',
    paddingTop: '20px',
    fontFamily: 'sans-serif'
}

const pagerStyle:CSS.Properties = {
    width: '300px',
    margin: 'auto',
    color: 'white',
    marginTop: '20px',
    paddingBottom: '30px'

}

const pagerNextStyle:CSS.Properties = {
    marginLeft: '15px',
    backgroundColor: '#0068df',
    height: '25px',
    width: '25px',
    borderRadius: '15px',
    marginTop: '5px'
}

const pagerPrevStyle:CSS.Properties = {
    marginRight: '15px',
    backgroundColor: '#0068df',
    height: '25px',
    width: '25px',
    borderRadius: '15px'
}

const Home: React.FC = () => { 

    const {urlPage} = useParams();
    const navigate = useNavigate();
    var readyPage= + Number(urlPage);

    if(!urlPage){
        readyPage = 1;
    }
    const [page, setPage] = useState<any>(readyPage);

    var list = useGetPeople(page);


    const pageLeft = () => {
        if(page !== 1){
           setPage(page - 1);
           navigate('/'+(page-1));
        }
    } 

    const pageRight = () => {
        if(page !== 9){
           setPage(page + 1); 
           navigate('/'+(page+1));
        }
    }

    if(list === undefined){
       return <Spinner />
    }


    return (
        <div style={listStyle} >
        <NavLink to="/search">
            <Search />
        </NavLink>
        
        {
            list?.results?.map((person:any) => (
                <NavLink to={`/about/${person.name}`} key={person.name}
                 state={
                    {name:person.name,
                    height: person.height,
                    mass: person.mass,
                    gender: person.gender,
                    homeworld: person.homeworld
                    }
                }>
                    <PersonListItem person={person} />
                </NavLink>
            ))
        }

            <div style={pagerStyle}> 
                <button style={pagerPrevStyle} onClick={()=> pageLeft()}>
                   <FontAwesomeIcon icon={faArrowLeft} /> 
                </button>
                    Page: {page} of 9
                <button style={pagerNextStyle} onClick={()=> pageRight()}>
                    <FontAwesomeIcon icon ={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default Home;