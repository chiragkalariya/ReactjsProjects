function Student(props) {
    return(
        <>
            <h1>{props.name}</h1> 
            <h1>{props.email}</h1> 
            <h4>{props.other.address}</h4> 
            <h4>{props.other.mobile}</h4> 
        </>
    )
}
export default Student;