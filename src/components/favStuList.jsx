import { useContext } from "react"
import { StudentContext } from "../context/studentContext"

function FavStudentList() {
    const { favStudent, setFavStudent } = useContext(StudentContext)
    const handleRemove = (removeid) => {
        const filteredFavList = favStudent.filter(function(student){
            if(student.id === removeid){
                return false
            }
            else{
                return true
            }
        })
        setFavStudent(filteredFavList)
    }
    return (
        <>
            {
                favStudent.map(function (item, index) {
                    return (
                        <div key={item.id} className="flex gap-18 items-center mb-2 p-1 px-5 justify-around">
                            <p className="w-28">{index + 1}. {item.name}</p>
                            <button onClick={()=>handleRemove(item.id)} className="bg-red-500 text-white rounded-xl px-2 py-1 cursor-pointer">Remove</button>
                        </div>
                    )
                })
            }
            {
                favStudent.length === 0 && <p className="text-center py-28 text-gray-700">No Favourite Students yet. Add students to your Favourite List!!</p>
            }
        </>
    )
}
export default FavStudentList