import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "./Slide";
import { connect } from "react-redux";
import { changeSlide, updateState } from "../actions/main";
import { CarouselDiv, Container, SlideSection, RoundBtn } from "./Style";

const Carousel = ({
  data,
  changeSlide,
  openedSlide,
  updateState,
  carouselHeight,
  carouselWidth
}) => {
  const plusSlides = () => {
    data.length === openedSlide ? changeSlide(1) : changeSlide(openedSlide + 1);
  };
  const minusSlides = () => {
    openedSlide === 1 ? changeSlide(data.length) : changeSlide(openedSlide - 1);
  };

  const currentSlide = e => {
    changeSlide(e);
  };

  const appRef = React.createRef();

  const getDivSize = () => {
    updateState(appRef.current.clientHeight, appRef.current.clientWidth);
  };

  useEffect(() => {
    getDivSize();
  }, []);

  return (
    <CarouselDiv ref={appRef}>
      <Container height={carouselHeight} width={carouselWidth}>
        <SlideSection>
          {data.map(item => (
            <Slide key={item.id} item={item} />
          ))}
        </SlideSection>

        <FontAwesomeIcon
          className="prev"
          icon={faChevronLeft}
          onClick={() => minusSlides()}
        />

        <FontAwesomeIcon
          className="next"
          icon={faChevronRight}
          onClick={() => plusSlides()}
        />

        <Fragment>
          {data.map(item => (
            <RoundBtn
              key={item.id}
              boolean={openedSlide === item.id}
              onClick={() => currentSlide(item.id)}
            />
          ))}
        </Fragment>
      </Container>
    </CarouselDiv>
  );
};

Carousel.propTypes = {
  data: PropTypes.array,
  changeSlide: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  carouselHeight: PropTypes.number,
  carouselWidth: PropTypes.number
};

const mapStateToProps = state => ({
  data: state.data,
  openedSlide: state.openedSlide,
  carouselHeight: state.carouselHeight,
  carouselWidth: state.carouselWidth
});

export default connect(
  mapStateToProps,
  { changeSlide, updateState }
)(Carousel);
