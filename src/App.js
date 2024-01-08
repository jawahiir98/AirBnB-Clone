import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import Data from './Data'



export default function(){
    
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })        
    
     
    return (
        <div>
            <Navbar />
            <Main />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}