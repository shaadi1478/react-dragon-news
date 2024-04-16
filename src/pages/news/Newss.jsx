import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Newss = ({ newDetails }) => {
  const { title, author, image_url, details, _id } = newDetails;
  return (
    <div className="">
      <div className="card bg-base-100 mt-7 rounded-none border">
        <div className="flex gap-2 p-4 items-center bg-[#F3F3F3] ">
          <img className="h-10 w-10 rounded-full" src={author.img} alt="" />
          <div>
            <p>{author.name}</p>
            <span>{author.published_date}</span>
          </div>
          <div className="ml-64 ">
            <div className="flex gap-4">
              <FaRegBookmark />
              <FaShareAlt />
            </div>
          </div>
        </div>
       <div className="p-4">
       <div className="card-body -mb-4 -mt-4">
          <h2 className="card-title ">{title}</h2>
        </div>
        <figure className="mb-8">
          <img src={image_url} />
        </figure>
        {
          details.length > 200 ?
          <p>{details.slice(0,200)} <Link 
          to={`/newDetails/${_id}`}
          className="text-blue-600 font-bold">Read More...</Link></p>
          : <p >{details}</p>
        }
       </div>
      </div>
    </div>
  );
};

export default Newss;

