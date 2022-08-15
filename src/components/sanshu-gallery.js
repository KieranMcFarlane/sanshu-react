import React from 'react'
import styled, { css } from 'styled-components'
import Logo from '../images/sanshu-black-logo.png';
import tmosSanshu from '../images/sanshu-mini/myth-of-sanshu-logo.png';
import diceOne from '../images/sanshu-mini/dice1.png';
import diceTwo from '../images/sanshu-mini/dice2.png';
import diceThree from '../images/sanshu-mini/dice3.png';
import kitsune from '../images/sanshu-mini/kitsune.png';
import daruma from '../images/sanshu-mini/daruma.png';
import noh from '../images/sanshu-mini/noh.png';
import tabletNoh from '../images/tablet/noh.png';
import namahage from '../images/sanshu-mini/namahage.png';
import tabletNamahage from '../images/tablet/namahage.png';
import raiden from '../images/sanshu-mini/raiden.png';
import tabletRaiden from '../images/tablet/raiden.png';
import tabletNight from '../images/tablet/night-bg.png';
import shutenDoji from '../images/sanshu-mini/shuten-doji.png';
import koi from '../images/sanshu-mini/koi.png';
import shiryu from '../images/sanshu-mini/shiryu.png';
import ichijama from '../images/sanshu-mini/ichijama.png';
import tabletBorderBottom from '../images/tablet/bottom-border.png';
import moonStarsFog from '../images/sanshu-mini/night/moon-stars-fog.png';
import namahageMobile from '../images/mobile/namahage.png';
import nightMobile from '../images/mobile/night-bg.png';
import bottomMobile from '../images/mobile/bottom-border.png';

const NavTop = styled.div`
    position: absolute;
    z-index: 99999;
    width: 100%;
    background: none;

    &.top-two {
        top: 2px;
    }
`;

const UpdateMsg = styled.p`
  position: absolute;
  bottom: 34px;
  right: 30px;
  left: initial;
  top: initial;
  z-index: 9999;
  display: flex;
  align-items: center;
  background-color: #ff1c5c;
  color: white;
  font-size: 14px;
  padding: 8px;
  border-radius: 4px;
`;

const MusicPlayer = styled.div`
  position: absolute; 
  bottom: 30px;
  left: 30px;
  right: initial;
  top: initial;
  z-index: 9999;
  display: flex;
  align-items: center;

  .play-button {
    bottom: 30px;
    left: 30px;
    right: initial;
    top: initial;
    z-index: 9999;
    min-width: 40px;
  }

  .music-desc {
      background: black;
      color: white;
      display: inline-block;
      padding: 8px;
      padding-right: 6px;
      padding-left: 1px;
      position: relative;
      top: 2px;
      font-size: 17px;
      border-radius: 4px;
      margin-left: 8px;
      min-width: 160px;
  }

  .music-desc:before {
      content: "\266B";
      display: inline-block;
      position: absolute;
      top: 2px;
      background: black;
      z-index: 200;
      width: 20px;
      left: 0;
      padding: 8px;
      padding-right: 24px;
  }
`;


const Hero = styled.section`
  position: relative;
  height: 100vh;
  min-height: 100%;
  height: calc(100vh - 30px);
  overflow: hidden;
  display: flex;
  background-color: #133379;

  .container-screen {
      position: absolute;
      width: 100%;
      height: 100vh;
  }

  .sanshu-logo{
    max-width: 670px;
    position: absolute;
    left: calc(50% - 335px);
    top: 30px;
  }

  .container-screen .scene .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 999;
  }

  .container-screen .scene .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  .daruma-body {
    position: relative;
  }

  .forefront {
        z-index: 999;
    }

  .daruma-dice {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }

  .dice {
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
  }

  .dice {
      animation: slidein 1.2s infinite alternate;
      transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  }

  .dice:nth-of-type(2) {
      animation: slidein 1s infinite alternate;
      animation-delay: 1.4s;
      transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

  }

  .dice:nth-of-type(3) {
      animation: slidein 1.3s infinite alternate;
      animation-delay: 1.6s;
      transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  }

  .detail-bg {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      min-width: 100%;
  }

  .detail-right-bg {
        position: absolute;
        z-index: 9;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        min-width: 100%;
    }

  @keyframes float {
      0% {
          transform: translatey(0px);
      }
      50% {
          transform: translatey(-8px);
      }
      100% {
          transform: translatey(0px);
      }
  }

  .floater-1 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.1s;
  }

  .floater-2 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.2s;
  }

  .floater-3 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.3s;
  }

  .floater-4 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.4s;
  }

  .floater-5 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.5s;
  }

  .floater-6 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.6s;
  }

  .floater-7 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.7s;
  }

  .floater-8 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.8s;
  }

  .floater-9 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 0.9s;
  }

  .floater-10 {
      transform: translatey(0px);
      animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
      animation-delay: 1s;
  }

    @media screen and (max-width: 1024px) { 
        & {
            display: none;
        }
      
        .bottom-border {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 999;
            top: initial;
        }

        .sanshu-logo {
            max-width: 670px;
            position: relative;
            top: 80px;
            left: initial;
            z-index: 2;
            margin-left: auto;
            margin-right: auto;
        }            

    }
`;

