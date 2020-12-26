import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Builder from './components/Builder';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(${(props) => props.bgOverlay});
    z-index: 0;
  }
`;

function App() {
  const [backgroundColorOrImage, setBackgroundColorOrImage] = useState('color');
  const [backgroundColor, setBackgroundColor] = useState();
  const [backgroundImg, setBackgroundImg] = useState();
  const [activeOverlay, setActiveOverlay] = useState();
  const [overlayColor, setOverlayColor] = useState();
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('80,80,80,1');
  const [fontSize, setFontSize] = useState('16');
  const [spacing, setSpacing] = useState('0');
  const [linkColor, setLinkColor] = useState('#ffffff');

  useEffect(() => {
    if (activeOverlay === true) {
      setOverlayColor(overlayColor);
    } else {
      setOverlayColor('transparent');
    }
  }, [activeOverlay, overlayColor]);

  const saveBackgroundColor = (e) => {
    setBackgroundColor(e);
  };

  const saveImg = (img) => {
    setBackgroundImg(img);
  };

  const setOverlay = (e) => {
    setActiveOverlay(e);
  };

  const setBackgroundRadio = (e) => {
    setBackgroundColorOrImage(e);
  };

  const saveOverlayColor = (e) => {
    if (e) {
      setOverlayColor(
        JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
      );
    }
  };

  const saveNavbarBackgroundColor = (e) => {
    if (e) {
      setNavbarBackgroundColor(
        JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
      );
    }
  };

  const saveFontSize = (e) => {
    setFontSize(e);
  };

  const saveSpacing = (e) => {
    setSpacing(e);
  };

  const saveLinkColor = (e) => {
    setLinkColor(e);
  };

  const alternateBg = {
    background:
      backgroundColorOrImage === 'color' ? backgroundColor : `url(${backgroundImg}) no-repeat center center/cover`,
  };

  return (
    <Background bgOverlay={overlayColor} bgColorOrImage={backgroundColorOrImage} style={alternateBg}>
      <Navbar navBackgroundColor={navbarBackgroundColor} fontSize={fontSize} spacing={spacing} linkColor={linkColor} />
      <Builder
        saveImg={saveImg}
        setOverlay={setOverlay}
        saveBackgroundColor={saveBackgroundColor}
        saveOverlayColor={saveOverlayColor}
        setBackgroundRadio={setBackgroundRadio}
        saveNavbarBackgroundColor={saveNavbarBackgroundColor}
        saveFontSize={saveFontSize}
        saveSpacing={saveSpacing}
        saveLinkColor={saveLinkColor}
      />
    </Background>
  );
}

export default App;
