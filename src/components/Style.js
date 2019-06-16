import styled from "styled-components";

export const CarouselDiv = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
`;

export const Container = styled.div`
  background-color: silver;
  position: relative;
  margin: auto;
  transition: height 500ms 0ms, width 500ms 0ms;
  height: ${props => props.height && props.height}px;
  width: ${props => props.width && props.width}px;
  animation: "linear 2s";
`;

export const SlideSection = styled.section`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const RoundBtn = styled.span`
  & {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 20px 2px;
    background-color: ${props => (props.boolean ? "blue" : "lightblue")};
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  &:hover {
    background-color: blue;
  }
`;

export const SlideDiv = styled.div`
  display: ${props => (props.boolean ? "block" : "none")};
  animation-name: show;
  animation-duration: 2s;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
`;

export const FormDiv = styled.div`
  height: 60px;
`;
