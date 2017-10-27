import React from 'react'; 
import { connect } from 'react-redux'; 
import { addDrink } from '../actions'; 
import { deletePatron } from '../actions'; 
import './Patron.css'; 

export class Patron extends React.Component {

  handleFormSubmit(event) {
    event.preventDefault(); 
    const quantity = 1;
    const id = this.props.id;
    this.props.dispatch(addDrink(quantity, id))
    const audio = this.audioPlayer; 
    audio.play();
  }

    handleDeletePatron() {
        const audio = this.audioPlayer2; 
        audio.play();
        this.props.dispatch(deletePatron(this.props.id))
    }

    render(){
        let patronBac = this.props.bac; 
        let color; 
        if(patronBac <= 3) {
            color='level1 patron'; 
        }
        else if ( patronBac > 3 && patronBac <= 6) {
            color='level2 patron'; 
        }
        else if ( patronBac > 6 && patronBac <= 9 ) {
            color='level3 patron'; 
        }
        else if ( patronBac > 9 && patronBac <= 12 ) {
            color='level4 patron';
        }
        else {
            color='level5 patron';
        }

        const drinkDisplay = this.props.drinks.map((drink, idx) => (
            <i className="fa fa-beer" key={idx} aria-hidden="true"></i>
        ))

        let callTaxi; 
        if(this.props.bac > 12.1) {
            callTaxi = (
                <a href="tel:+18639448995">
                    <button className='button_red_patron'>Call Taxi <i className="fa fa-taxi" aria-hidden="true"></i></button>
                </a>
            )
        }
        return (
            <div className={color}>
                <div className="left">
                    <h1>{this.props.bac}</h1>
                    { callTaxi }
                </div>
                <div className="right">
                    <i className="fa fa-times close" onClick={event => this.handleDeletePatron()} aria-hidden="true"></i>
                    <h4>Time on site:  {this.props.timeOnSite}</h4>
                    <p>{this.props.seatString}</p>
                    {drinkDisplay}
                    <i className="fa fa-plus" onClick={event => this.handleFormSubmit(event)} aria-hidden="true"></i>
                </div>
                <div className="clear"></div>
                <audio ref={audio => this.audioPlayer = audio} >
                    <source src="./sounds/pour.m4a" type="audio/mp4" />
                </audio>
                <audio ref={audio => this.audioPlayer2 = audio} >
                    <source src="./sounds/crush.m4a" type="audio/mp4" />
                </audio>
            </div>
        )
    }
} 
    
export default connect()(Patron); 