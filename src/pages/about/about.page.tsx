import React from 'react';
import CSS from 'csstype';

import Details from './../../components/people/details';


const bodyStyle: CSS.Properties = {
  backgroundColor: '#27282A',
  minHeight: '100vh',  
  paddingTop: '40px',
  fontFamily: 'sans-serif',
}

const About: React.FC = () => {
    return (
        <div style={bodyStyle} >
           <Details /> 
        </div>
    );
}

export default About;