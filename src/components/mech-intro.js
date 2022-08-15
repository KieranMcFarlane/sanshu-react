import styled, { css } from 'styled-components'
import '../index.css';
import '../App.css';
import mech from '../images/sanshu-mech.png';


export const MechIntro = () => {
    return (
        <div className="sanshu-mech">
            <h1 className="font-chain">sanshu is a Community.</h1>
            <h1 className="font-chain">sanshu is a Brand.</h1>
            <h1 className="font-chain">sanshu is a Culture.</h1>
            <p className="font-aldrich">I wanted the overall style to evoke travels, the adventures, and the personal connections that the Esperanto project represented. To do so, I knew I wanted a primary font with a humanist feel to it and a hand-drawn logo.</p>
            <p className="font-aldrich">Style to evoke travels, the adventures, and the personal connections that the Esperanto project represented. I wanted a primary font with a humanist feel to it and a hand-drawn logo.</p>
            <img src={mech} alt="mech" />
        </div>
    )};


