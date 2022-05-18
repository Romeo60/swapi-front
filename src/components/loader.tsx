import React from 'react';
import CSS from 'csstype';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const loaderStyle: CSS.Properties = {
  width: '100%',
  color: '#0068df',
  fontSize: '60px',
  textAlign: 'center',
  marginTop: '80px'
}

const bodyStyle: CSS.Properties = {
  backgroundColor: '#27282A',
  minHeight: '100vh',
  paddingTop: '20px',
  width: '100%',
}

const Spinner: React.FC = () => {

	return (
          <div style={bodyStyle}  >
            <div style={loaderStyle}>
                <FontAwesomeIcon icon={faSpinner} spin />
            </div>
          </div>
        )
}

export default Spinner;