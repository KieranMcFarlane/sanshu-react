// import logo from './logo.svg';
import styled, { css } from 'styled-components'
import './index.css';
import './App.css';
import {Cityscape} from './components/cityscape';
import {MechIntro} from './components/mech-intro';
import React from 'react'
import Arrow from './components/arrow-bottom'
import anime from './images/cityscape-full.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SanshuGallery } from './components/sanshu-gallery';

function App() {
  return (
    <>
    <SanshuGallery />
    
          {/* <div class="wrapper arrow-bottom">
          <div class="container md:flex md:flex-wrap mx-auto">
              <h1 className="text-6xl font-chain lg:w-3/6">Sanshu is a <span className="text-purple-700">Community</span><span>.</span></h1>
            <div className="lg:w-3/6 pr-8 pl-8">
              <p className="font-aldrich">I wanted the overall style to evoke travels, the adventures, and the personal connections that the Esperanto project represented. To do so, I knew I wanted a primary font with a humanist feel to it and a hand-drawn logo.</p>
            </div>
          </div>
        </div> */}

    <MechIntro />

    <Cityscape />




    </>
  );
}

export default App;