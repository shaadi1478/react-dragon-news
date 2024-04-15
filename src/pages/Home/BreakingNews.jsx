import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex items-center ">
      <button className="btn btn-active rounded-none text-xl btn-secondary">Latest </button>
      <Marquee className="bg-[#e2e2e2] p-3 text-black" pauseOnHover={true}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
