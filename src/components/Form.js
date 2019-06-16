import React, { useState } from "react";
import PropTypes from "prop-types";
import { changeCarouselSize } from "../actions/main";
import { connect } from "react-redux";
import { FormDiv } from "./Style";

const Form = ({ changeCarouselSize, maxDivHeight, maxDivWidth }) => {
  const [formData, setFormData] = useState({
    height: "",
    width: ""
  });
  const { height, width } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value ? +e.target.value : ""
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (height > maxDivHeight || width > maxDivWidth) {
      alert(`You can set Max Height ${maxDivHeight} and Width ${maxDivWidth}`);
    } else if (height < 200 || width < 200) {
      alert(`You can set Min Height ${200} and Width ${200}`);
    } else {
      changeCarouselSize(height, width);
    }
  };
  return (
    <FormDiv>
      <form onSubmit={e => onSubmit(e)}>
        <label>Height : </label>
        <input
          type="number"
          placeholder="Height"
          name="height"
          value={height}
          onChange={e => onChange(e)}
          autoFocus
          required
        />
        <label>Width : </label>
        <input
          type="number"
          placeholder="Width"
          name="width"
          value={width}
          onChange={e => onChange(e)}
          required
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </FormDiv>
  );
};

Form.propTypes = {
  changeCarouselSize: PropTypes.func.isRequired,
  maxDivHeight: PropTypes.number,
  maxDivWidth: PropTypes.number
};

const mapStateToProps = state => ({
  maxDivHeight: state.maxDivHeight,
  maxDivWidth: state.maxDivWidth
});

export default connect(
  mapStateToProps,
  { changeCarouselSize }
)(Form);
