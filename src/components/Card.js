

import img1 from '../Images/Frame 2.png'
import img2 from '../Images/image 12.png'
import img3 from '../Images/mountain-bike 1.png'
import star from '../Images/star.png'

export default function()
{
    return(
        <div className='card'>
            <img src={img2} className='card--image' 
            alt=''
            />
            <div className='card--stats'>
                <img className='star' src={star}></img>
                <span>5.0</span>
                <span className='gray'>(6) .</span>
                <span className='gray'> USA </span>
            </div>
            <p>Life lessons with Katie Zeferes</p>
            <p> <span className='bold'>From $136</span> / person</p>
        </div>
    )
}