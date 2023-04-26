import { FC } from "react";
import { useForm } from "react-hook-form";


type PropsType = {
	type: string
	name: string
	register: any
}

const Input:FC<PropsType> = ({type, name, register}) => {
	return (
		<>
			<input
				type={type}
				placeholder={name}
				{...register(`${name}`, { required: true })}
			/>
		</>
	)
}

export default Input