import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import { AiOutlineTwitter } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-family: monospace;
`;

const Title = styled.h1`
  color: #00ff00;
  font-size: 24px;
  margin-top: 16px;
  text-align: left;
  margin-left: 16px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 60vw;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1vh;
`;

const Button = styled.button`
  background-color: #00ff00;
  color: #000;
  font-size: 18px;
  padding: 11px 19px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  margin-left: 8px;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  width: 100vw;
`;

const TwitterLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #00ff00;
  margin: 0 16px;
`;

const Handle = styled.span`
  color: #00ff00;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Courier New', Courier, monospace;
`;

const TwitterBird = styled(AiOutlineTwitter)`
  font-size: 24px;
`;

const TwitterButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00ff00;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 8px;
  margin-left: 8px;
`;

const App = () => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    setShowDescription(true);
  }, []);

  const handleTypingComplete = () => {
    // Handle completion logic here
  };

  return (
    <Container>
      <DescriptionContainer>
        <Title>Goblin Capital</Title>
        {showDescription && (
          <Description>
            <span>&gt; </span>
            <Typewriter
              words={['Goblin Capital: Unleashing Chaos in Crypto. We are a collective of crypto-native traders and engineers, specializing in MEV, arbitrage and on chain strategies. We shitpost, invest and consult. Want to work with us? Reach out.']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={40}
              delaySpeed={1000}
              onLoopDone={handleTypingComplete}
            />
          </Description>
        )}
        <ButtonContainer>
          <TwitterButton href={"/portfolio"}>Portfolio</TwitterButton>
          <TwitterButton href={"/writing"}>Writings</TwitterButton>
          <TwitterButton href={"https://twitter.com/GoblinCap_"} target="_blank" rel="noopener noreferrer">
            Contact Us
          </TwitterButton>
        </ButtonContainer>
        {showDescription && (
        <LinkContainer>
          <TwitterLink href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
            <TwitterBird src="twitter-bird.png" alt="Twitter Bird" />
            <Handle>@liquiditygoblin</Handle>
          </TwitterLink>
          <TwitterLink href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
            <TwitterBird src="twitter-bird.png" alt="Twitter Bird" />
            <Handle>@blockbandit_</Handle>
          </TwitterLink>
          <TwitterLink href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
            <TwitterBird src="twitter-bird.png" alt="Twitter Bird" />
            <Handle>@GryptoGoon</Handle>
          </TwitterLink>
        </LinkContainer>
      )}
      </DescriptionContainer>
    </Container>
  );
};

export default App;
