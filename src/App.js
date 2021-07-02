import React from 'react';
import InputForm from "./component/inputForm/inputForm";
import Users from "./component/users/users"

import {useState} from "react";

function App() {
	const [allUser,setAllUser] = useState([]);
	const addItemHandler = (submitted) => {
		submitted = {...submitted, key: Math.random().toString()};
		setAllUser([...allUser,submitted]);

	}
	return (
		<div>
			<InputForm onSubmit={addItemHandler}/>
			<Users users={allUser}/>
		
		</div>
	);
}

export default App;
