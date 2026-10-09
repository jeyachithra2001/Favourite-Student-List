import { StudentContext } from "../context/studentContext"
import { useContext } from "react"

function StudentNameList() {
    const { studentList, favStudent, setFavStudent } = useContext(StudentContext)

    const addToFavourite = (student) => {
        const alreadyAdded = favStudent.some(function (studentItem) {
           return studentItem.id === student.id
        })
        if (!alreadyAdded) {
            setFavStudent([...favStudent, student])
        }
    }
    return (
        <>
            {
                studentList.map(function (item) {
                    return (
                        <div key={item.id} className="flex gap-18 items-center mb-2 p-1 px-5 justify-around">
                            <p className="w-28">{item.id}. {item.name}</p>
                            <button onClick={() => addToFavourite(item)}
                                disabled={favStudent.some((student) => student.id === item.id)} className="text-black bg-violet-500 rounded-xl px-2 py-1 shadow-xl cursor-pointer disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed">❤️ Add to Favourite</button>
                        </div>
                    )
                })
            }

        </>
    )
}
export default StudentNameList