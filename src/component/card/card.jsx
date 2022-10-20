import PropTypes from "prop-types";
import DefaultPicture from "../../asset/default-picture.jpg";
//import styled from "styled-components";
import "../../style/CSS/card.css"

/*/const CardLabel = styled.span`
color: blue;
font-size: 25px;
padding: 10px;
border: 2px solid green;
border-radius: 10px;

`*/

function Card({label, picture, title }){
    return(
        <div className="card">
            <span className="card-label">{label}</span>
            <img className="card-picture" src={picture} alt={label}></img>
            <span className="card-title">{title}</span>
        </div>
    )
}
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    title: "",
    picture: DefaultPicture,
    label:"" 
}

export {Card}