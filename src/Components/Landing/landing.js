 import React, { Component } from 'react'

 import {Phone} from 'react-feather'
 import {Body, GridHero,NavG1,  NavG2,NavButton,
    NavG3,NavgH1,ResButton,HeroNav, HeroMain, Contact, 
    Grid2, Grid3, Grid4, Gridimage, Contain3, Grid5,G5, 
    Grid6, Image1,Image2, Image3, Contain6, Con3, Con2 } from './style'

 
 export default class landing extends Component {
     render() {
         return (
            <Body>
                <GridHero>
                    <HeroNav>
                        <NavG1>
                            <h1>Placeholder</h1>
                        </NavG1>
                        <NavG2>
                            <NavButton>
                                Home
                            </NavButton>
                            <NavButton>
                                Menu
                            </NavButton>
                            <NavButton>
                                About
                            </NavButton>
                            <NavButton>
                                Contact
                            </NavButton>
                        </NavG2>
                        <NavG3>
                            <NavgH1>Call Now!</NavgH1>
                            <Phone color='white' size={25}/>
                            <NavgH1>000-000-0000</NavgH1>
                            <ResButton>Reserve</ResButton>
                        </NavG3>
                    </HeroNav> 
                    <HeroMain>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <h3>Vivamus ut lorem et ipsum iaculis posuere sit amet ac erat. Sed quis dictum leo.</h3>
                    <Contact>Reserve Now</Contact>
                    </HeroMain>
                </GridHero>
                <Grid2>
                    <Grid3>
                        <Contain3>
                        <h4>Lorem ipsum</h4><h2>Morbi iaculis sed enim nec varius. Ut sit amet lorem ac quam sagittis consectetur.</h2><h3>In erat nisl, commodo at consequat non, aliquet at enim. Morbi vehicula rutrum justo, fringilla lobortis leo elementum a. Nam molestie vitae lorem quis viverra. Morbi eu placerat nunc, dignissim porttitor enim. Aliquam quis cursus urna, sed maximus nulla. Aliquam quis rhoncus orci. Cras placerat facilisis semper. Etiam congue, dolor quis faucibus placerat, enim libero volutpat dui, nec pulvinar sem mi ac purus. Phasellus id dapibus orci, ut rutrum libero.</h3>
                        </Contain3>
                    </Grid3>
                    <Grid4><Gridimage/></Grid4>
                </Grid2>
                <Grid5>
                    <G5>Aliquam erat volutpat.</G5>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </Grid5>
                <Contain6>
                    <Grid6>
                        <Image1/>
                        <Image2/>
                        <Image3/>
                    </Grid6>
                </Contain6>
                <Con2>
                    <Con3>
                        <G5>Lorem Ipsum</G5>
                        <G5>Lorem Ipsum</G5>
                        <G5>Lorem Ipsum</G5>
                    </Con3>
                </Con2>
            
        </Body>    
         )
     }
 }
 