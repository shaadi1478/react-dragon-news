import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LefrtSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useEffect, useState } from "react";
import Newss from "../news/Newss";

const Home = () => {
    const [news, setNews] = useState([]);
    const [newsLength, setNewsLength] = useState(2)
    useEffect(()=>{
        fetch('news.json')
        .then(ref => ref.json())
        .then(data => setNews(data))
    },[])
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-4xl">Dragon News Home: {news.length}</h2>
          {
            news.slice(0, newsLength).map(newDetails => <Newss key={newDetails.id} newDetails={newDetails}></Newss>)
          }
          <div className="text-center mt-4">
            <button onClick={() => setNewsLength()} className="btn btn-active">Show More News</button>
          </div>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
