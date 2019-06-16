import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SlideDiv } from "./Style";

const Slide = ({ item, openedSlide }) => {
  const getDate = () => {
    const date = new Date(item.date);
    return date.toDateString();
  };

  return (
    <SlideDiv boolean={openedSlide === item.id}>
      <h1>{item.passengerName}</h1>
      <p>from : {item.fromCity}</p>
      <p>to : {item.toCity}</p>
      <p>date : {getDate()}</p>
      <p>mode : {item.mode}</p>
      <p>PNR: {item.pnrNo}</p>
    </SlideDiv>
  );
};

Slide.propTypes = {
  openedSlide: PropTypes.number
};

const mapStateToProps = state => ({
  openedSlide: state.openedSlide
});

export default connect(mapStateToProps)(Slide);
