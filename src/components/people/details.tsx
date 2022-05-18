import React from 'react';
import CSS from 'csstype';
import {useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faGlobe, faArrowUp, faVenusMars, faWeight} from '@fortawesome/free-solid-svg-icons';


const detailItemStyle:CSS.Properties = {  
  color: 'white',
  fontSize: '15px',
  fontWeight: '400',
  width: '100%',
  margin: 'auto',
  paddingTop: '8px',  
  paddingLeft:'20px',

}

const detailsWrapStyle:CSS.Properties = {
  boxShadow: '0 4px 8px 0 rgba(7, 0, 3, 0.2)',
  maxWidth: '350px',
  margin: 'auto',  
  paddingBottom: '15px'
}

const clipArtStyle:CSS.Properties = {
  width: '100%',
  margin: '0 auto'
}

const artWrapStyle:CSS.Properties = {
  width: '250px',
  margin: 'auto'
}

const Details: React.FC = (props) => {

const location = useLocation(); 

// const people = (location.state as [Person]);
const people: any = (location.state);

console.log(people); 

    return (
        <div style={detailsWrapStyle}>

          <div style={artWrapStyle}>
            <img src={require("../img/person.png").default} alt={"Clip art"} style={clipArtStyle} />
          </div>

          <p style={detailItemStyle}>
            <FontAwesomeIcon icon={faUser} size='lg'/> Full Name : {people.name}
          </p>

          <p style={detailItemStyle}>
            <FontAwesomeIcon icon={faArrowUp} /> Height : {people.height}
          </p>

          <p style={detailItemStyle}>
            <FontAwesomeIcon icon={faWeight} /> Mass : {people.mass}
          </p>

          <p style={detailItemStyle}>
            <FontAwesomeIcon icon={faVenusMars} /> Gender : {people.gender}
          </p>

          <p style={detailItemStyle}>
            <FontAwesomeIcon icon={faGlobe} /> Homeworld : {people.homeworld.name}
          </p>
        </div>
    );
}

export default Details;