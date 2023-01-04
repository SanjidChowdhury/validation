import React from 'react'

function Status({count, total}) {
	return (
		<div
			className={`shadow fixed -right-2 top-2  text-neutral rounded-box rounded-l-full rounded-r-none 
			${count === total ? "bg-primary" : 'bg-warning'}
			`}
		>
			<div className="stat py-2 px-3  ">
				<div className={`stat-value text-2xl font-bold`}>{count}/<span>{total}</span></div>
			</div>
		</div>
	)
}

export default Status