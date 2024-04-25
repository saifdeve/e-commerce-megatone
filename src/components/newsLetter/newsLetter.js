import './newsLetter.css';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function NewsLetter(){
    return(
        <div className='newsLetter'>
            <div className='content-newsLetter'>
                <div className='titles-newsLetter'>
                    <h2>Stay home & get your daily<br/>needs from our shop</h2>
                    <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                </div>
                <div className='subscribe-newsLetter'>
                    <SendIcon className='iconNewletter'/>
                    <input type='email' placeholder='Your emaill address'/>
                    <Button className='btnNewletter'>Subscribe</Button>
                </div>
            </div>
            <div className='img-newsLetter'>
                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png' alt='img'/>
            </div>
        </div>
    );
}