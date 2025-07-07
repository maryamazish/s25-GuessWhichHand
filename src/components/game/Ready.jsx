import Title from "../general/title";
import Image from "../general/image";
import Button from "../general/button";


const Ready = ({ onReady , name}) => {
  const logo = "/images/logo.png";
  return (
    <>
      <Title text="Guess which hand" />
      {/* <img src={Logo} alt="Logo" width="500px" className="logo" /> */}
      <Image  src={logo} alt="Logo" width="500px" className="logo"/>
      {/* <button onClick={() => onReady(true)} className="button">Start Game</button> */}
      <Button name="Start Game" type="" onAction={() => onReady(true)} />
    </>
  );
};
export default Ready;
