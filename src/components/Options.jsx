import React from 'react'

function Options({ id, onClickHandler, options}) {

	return (
		<div
			className={`options`}
		>
			<div className="flex flex-col gap-4 text-left" >
				{
					options.map((option, index) => {
						return (
							<label key={index} className="flex w-fit items-center gap-4">
								<input type="radio" name={`${id}`} className="radio-primary radio h-4 w-4" value={option} 
									onClick={() => {
										onClickHandler.validHandler('valid');
									}}
								/>
								<label>{option}</label>
							</label>
						)
					})
				}

				<label key={options.length} className="flex w-fit items-center gap-4">
					<input type="radio" name={`${id}-notValid`} className="radio-error radio h-4 w-4" value= 'Invalid'  
						onClick={() => {
							onClickHandler.validHandler('invalid')
						}}
					/>
					<label className='text-error'>This is not a valid Query</label>
				</label>
			</div>
		</div>

	)
}

export default Options