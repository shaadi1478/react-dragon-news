import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone from "../../../assets/qZone1.png"
import qZone1 from "../../../assets/qZone2.png"
import qZone2 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-3xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login With GitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-bold mb-4">Find Us On</h2>
        <button className="btn btn-outline w-full justify-start rounded-none rounded-t-lg">
          <FaFacebook className="text-3xl text-[#3B599C] " />
          Facebook
        </button>
        <button className="btn btn-outline w-full justify-start rounded-none border-x">
          <FaTwitter  className="text-3xl text-[#58A7DE]" />
          Twitter
        </button>
        <button className="btn btn-outline w-full justify-start rounded-none rounded-b-lg">
          <FaInstagram className="text-3xl text-red-600" />
          Instagram
        </button>
      </div>
      {/* q zone*/}
      <div className="p-4 space-y-4 mb-6 bg-[#F3F3F3]">
        <h2 className="text-3xl font-bold">Q Zone</h2>
        <img src={qZone} alt="" />
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
