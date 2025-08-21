import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(166, 120, 125, 0.7);
  }

  div {
    position: relative;
    color: #eee;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

// Título do Hero
const HeroTitle = styled.h1`
  font-family: 'Gloock', serif;
  font-size: 48px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <div>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </div>
    </HeroContainer>
  )
}

export default Hero
