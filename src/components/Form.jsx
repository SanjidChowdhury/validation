import React from 'react'
import FormItem from './FormItem'
import Status from './Status'
import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

function Form({ handlers, count, setTotal, total, url_info, formRef, id }) {
	// let { id } = useParams()

	const [data, setData] = useState([])
	const [options, setOptions] = useState([])
	const [loading, setLoading] = useState(true)

	React.useEffect(() => {
		setLoading(true)
		// axios post with headers
		const config = {
			headers: {
				'X-Parse-Application-Id': url_info.APP_ID,
				'X-Parse-REST-API-Key': url_info.API_KEY, 
			}
		}
		// post with headers
		axios.post(`${url_info.URL}/data?id=${id}`, {}, config).then(res => {
			setData(res.data.result.data)
			setOptions(res.data.result.choices) 
			setTotal(res.data.result.data.length) 
		}).catch(err => {
			console.log(err); 
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