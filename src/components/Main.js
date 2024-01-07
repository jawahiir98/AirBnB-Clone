import bodyimg from '../Images/Group 77.png'

export default function(){
    return(
        <section className='hero'>
            <img src={bodyimg} className='img' alt='img'/>
            <h1 className='header-el'> Online Experiences</h1>
            <p className='header-text-el'> Join unique interactive
            activities led by one-of-a-kind hosts-all without leaving
            home.</p>
        </section>
    )
}