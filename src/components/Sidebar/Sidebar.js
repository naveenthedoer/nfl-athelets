import React, {Component} from 'react';

import './Sidebar.scss';
import NFLImage from '../../assets/NFL_Scouting_Combine_logo.svg';
import NFLLogo from '../../assets/NFL.png';
import VisaLogo from '../../assets/visa.png';

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar-Container">
                <div className="Image-Container">
                    <img src={NFLImage} alt="NFLImage"/>
                    <div className="Follow-Button">
                        <button>Follow</button>
                    </div>
                    <div className="NFL-Image">
                        <img src={NFLLogo} alt="NFLLogo"/>
                    </div>
                </div>
                <div className="Sidebar-Content">
                    <div className="Name-Container">
                        <div className="Title">NFL Canada</div>
                        <div className="Sub-Title">Canada</div>
                    </div>
                    <div className="Posts-Followers-Following">
                        <div className="Posts">
                            <div className="Value">7 Mil</div>
                            <div className="Title">Posts</div>
                        </div>
                        <div className="Followers">
                            <div className="Value">17546</div>
                            <div className="Title">Followers</div>
                        </div>
                        <div className="Following">
                            <div className="Value">312</div>
                            <div className="Title">Following</div>
                        </div>
                    </div>
                    <div className="Message-Button">
                        <button>Message</button>
                    </div>
                </div>
                <div className="Link-Description">
                    <div className="Link">
                        <i className="fas fa-globe" /> <span>https://canada.nfl.com</span>
                    </div>
                    <div className="Description">
                        The National Football League is America's most popular sports league,
                        comprised of 32 franchises that compete each year to win the Super Bowl,
                        the world's biggest annual sporting events. Founded in 1920, the NFL
                        developed the modal for the successful modern sports league, including
                        extensive revenue sharing, competitive excellence, strong franchises
                        across the board, and national distribution.
                    </div>
                </div>
                <div className="empty-space"></div>
                <div className="Partners">
                    <div className="Title">Our Partners</div>
                    <div className="Companies">
                        <img src={VisaLogo} alt="VisaLogo"/>
                        <img src={VisaLogo} alt="VisaLogo"/>
                        <img src={VisaLogo} alt="VisaLogo"/>
                        <img src={VisaLogo} alt="VisaLogo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;
