import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formpage from './routes/Formpage';
import Homepage from './routes/Homepage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/form/:user" element={<Formpage />} />
			</Routes>
		</BrowserRouter>	
	)
}

export default App
