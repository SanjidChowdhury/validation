import React from 'react'
import FormItem from './FormItem'
import Status from './Status'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

function Form({ handlers, count, setTotal, total, url, formRef, id }) { 
	// let { id } = useParams()

	const [data, setData] = useState([])
	const [options, setOptions] = useState([])
	const [loading, setLoading] = useState(true)

	React.useEffect(() => {
		setLoading(true)
		axios.get(`${url}/data?id=${id}`)
			.then(res => {
				setData(res.data)
				setTotal(res.data.length)  
			})

		axios.get(`${url}/choices`).then(res => {
			setOptions(res.data)
		})

	}, [total])

	React.useEffect(() => {
		if (data.length > 0) {
			setLoading(false)
		}

	}, [data])


	let renderData = data.map((item, index) => {
		index = index + 1
		return (
			<FormItem id={index} key={index} countHandler={handlers.countHandler} options={options}>
				{item}
			</FormItem>
		)
	})

	return (
		loading ? <Spinner /> :
			<>
				<form className='flex flex-col gap-10 w-full' ref={formRef} >
					{renderData}
					<label className='btn btn-primary' htmlFor="my-modal">Submit</label>
				</form>
				<Status count={count} total={total} />
			</>
	)
}

export default Form