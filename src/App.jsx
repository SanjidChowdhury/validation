import { useState } from 'react'
import React from 'react'
import './App.css'
import Form from './components/Form'
import Modals from './components/Modals'
import { Routes, Route, useParams } from 'react-router-dom'
import axios from 'axios'

function App() {
	const [total, setTotal] = useState(0) 
	const [count, setCount] = useState(0)

	let { id } = useParams()

	const URL = 'https://parseapi.back4app.com/functions/'
	const APP_ID = 'jC9jpd60cvjpqWXgYpKNoDeO7UWs2JLjXoHltHhk'
	const API_KEY = 'haIsK7DbTNlOw5n823jMaYHMQwPjJaJSa6GQ6Mfj'

	// const POST_URL = 'https://cors-everywhere.herokuapp.com/https://validation-backend-imei.vercel.app'

	const formRef = React.useRef('null')
 
	const countHandler = () => { 
		setCount(count + 1)
	}

	const submitData = (email) => {

		//use formref and make formData
		let formData = new FormData(formRef.current)
		let values = [...formData.values()]

		let data = {
			id, values, email
		}

		const headers = {
			'Content-Type': 'application/json', 
			'X-Parse-Application-Id': APP_ID,
			'X-Parse-REST-API-Key': API_KEY,
		}

		axios.post(`${URL}save`, data, {
			headers: headers
		}).then(res => {

			alert('Thank You! Form submitted successfully')
			console.log(res)

		}).catch(err => {

			alert('Form submission failed.' + err.message)
			console.log(err)
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
				url_info={{ URL, APP_ID, API_KEY }}
				formRef={formRef}
				id={id}
			/>

			{Modals(count, total, submitData)}
		</>
	)
}

export default App
