import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
	  <React.StrictMode>
		<Routes>
			<Route>
				<Route path='/validation/' element={<div>Welcome</div>}/>
				<Route path="/validation/form/:id" element={<App/>} />
				<Route path="/*" element={<div>404 Not found</div>}></Route>
			</Route>
		</Routes>
	  </React.StrictMode> 
</BrowserRouter>
)
