import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <ul className="bg-violet-900 flex gap-18 p-5 mb-5 rounded-t-xl justify-around">
                <Link to={"/"}><li className="text-white border-b-2 border-b-black cursor-pointer">List of Students</li></Link>
                <Link to={"/favourite"}><li className="text-white border-b-2 border-b-black cursor-pointer">Favourite Students</li></Link>
            </ul>
        </>
    )
}
export default Navbar