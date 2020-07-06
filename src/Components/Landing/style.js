import styled from 'styled-components'
import hero from '../../Assets/Mountains.jpg'
import woman from '../../Assets/Women.jpg'
import overlook from '../../Assets/Overlook.jpg'
import woman2 from '../../Assets/woman2.jpg'
import outdoor from '../../Assets/Outoor.jpg'



export const Body = styled.body`
width: 100%;
height: 100%;

`

export const GridHero = styled.div`
width: 100%;
height: 700px;
background-image: url(${hero});
background-size: cover;
position: relative;
background-position: center;
background-repeat: no-repeat;
`

export const HeroNav = styled.nav`
width: 100%;
height: 90px;
display:flex;
justify-content: center;
`

export const NavG1  = styled.div`
width: 20%;
height: 90px;

display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
font-weight: 400;
color: white;
`

export const NavG2 = styled.div`
width: 30%;
height: 90px;
display: flex;
justify-content: space-around;
align-items: center;
`
export const NavG3 = styled.div`
width: 30%;
height: 90px;
display: flex;
Justify-content: center;
align-items: center;
`
export const NavgH1 = styled.h1`
color: white;
font-size: 16px;
font-weight: 620;
text-transform: uppercase;
padding-right: 20px;
padding-left: 10px;
`

export const NavButton = styled.button`
font-size: 16px;
background-color: transparent;
border: none;
color: white;
text-transform: uppercase;
font-weight: 620;
:hover{
color: black;
font-weight:650;
}
`
export const ResButton = styled.button`
background: red;
color: white;
font-size: 16px;
padding: 14px 40px;
border: none;
border-radius:8px;
transition: transform .2s;
:hover {
    transform: scale(1.1)
}
`

export const HeroMain = styled.div`
width: 100%;
height: 610px;
color:white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-transform: uppercase;
`

export const Contact = styled.button`
width: 180px;
height: 64px;
background-color: transparent;
letter-spacing: 0.2em;
font-size: 13px;
font-weight: 400;
text-transform: uppercase;
border: 2px solid #fff;
color: white;
:hover{
    background: #fff;
    cursor: pointer;
    color: black;
    font-weight: 400;
}
`

export const Grid2 = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: space-around;

`
export const Grid3 = styled.div`
width: 25vw;
height: 500px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const Contain3 = styled.div`
width: 70%
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const Grid4 = styled.style`
width: 20vw;
height: 500px;

display: flex;
align-items: center;
justify-content: center;
`

export const Gridimage = styled.div`
background-image: url(${woman});
background-size: cover;
background-position: center;
background-repeat: no repeat;
width: 80%;
height: 450px;
`

export const Grid5 = styled.div`
width: 100%;
height: 10vh;
`

export const G5 = styled.h1`
opacity: 0.4;
`
export const Contain6 = styled.div`
width: 100%;
height: 55vh;
display: flex;
justify-content: center;
`

export const Grid6 = styled.div`
width: 75vw;;
height: 55vh;
display: flex;
justify-content: space-around;
align-items: center;
`
export const Image1 = styled.image`
background-image: url(${overlook});
width: 20vw;
height: 50vh;
background-size: cover;
background-position: center;
background-repeat: no repeat;
transition: transform .2s;
:hover {
    transform: scale(1.1)
}
`

export const Image2 = styled.image`
background-image: url(${woman2});
width: 20vw;
height: 50vh;
background-size: cover;
background-position: center;
background-repeat: no repeat;
transition: transform .2s;
:hover {
    transform: scale(1.1)
}
`

export const Image3 = styled.image`
background-image: url(${outdoor});
width: 20vw;
height: 50vh;
background-size: cover;
background-position: center;
background-repeat: no repeat;
transition: transform .2s;
:hover {
    transform: scale(1.1)
}
`

export const Con2 = styled.div`
width: 100%;
height: 5vh;
display: flex;
justify-content: center;
`

export const Con3 = styled.div`
width: 75vw;
height: 5vh;
display: flex;
align-items: center;
justify-content: space-around;
`