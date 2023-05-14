import React, { useState } from "react";
function Profile() {
    const [loggedin, setloggedin] = useState(3);
    return(
        <>
            {
                loggedin==1?
                <h1>Profile Component</h1>
                :loggedin==2?
                <h1>User 2</h1>
                :<h1>Welcome Guest</h1>
            }
        </>
    )
}
export default Profile;