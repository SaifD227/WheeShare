import image1 from "../../assets/bg-gradient-img (1).png";
import image2 from "../../assets/bg-gradient-img.png";
import { LoginFormDemo } from "../LoginForm";
const login = () => {
  return (
    <div className="relative h-screen bg-[#000000] overflow-hidden">
      <img src={image2} alt="Top gradient" className=" left-0 top-0 absolute" />

      <img
        src={image1}
        alt="Bottom gradient"
        className=" absolute  right-0  bottom-0"
      />
      <LoginFormDemo/>
    </div>
  );
}; 

export default login;
