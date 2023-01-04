import React from 'react'
import Options from './Options'
import { useState } from 'react' 

function FormItem({ id, children, countHandler, options}) {

	const [valid, setValid] = useState('none')
	const [isClicked, setIsClicked] = useState(false)

	const validHandler = (isValid) => {
		setValid(isValid) 
		if (!isClicked) { 
			setIsClicked(true)
			countHandler()
		} 
	}

	return (
		<div
			className={`card ${valid === 'none' ? '' : valid === 'valid' ? 'outline outline-primary outline-1' : 'outline outline-error outline-1'}`}
		>

			<div
				className={`id ${valid === 'none' ? '' : valid === 'valid' ? 'bg-primary text-neutral' : 'bg-error text-neutral'}`}
			>
				{id}
			</div>
			<div className="card-body">
				{children}
				<Options id={id} onClickHandler={{validHandler: validHandler}} options = {options} /> 
			</div>
		</div>
	) 


}

export default FormItem