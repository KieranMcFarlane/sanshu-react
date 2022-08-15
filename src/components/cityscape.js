import React from 'react'
import game from '../images/sanshu-game.png';
import anime from '../images/cityscape-full.jpg';
import styled from 'styled-components'

const CityScape = styled.div`
  position: relative;
  .wrapper {
    position: absolute;
    top: 1310px;
    left: 0;
    width: 100%;
  }

`;




export const Cityscape = () => {
return (

<CityScape>

    <div className="wrapper">
      <div className="container mx-auto">
      <div className="showcase-wrapper">
        <img className="showcase-img" src={game} alt="game" />
        <div className="showcase-content bg-purple-500">
          <p className='showcase-category uppercase font-aldrich'>Metaverse</p>
          <h3 className="uppercase font-chain">Explore the wonderful mind of our lead artist 'Ryuu'</h3>
          <p className='showcase-description font-aldrich'>Using the most cutting edge technologies to bring the vision of our lead artist to life. Creating fun and unique experiences that have been enabled by this new era of web3.</p>
        </div>
      </div>
    
      <div className="showcase-wrapper">
        <img className="showcase-img" src={game} alt="game" />
        <div className="showcase-content bg-purple-500">
          <p className='showcase-category uppercase font-aldrich'>Metaverse</p>
          <h3 className="uppercase font-chain">Explore the wonderful mind of our lead artist 'Ryuu'</h3>
          <p className='showcase-description font-aldrich'>Using the most cutting edge technologies to bring the vision of our lead artist to life. Creating fun and unique experiences that have been enabled by this new era of web3.</p>
        </div>
      </div>

      <div className="showcase-wrapper">
        <img className="showcase-img" src={game} alt="game" />
        <div className="showcase-content bg-purple-500">
          <p className='showcase-category uppercase font-aldrich'>Metaverse</p>
          <h3 className="uppercase font-chain">Explore the wonderful mind of our lead artist 'Ryuu'</h3>
          <p className='showcase-description font-aldrich'>Using the most cutting edge technologies to bring the vision of our lead artist to life. Creating fun and unique experiences that have been enabled by this new era of web3.</p>
        </div>
      </div>

      <div className="showcase-wrapper">
        <img className="showcase-img" src={game} alt="game" />
        <div className="showcase-content bg-purple-500">
          <p className='showcase-category uppercase font-aldrich'>Metaverse</p>
          <h3 className="uppercase font-chain">Explore the wonderful mind of our lead artist 'Ryuu'</h3>
          <p className='showcase-description font-aldrich'>Using the most cutting edge technologies to bring the vision of our lead artist to life. Creating fun and unique experiences that have been enabled by this new era of web3.</p>
        </div>
      </div>
      </div>
    </div>

    <img className="anime" src={anime} alt="anime" />
    <img className="opacity-0" src={anime} alt="anime" />

</CityScape>

)}