const HeroTablet = styled.section`
  display: none;

  .container-screen {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #133379;
}

  .detail-bg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
  }

  .container-screen .scene .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
}

.container-screen .scene .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  @media screen and (max-width: 1024px) { 
    .hero-tablet {
      display: block;
    }
  }

    @media screen and (max-width: 803px) { 
      .sanshu-logo {
          max-width: 360px;
          position: relative;
          top: 64px;
          left: initial;
          z-index: 2;
          margin-left: auto;
          margin-right: auto;
      }
  }

  @media screen and (max-width: 428px) { 
  .hero-tablet {
    display: none;
  }         
}
`;

const HeroMobile = styled.section`
  display: none;

  .container-screen {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #133379;
  }

  .detail-bg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
}

.container-screen .scene .layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}

.container-screen .scene .layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  @media screen and (max-width: 1024px) { 
    .hero-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 428px) { 
  .hero-mobile {
    display: block;
  }         
}
`;

// const musicPlayer = document.querySelector('.music-player')
// const pressPlay = musicPlayer.querySelector('.play-icon')
// const pressPause = musicPlayer.querySelector('.pause-icon')
// const audioElement = document.getElementById("my_audio");
// const togglePlay = () => {
//     if (audioElement.paused) {
//         audioElement.play();
//         pressPause.classList.remove("hidden")
//         pressPlay.classList.add("hidden")
//     }
//     else {
//         audioElement.pause();
//         pressPlay.classList.remove("hidden")
//         pressPause.classList.add("hidden")
//     }
// };


