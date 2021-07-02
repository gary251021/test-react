import User from "../user/user";
const Users = (props) => {
    return <div>
        {
            props.users.map((user)=>{
                return <User key={user.key} name={user.name} age={user.age}/>
            })
        }
    </div>
}


export default Users