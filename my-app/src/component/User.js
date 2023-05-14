import { useParams } from "react-router-dom";

const User = () => {
    const params = useParams();
    const {name} =params;
    console.log(name);
    return (
        <>
            <h1>this is user {name}'s' Page</h1>
        </>
    )
}

export default User;
