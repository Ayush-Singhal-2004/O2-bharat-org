import './App.css'
import CardTile from './components/CardTile'
import Form from './components/Form'

function App() {
	return (
		<div className='h-screen max-w-screen'>
			<header className='h-[38%] flex items-center justify-center max-sm:h-[30%]'>
				<p className='text-white text-8xl max-sm:text-5xl'>Coming soon...</p>
			</header>
			<div className='pt-10 flex items-center justify-center gap-12 
			max-sm:flex-col'>
				<CardTile />
				<CardTile />
				<CardTile />
				<CardTile />
			</div>
			<div className='flex items-center justify-center py-10'>
				<Form />
			</div>
		</div>
	)
}

export default App
