import { useState } from "react";

const InputForm = (props) => {
	const [input, setInput] = useState({
		name:'',
		age:''
	})
	const submitHandler = (event) => {
		event.preventDefault();
		props.onSubmit(input);
		setInput({
			name:'',
			age:''
		});
	}
	return (
		<form onSubmit={submitHandler}>
			<div style={{display:"inline-block"}}>
				<span>Name</span>
				<input type="text" value={input.name} onChange={(event)=>{
					setInput((prev)=>{return {...prev,name:event.target.value}})
				}}/>
			</div>
			<div style={{display:"inline-block"}}>
				<span>Age</span>
				<input type="text" value={input.age} onChange={(event)=>{
					setInput((prev)=>{return {...prev,age:event.target.value}})
				}}/ >
			</div>
			<button>submit</button>
		</form>
	)
}

export default InputForm;