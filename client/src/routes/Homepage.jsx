import CardTile from "../components/CardTile";
import { tileData } from "../json/tileData"

function Homepage() {
    return (
        <div className='h-screen max-w-screen'>
        <header className='h-[38%] flex items-center justify-center max-sm:h-[30%]'>
            <p className='text-white text-8xl max-sm:text-5xl'>Coming soon...</p>
        </header>
        <div className='grid grid-cols-3 gap-y-5 py-12 max-sm:grid-cols-1'>
            {
                tileData.map((tile, index) => (
                    <div className="flex items-center justify-center" key={index}>
                        <CardTile  
                        image={tile.image} 
                        title={tile.title} 
                        user={tile.user}/>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Homepage;