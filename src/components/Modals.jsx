import React from 'react'
import { matchRoutes } from 'react-router-dom'
function IncompleteModal({ count, total }) {
	return (
		<>
			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Oh no!</h3>
					<p className="py-4">It appears that you have not completed the entire form!
						<br></br>
						<br></br>
						<span className="text-xl font-extrabold">You have done <span className="text-error">{count}</span><span className="text-primary"> / {total}</span></span>
						<br></br>
						<br></br>
						Please complete the form and try again</p>
					<div className="modal-action justify-center m-0">
						<label htmlFor="my-modal" className="btn btn-primary">Okay</label>
					</div>
				</div>
			</div>
		</>
	)
}

function CompleteModal({ onClickHandler }) {
	let inputRef = React.useRef(null)
	const validation = (string) => {
		// validate email
		// use this regex /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.edu$/

		if (string.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.edu$/) && string.length > 0) {
			return true
		}  return false
	}
	return (
		<>
			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box  flex-col flex gap-5">
					<label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<h3 className="font-bold text-3xl ">One last step!</h3>
					<p>Please enter your edu email address for verification</p>
					<div className="form-control">
						<input type="email" placeholder="Email" className="input input-bordered rounded-box" ref={inputRef} />
					</div>
					<p>Do not worry, this information will not be shared with anyone else, as it is only used to verify the number of people who have completed this specific form.
					</p>
					<div className="modal-action justify-center m-0">
						<label htmlFor="my-modal" className="btn btn-primary" onClick={(e) => {
							if (validation(inputRef.current.value)) {
								onClickHandler(inputRef.current.value)
								inputRef.current.className = "input input-bordered rounded-box" 
							} else { 
								e.preventDefault()
								e.stopPropagation() 
								inputRef.current.className = "input input-bordered rounded-box input-error"
							}
						}
						}>SUBMIT</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default function Modals(count, total, onClickHandler) {
	if (count === total) {
		return <CompleteModal onClickHandler={onClickHandler} />
	} else {
		return <IncompleteModal count={count} total={total} />
	}
}