import styled from 'styled-components';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>As melhores vagas para tecnologia, design e artes visuais.</HeroTitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
