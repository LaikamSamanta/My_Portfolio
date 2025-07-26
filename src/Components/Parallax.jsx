import './Parallax.css';
import { generateBoxShadows } from './generateStars';

const StarField = () => {
  const shadowsSmall = generateBoxShadows(100);
  const shadowsMedium = generateBoxShadows(60);
  const shadowsBig = generateBoxShadows(30);

  return (
    <div className="starfield">
      <div id="stars" style={{ boxShadow: shadowsSmall }} />
      <div id="stars2" style={{ boxShadow: shadowsMedium }} />
      <div id="stars3" style={{ boxShadow: shadowsBig }} />
    </div>
  );
};

export default StarField;