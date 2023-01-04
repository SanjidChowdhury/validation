import { useState } from 'react'
import React from 'react'
import './App.css'
import Form from './components/Form'
import Modals from './components/Modals'
import { Routes, Route, useParams } from 'react-router-dom'
import axios from 'axios'

function App() {
	const [total, setTotal] = useState(25)
	const [count, setCount] = useState(0) 
	const [success, setSuccess] = useState(false)

	let { id } = useParams()

	const URL = 'http://localhost:3000'

	const formRef = React.useRef('null')

	const countHandler = () => {
		setCount(count + 1)
	}

	const submitData = (email) => {

		//use formref and make formData
		let formData = new FormData(formRef.current)
		let values = [...formData.values()]

		axios.post(`${URL}/data`, {
			id, values, email
		}).then(res => {
			
			alert('Thank You! Form submitted successfully')

		}).catch(err => {
		
			alert('Form submission failed. You have filled this form up previously')
		
		})

	}

	return (
		<>
			<Form handlers={
				{ countHandler }
			}
				count={count}
				setTotal={setTotal}
				total={total}
				url={URL}
				formRef={formRef}
				id={id}
			/>

			{Modals(count, total, submitData)}
		</>
	)
}

export default App
