import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import CSS from 'csstype';

const searchStyle:CSS.Properties = {
	backgroundColor: 'black',
	color: '#0068df',
	border: 'none',
	borderRadius: '12px',
	marginLeft: '10px',
	paddingLeft: '15px',
	paddingRight: '15px',
	height: '40px',
	fontSize: '20px',
	fontWeight: '600'
}

const Search: React.FC = () => {
    return (
    	<button style={searchStyle}>
	        <FontAwesomeIcon icon={faSearch} /> Search People 
	    </button>
    );
}

export default Search;