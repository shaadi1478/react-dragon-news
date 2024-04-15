import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LefrtSideNav = () => {
    const [cateGories, setCateGories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(ref => ref.json())
        .then(data => setCateGories(data))
    },[])
    return (
        <div className="space-y-7">
            <h2 className="text-3xl">All CateGories</h2>
            {
                cateGories.map(cateGories => <Link 
                    className="block ml-4 text-xl font-semibold"
                    key={cateGories.id}
                    to={`/categories/${cateGories.id}`}
                    >{cateGories.name}
                    </Link>)
            }
        </div>
    );
};

export default LefrtSideNav;