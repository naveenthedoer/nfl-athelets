import React, {Component} from 'react';

import './SecondNavbar.scss';

class SecondNavbar extends Component {
    render() {
        return (
            <div className="Second-Navbar-Container">
                <div className="Each-List">posts</div>
                <div className="Each-List Active-List">our athletes</div>
                <div className="Each-List">photos</div>
                <div className="Each-List">videos</div>
                <div className="Each-List">events</div>
            </div>
        )
    }
}

export default SecondNavbar;