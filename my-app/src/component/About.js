import { Link, useNavigate } from "react-router-dom";
function About() {
    const naviget =  useNavigate()
    const chirag = () => {
        naviget("/")

    }
    return(
        <>
            <button onClick={chirag}>onClick</button>
            <h1>About Page</h1>
            <Link to="/User/Chirag">Chirag</Link>
            <Link to="/User/Rahul">Rahul</Link>
        </>
    )
}
export default About;