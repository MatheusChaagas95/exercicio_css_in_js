<<<<<<< HEAD
import styles from './Hero.module.css'

const Hero = () => (
  <form className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </form>
=======
import styled from 'styled-components'

const HeroSection = styled.section`
  background: #6c757d;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    color: #fff;
    font-size: 2rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 0 16px;
  }
`

const Hero = () => (
  <HeroSection>
    <h2>As melhores vagas para tecnologia, design e artes visuais.</h2>
  </HeroSection>
>>>>>>> 323d5d6 (commit organização final do código)
)

export default Hero
