import React from 'react';
import logo from '../../img/logo.svg';

class PageHeader extends React.Component {
    render () {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        )
    }
}
export default PageHeader