export const SanshuGallery = () => {
  return (
    <>

<NavTop className="absolute nav-top bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Sanshu</span>
            <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
          </a>
        </div>
        <div className="hidden">
          <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
  
         <div className="flex items-center justify-end md:flex-1 lg:w-0">
             <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 flex pr-6" rel="noreferrer" href="https://twitter.com/SanshuToken" target="_blank"><p style={{paddingTop: '6px'}} className="pr-2 text-white hidden md:block uppercase text-xs tracking-wide">twitter</p><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.89305C21.2639 6.21429 20.4741 6.43216 19.6442 6.52942C20.4915 6.02968 21.1402 5.23702 21.4476 4.2954C20.6527 4.75819 19.7754 5.09424 18.8406 5.27641C18.092 4.48989 17.0271 4 15.8461 4C13.5803 4 11.7431 5.80937 11.7431 8.03969C11.7431 8.35601 11.7794 8.66496 11.8494 8.96039C8.44001 8.79174 5.41684 7.18301 3.39347 4.7385C3.03977 5.33425 2.83856 6.02842 2.83856 6.76943C2.83856 8.1714 3.56343 9.40841 4.66324 10.1321C3.99085 10.11 3.35847 9.92782 2.80484 9.62502V9.67549C2.80484 11.6326 4.21958 13.2659 6.09546 13.6376C5.75177 13.7287 5.38935 13.7792 5.01442 13.7792C4.74948 13.7792 4.49327 13.7534 4.24206 13.7041C4.76445 15.3104 6.27919 16.4785 8.07387 16.5105C6.67037 17.5937 4.90069 18.2374 2.97856 18.2374C2.64739 18.2374 2.32118 18.2177 2 18.182C3.81592 19.3304 5.97177 20 8.28883 20C15.8362 20 19.9617 13.8432 19.9617 8.50374L19.9479 7.98063C20.754 7.41439 21.4513 6.70297 22 5.89305Z" fill="white" fill-opacity="0.9"></path></svg></span></a>
             <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 flex pr-6 relative top-two" rel="noreferrer" href="https://opensea.io/collection/the-myth-of-sanshu-limited-edition-yokai-cards" target="_blank"><p style={{paddingTop: '4px'}} className="pr-2 text-white hidden md:block uppercase text-xs tracking-wide">Opensea</p><span style={{width: '24px', position: 'relative', top: '-2px', left: 0}}><svg width="23" height="24" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"></svg></span></a>
         </div>
       </div>
     </div>
     </NavTop>

      <Hero>
        <p>Yokai Collection Out Now</p>
         <div className="container-screen">
             <img className="sanshu-logo" src={tmosSanshu} alt="Myth of Sanshu Logo" />
             <div className="scene">
                 <div className="layer daruma-container floater-1">
                     <img className="daruma-body floater-2" src={daruma} alt="" />
                     <div className="daruma-dice">
                         <img className="dice" src={diceOne} alt="" />
                         <img className="dice" src={diceTwo} alt="" />
                         <img className="dice" src={diceThree} alt="" />
                     </div>
                 </div>
                 <div className="layer"><img className="floater-3" src={kitsune} alt="" /></div>
                 <div className="layer"><img className="floater-4" src={noh} alt="" /></div>
                 <div className="layer"><img className="floater-5" src={namahage} alt="" /></div>
                 <div className="layer"><img className="floater-6" src={raiden} alt="" /></div>
                 <div className="layer"><img className="floater-7" src={shutenDoji} alt="" /></div>
                 <div className="layer"><img className="floater-8" src={koi} alt="" /></div>  
             </div>
             <div className="detail-bg"><img src={moonStarsFog} /></div>
             <div className="detail-bg forefront"><img className="floater-9" src={shiryu} alt="" /></div>
             <div className="detail-right-bg forefront"><img className="floater-10" src={ichijama} alt="" /></div>  
         </div>
     </Hero>

    <HeroTablet>
      <div className="container-screen">
          <img className="sanshu-logo" src={tmosSanshu} alt="Myth of Sanshu Logo" />
          <div className="scene">
              <div className="layer" data-depth="0.4"><img className="floater-4" src={tabletNoh} alt="" /></div>
              <div className="layer" data-depth="0.5"><img className="floater-5" src={tabletNamahage} alt="" /></div>
              <div className="layer" data-depth="0.4"><img className="floater-6" src={tabletRaiden} alt="" /></div>
          </div>
          <div className="detail-bg"><img src={tabletNight} /></div>
          <img className="bottom-border" src={tabletBorderBottom} alt="" />
      </div>
    </HeroTablet>

    <HeroMobile>
      <div className="container-screen">
          <img className="sanshu-logo" src={tmosSanshu} alt="Myth of Sanshu Logo" />
          <div className="scene">
              <div className="layer" data-depth="0.5"><img className="floater-5" src={namahageMobile} alt="" /></div>
          </div>
          <div className="detail-bg"><img src={nightMobile} /></div>
          <img className="bottom-border" src={bottomMobile} alt="" />
      </div>
    </HeroMobile>

    {/* <UpdateMsg>Updated Site Coming Soon</UpdateMsg>

    <MusicPlayer>
        <button onClick={{togglePlay}} className="play-button duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center h-10 w-10 border-4 rounded-full overflow-hidden bg-gray-800 text-white border-black">
             <svg className="play-icon w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"></path></svg>
             <svg className="pause-icon hidden" stroke="white" fill="white" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
         </button>
         <marquee scrollamount="2" className="play-theme music-desc">Yōkai no taitō</marquee>
    </MusicPlayer> */}

    {/* <audio src="assets/music/sanshu-intro.mp3" idName="my_audio" loop="true" autostart="true"></audio> */}

     </>

  )
}



