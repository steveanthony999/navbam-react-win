import { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const NavbarLinks = ({ saveFontSize, saveSpacing, saveLinkColor }) => {
  const [fontSize, setFontSize] = useState(16);
  const [spacing, setSpacing] = useState(0);
  const [linkColor, setLinkColor] = useState('#ffffff');

  useEffect(() => {
    saveFontSize(fontSize);
    saveSpacing(spacing);
    saveLinkColor(linkColor);
  }, [saveFontSize, fontSize, saveSpacing, spacing, saveLinkColor, linkColor]);

  const handleFontSize = (e) => {
    setFontSize(e);
  };

  const handleSpacing = (e) => {
    setSpacing(e);
  };

  const handleColorChange = (e) => {
    setLinkColor(e.hex);
  };

  return (
    <div>
      <h2>Choose the font size of your nav links.</h2>
      <br />
      <hr />
      <br />
      <label>Font Size: {fontSize}px</label>
      <br />
      <br />
      <Slider min={10} max={20} step={1} dots value={fontSize} onChange={handleFontSize} />
      <br />
      <hr />
      <br />
      <h2>Choose the spacing between your nav links.</h2>
      <br />
      <hr />
      <br />
      <label>Spacing: {spacing}rem</label>
      <br />
      <br />
      <Slider min={0} max={8} step={1} dots value={spacing} onChange={handleSpacing} />
      <br />
      <hr />
      <br />
      <h2>Choose the color your nav links.</h2>
      <br />
      <hr />
      <br />
      <ChromePicker disableAlpha onChange={handleColorChange} color={linkColor} />
      <br />
      <br />
    </div>
  );
};

export default NavbarLinks;
