import React from 'react';
import CSS from 'csstype';

import { Person } from '../../common/interfaces/personInterface';

const listItemStyle:CSS.Properties = {
    backgroundColor: '#3F4042',
    padding: '0.6rem',
    borderRadius: '5px',
    marginRight: '15px',
    marginLeft: '15px',
    marginBlockStart: '20px'
}
const nameStyle:CSS.Properties = {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white',
    fontSize: '20',
}

const PersonListItem: React.FC<{ person: Person }> = ({ person }: { person: Person }) => {
    return (
            <div style={listItemStyle} key={person.name} >
                <p style={nameStyle} >{person.name}</p>
                <p>{person.gender}</p>
            </div>
    );
}

export default PersonListItem;