//     <p className="site-desc info-box">Updated Site Coming Soon</p>
//     <div className="music-player">
//         <button onClick="togglePlay()" className="play-button duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center h-10 w-10 border-4 rounded-full overflow-hidden bg-gray-800 text-white border-black">
//             <svg className="play-icon w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"></path></svg>
//             <svg className="pause-icon hidden" stroke="white" fill="white" stroke-width="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
//         </button>
//         <marquee scrollamount="2" className="play-theme music-desc">Yōkai no taitō</marquee>
//         <!-- <p className="pause-theme music-desc">Pause Theme Music</p> -->
//     </div>
//     <audio src="assets/music/sanshu-intro.mp3" id="my_audio" loop="true" autostart="true">
//     <script type="text/javascript">
//         const musicPlayer = document.querySelector('.music-player')
//         const pressPlay = musicPlayer.querySelector('.play-icon')
//         const pressPause = musicPlayer.querySelector('.pause-icon')
//         const audioElement = document.getElementById("my_audio");
//         function togglePlay() {
//             if (audioElement.paused) {
//                 audioElement.play();
//                 pressPause.classList.remove("hidden")
//                 pressPlay.classList.add("hidden")
//             }
//             else {
//                 audioElement.pause();
//                 pressPlay.classList.remove("hidden")
//                 pressPause.classList.add("hidden")
//             }
//         };
//     </script>


// if(!isRetinaDisplay()){
//     document.addEventListener('DOMContentLoaded', (event) => {
//         // the event occurred
//         var scene = document.getElementById('scene');
//         var parallaxInstance = new Parallax(scene);
//     })
// }


//         html, body{
//             margin: 0;  
//             padding: 0;
//             box-sizing: border-box;
//             height: 100vh;
//             overflow: hidden;
//             font-family: 'aldrich-regular', sans-serif;
//         }

//         #scene {
//             border-color: transparent;
//         }

//         img {
//             width: 100%;
//             height: auto;
//         }

//         section.banner {
//             position: relative;
//             width: 100%;
//             height: 100vh;
//         }
//         .container-screen {
//             position: absolute;
//             width: 100%;
//             height: 100vh;
//         }

//         .container-screen #scene .layer {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100vh;
//             z-index: 999;
//         }

//         .container-screen #scene .layer {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//         }

//         .play-button {
//             bottom: 30px;
//             left: 30px;
//             right: initial;
//             top: initial;
//             z-index: 9999;
//             min-width: 40px;
//         }

//         .daruma-body {
//             position: relative;
//         }
//         .daruma-dice {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: auto;
//         }
//         .daruma-container{
//             /* z-index: 29 !important; */
//         }
//         .dice {
//             position: absolute;
//             z-index: 999;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: auto;
//         }
//         .bg-night img {
//             position: absolute;
//             top: 0;
//             /* left: 0; */
//             /* z-index: -1; */
//         }
//         .container-screen {
//             background-color: #133379;
//         }
//         #scene {
//             z-index: 22;
//         }

//         @keyframes float {
//             0% {
//                 transform: translatey(0px);
//             }
//             50% {
//                 transform: translatey(-8px);
//             }
//             100% {
//                 transform: translatey(0px);
//             }
//         }

//         .floater-1 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.1s;
//         }

//         .floater-2 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.2s;
//         }

//         .floater-3 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.3s;
//         }

//         .floater-4 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.4s;
//         }

//         .floater-5 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.5s;
//         }
        
//         .floater-6 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.6s;
//         }

//         .floater-7 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.7s;
//         }

//         .floater-8 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.8s;
//         }

//         .floater-9 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 0.9s;
//         }

//         .floater-10 {
//             transform: translatey(0px);
//             animation: float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
//             animation-delay: 1s;
//         }

//         *, ::after, ::before {
//             box-sizing: border-box;
//             border-width: 0;
//             border-style: solid;
//             border-color: transparent;
//         }

//         .dice {
//             animation: slidein 1.2s infinite alternate;
//             transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
//         }

//         .dice:nth-of-type(2) {
//             animation: slidein 1s infinite alternate;
//             animation-delay: 1.4s;
//             transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

//         }

//         .dice:nth-of-type(3) {
//             animation: slidein 1.3s infinite alternate;
//             animation-delay: 1.6s;
//             transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
//         }

