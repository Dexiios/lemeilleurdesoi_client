import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
  ArrowForward,
  ArrowRight
} from './HeroElements'
import heroVideo from '../../videos/Reflection Of Tree At Night.mp4'

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='accueil'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={heroVideo} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Bienvenue,</HeroH1>
        <HeroP>Le Meilleur de Soi, relaxation et bien être</HeroP>
        <HeroBtnWrapper>
          <Button
            to='services'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Voir les séances {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
