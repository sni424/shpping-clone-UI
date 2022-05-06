import { Animator, batch, Fade, FadeIn,Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from "react-scroll-motion";
import React from "react";
import styled from "styled-components";
import backimg from "./img/img.jpg"
import beach from "./img/beach-3086373.jpg"
import "./App.css"

function App() {

  const ZoominScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const Fadeup = batch(Fade(), Sticky(), Move());

  return (
    <FirstDiv>
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-200))} >
          <h2>Let me show you scroll</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoominScrollOut} >
          <h2>Scroll Out</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={Fadeup} >
          <h2>i'm Fade Out</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
      <SectionThree>
        <h2>
            <Animator animation={MoveIn(-1000,0)}>
              Hello World
            </Animator>
            <Animator animation={MoveIn(1000,0)}>
              Check Scroll
            </Animator>
            <Animator animation={MoveOut(1000,0)}>
              Okay Watch
            </Animator>
            <Animator animation={MoveOut(-1000,0)}>
              See Ya
          </Animator>
        </h2>
        </SectionThree>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Sticky(),Fade(),Move(2000,0))} >
            <ImgDiv>
              </ImgDiv>
            </Animator>
      </ScrollPage>
      </ScrollContainer>
      </FirstDiv>
  );
}

const FirstDiv = styled.div`
margin:0;
padding:0;
font-family: Arial,Helvetical,sans-serif;
`;

const SectionThree = styled.div`
background-color:#8f22d8;
color:white;
height:100%;
display:felx;
flex-dicretion:columnl;
align-items:center;
justify-content:center;
`;

const ImgDiv = styled.div`
width:230vh;
height: 100vh;
background-size:cover;
background-image: url(${beach});
`;

export default App;