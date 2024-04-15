import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardImg from "../../../assets/1.png";
import cardImg2 from "../../../assets/2.png";
import cardImg3 from "../../../assets/3.png";
import moment from 'moment';
import { FaShoppingBag } from "react-icons/fa";



const LefrtSideNav = () => {
  const [cateGories, setCateGories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((ref) => ref.json())
      .then((data) => setCateGories(data));
  }, []);
  return (
    <div>
      <div className="space-y-7">
        <h2 className="text-3xl">All CateGories</h2>
        {cateGories.map((cateGories) => (
          <Link
            className="block ml-4 text-xl font-semibold"
            key={cateGories.id}
            to={`/categories/${cateGories.id}`}
          >
            {cateGories.name}
          </Link>
        ))}
      </div>
      {/*card */}
      <div className="card card-compact bg-base-100 mt-7">
        <figure>
          <img
            src={cardImg}
            alt="news"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup!</h2>
         <span className="font-semibold flex gap-5">Sports: <p className="flex gap-5 items-center text-gray-400"> <FaShoppingBag />
         {moment().format("MMM,ddd, yyyy")}</p></span>
        </div>
      </div>
      <div className="card card-compact bg-base-100 mt-7">
        <figure>
          <img
            src={cardImg2}
            alt="news"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup!</h2>
         <span className="font-semibold flex gap-5">Sports: <p className="flex gap-5 items-center text-gray-400"> <FaShoppingBag />
         {moment().format("MMM,ddd, yyyy")}</p></span>
        </div>
      </div>
      <div className="card card-compact bg-base-100 mt-7">
        <figure>
          <img
            src={cardImg3}
            alt="news"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup!</h2>
         <span className="font-semibold flex gap-5">Sports: <p className="flex gap-5 items-center text-gray-400"> <FaShoppingBag />
         {moment().format("MMM,ddd, yyyy")}</p></span>
        </div>
      </div>
    </div>
  );
};

export default LefrtSideNav;
