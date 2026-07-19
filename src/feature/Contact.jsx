import UserContext from "../utils/userCOntext"
import { useContext } from "react"

export const Contact = () => {
    const data = useContext(UserContext);
    return <h1>Contact Me : {data.loggedInUser}</h1>
}