// import logo from './logo.svg';
import styled, { css } from 'styled-components'
import './index.css';
import './App.css';
import React from 'react'
import Arrow from './components/arrow-bottom'
import anime from './images/cityscape-full.jpg';
import game from './images/sanshu-game.png';
import mech from './images/sanshu-mech.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


function App() {
  return (
    <>
<div id="smooth-wrapper">
    <div id="smooth-content">
      <div class="wrapper arrow-bottom">
        <div class="container md:flex md:flex-wrap mx-auto">
            <h1 className="text-6xl font-chain lg:w-3/6">Sanshu is a <span className="text-purple-700">Community</span><span>.</span></h1>
          <div className="lg:w-3/6 pr-8 pl-8">
            <p className="font-aldrich">I wanted the overall style to evoke travels, the adventures, and the personal connections that the Esperanto project represented. To do so, I knew I wanted a primary font with a humanist feel to it and a hand-drawn logo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div className="sanshu-mech">
        
        <img src={mech} alt="mech" />
      </div>
      <div className="cityscape">

        <div className="container mx-auto">
          <div className="showcase-wrapper">
            <img className="showcase-img" src={game}></img>
            <div className="showcase-content bg-purple-500">
              <p className='showcase-category uppercase font-aldrich'>Metaverse</p>
              <h3 className="uppercase font-chain">Explore the wonderful mind of our lead artist 'Ryuu'</h3>
              <p className='showcase-description font-aldrich'>Using the most cutting edge technologies to bring the vision of our lead artist to life. Creating fun and unique experiences that have been enabled by this new era of web3.</p>
            </div>
          </div>

          <div className="showcase-wrapper">
            <img className="showcase-img" src={game}></img>
            <div className="showcase-content bg-purple-500">
              <p className='showcase-category uppercase font-aldrich'>Metaverse</p>
              <h3 className="uppercase font-chain">Explore the wonderful mind of our lead artist 'Ryuu'</h3>
              <p className='showcase-description font-aldrich'>Using the most cutting edge technologies to bring the vision of our lead artist to life. Creating fun and unique experiences that have been enabled by this new era of web3.</p>
            </div>
          </div>
        </div>
        <img className="anime" src={anime} alt="anime" />
      </div>

    </>
  );
}

export default App;