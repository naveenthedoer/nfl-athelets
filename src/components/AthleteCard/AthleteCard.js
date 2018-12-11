import React, {Component} from 'react';
import './AthleteCard.scss';

class AthleteCard extends Component {
    render() {
        return (
            <div className="Each-Card">
                <div className="Image">
                    <img src={this.props.player.imageURL} alt={this.props.player.name} className="Main-Image" />
                    <div className="Badge">
                        <img src={this.props.player.imageURL} alt={this.props.player.name} className="Badge-Image" />
                    </div>
                    <div className="Follow-Btn">
                        <button>Follow</button>
                    </div>
                </div>
                <div className="Content">
                    <div className="Name">{this.props.player.name}</div>
                    <div className="Position">
                        {this.props.player.game} | {this.props.player.position}
                    </div>
                    <div className="Place">
                        {this.props.player.place}
                    </div>
                </div>
                <div className="Button-Container">
                    <button className="Message-Btn">Message</button>
                    <button className="Block-Btn">Block Session</button>
                </div>
            </div>
        )
    }
}

export default AthleteCard;
