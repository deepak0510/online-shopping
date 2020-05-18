import React from 'react';

const currentYear = new Date().getFullYear();
export default class Footer extends React.Component {

    render(){
        return(
            <div className="footer">
                <p> Copyright  © {currentYear} All rights reserved </p>
            </div>
        )
    }
}