import { createContext, useState } from "react";

export const StudentContext = createContext()

function StudentContextProvider({children}){
    const [studentList, setStudentList] = useState([
        {id:1, name:"Chithra"},
        {id:2, name:"Aravind"},
        {id:3, name:"Sandy"},
        {id:4, name:"Kalai"},
        {id:5, name:"Adhirai"},
        {id:7, name:"Jeya"},
        {id:8, name:"Mithun"},
        {id:9, name:"Suriya"},
        {id:10, name:"Vijay"},
        {id:11, name:"Kumar"},
        {id:12, name:"Angel"}
    ])

    const [favStudent, setFavStudent] = useState([])

    return(
        <StudentContext.Provider value = {{studentList, setStudentList, favStudent, setFavStudent}}>
            {children}
        </StudentContext.Provider>
    )
}

export {StudentContextProvider}