//         @keyframes slidein {
//             0% { transform: translateY(0); }
//             100% { transform: translateY(-15px); }
//         }

//         .top-two {
//             top: 2px;
//         }

//         .detail-bg {
//             position: absolute;
//             z-index: 1;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//         }

//         .detail-right-bg {
//             position: absolute;
//             z-index: 9;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//         }

//         .sanshu-logo{
//             max-width: 670px;
//             position: absolute;
//             left: calc(50% - 335px);
//             top: 30px;
//         }
//         .forefront {
//             z-index: 999;
//         }
//          .uc-arrow--bottom {
//             z-index: 999;
//             position: absolute;
//             bottom: 0;
//             width: 100%;
//             left: 0;
//         }
//         .uc-arrow--bottom:before {
//             content: '';
//             position: absolute;
//             z-index: 0;
//             bottom: 0;
//             left: 0;
//             border-bottom: 80px solid #13327a;
//             border-right: 50vw solid transparent;
//         }
//         .uc-arrow--bottom:after {
//             content: '';
//             position: absolute;
//             z-index: 0;
//             bottom: 0;
//             right: 0;
//             border-bottom: 80px solid #13327a;
//             border-left: 50vw solid transparent;
//         }
//         .uc-wrapper{
//             max-width: 1080px;
//             margin: 0 auto;
//             padding: 0 20px;
//             position: relative;
//             /* background-color: purple; */
//         } 

//         .bottom-border{
//             position: absolute;
//             top: 110px;
//             left: 0;
//             z-index: 999;
//         }

//         .music-desc {
//             background: black;
//             color: white;
//             display: inline-block;
//             padding: 8px;
//             padding-right: 6px;
//             padding-left: 1px;
//             position: relative;
//             top: 2px;
//             font-size: 17px;
//             border-radius: 4px;
//             margin-left: 8px;
//             min-width: 160px;
//         }

//         .music-desc:before {
//             content: "\266B ";
//             display: inline-block;
//             position: absolute;
//             top: 2px;
//             background: black;
//             z-index: 200;
//             width: 20px;
//             left: 0;
//             padding: 8px;
//             padding-right: 24px;
//         }


//         .site-desc {
//             display: inline-block;
//             padding-right: 6px;
//             padding-left: 1px;
//             position: relative;
//             top: 2px;
//             font-size: 17px;
//         }



//         .info-box {
//             position: absolute;
//             bottom: 34px;
//             right: 30px;
//             left: initial;
//             top: initial;
//             z-index: 9999;
//             display: flex;
//             align-items: center;
//             background-color: #ff1c5c;
//             color: white;
//             font-size: 14px;
//             padding: 8px;
//             border-radius: 4px;
//         }

//         .music-player {
//             position: absolute;
//             bottom: 30px;
//             left: 30px;
//             right: initial;
//             top: initial;
//             z-index: 9999;
//             display: flex;
//             align-items: center;
//         }

//         #my_audio {
//             border: none !important;
//         }

//         @media screen and (max-width: 1024px) { 
//             .hero {
//                 display: none;
//             }
            
//             .bottom-border {
//                 position: absolute;
//                 bottom: 0;
//                 left: 0;
//                 z-index: 999;
//                 top: initial;
//             }

//             .sanshu-logo {
//                 max-width: 670px;
//                 position: relative;
//                 top: 80px;
//                 left: initial;
//                 z-index: 2;
//                 margin-left: auto;
//                 margin-right: auto;
//             }            

//         }



//         @media screen and (max-width: 428px) { 
//             .hero {
//                 display: none;
//             }
//             .hero-tablet {
//                 display: none;
//             }

//             .sanshu-logo {
//                 max-width: 380px;
//                 position: relative;
//                 top: 80px;
//                 z-index: 2;
//                 margin-left: auto;
//                 margin-right: auto;
//                 padding: 0 2rem;
//             }
//             .info-box {
//                 display: none;
//             }
//             .music-desc:before {
//                 display: none;
//             }
//         }

//     </style>
// </head>
// <body>



// function isRetinaDisplay() {
//     if (window.matchMedia) {
//         var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
//         return (mq && mq.matches || (window.devicePixelRatio > 1));
//     }
// }