import React, {  useState } from "react";
function StoreDatainLS() {
    // function getData() {
    //     const uname = document.getElementById("uname")
    //     console.log(uname.value);
    // }
    // const [items, setItem] = useState([]);
    // useEffect((e) => {
    //     localStorage.setItem('item', JSON.stringify(items));
    // });
    const localUser = JSON.parse(localStorage.getItem(stor)) || {};
    const [email, setEmail]= useState("");
    const [password, setPasseord] = useState("");
    let [stor, setstor]=useState(localUser);



    const submit = (e) =>{
        e.preventDefault()
        const allEntry = {
            email,
            password

        }
        // setstor([...stor,allEntry])
        // console.log(allEntry,"alllEntry");
        // localStorage.setItem("item", JSON.stringify(stor))


    }
    // console.log(stor); 

    return(
        <>
            {/* <input type="text" placeholder="Enter your name" value={items} onChange={(e) => setItem(e.target.value)} id="uname" /><br />
            <input type="number" placeholder="enter your age" /><br />
            <button onClick={() => setItem}>Submit</button> */}
            <div>
                <form action="" onSubmit={submit}>
                    <input type="text"  onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password"  onChange={(e)=> setPasseord(e.target.value)}/>

                    <button>click</button>

                </form>
            </div>
        </>
    )
}
export default StoreDatainLS;

// import { Container, Button, Form } from 'react-bootstrap';

// function BasicExample() {
//     return (
//         <Container>
//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </Container>
//     );
// }

// export default BasicExample;