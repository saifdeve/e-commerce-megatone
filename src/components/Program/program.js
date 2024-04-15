import './program.css';

export default function Program(){
    return(
        <div className='card-program'>
            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-5.png' alt='img-1'/>
            <div className='program-detaill'>
                <div className='temp-program'>
                    <div className='temp'>
                        <span className='temp-number'>345</span>
                        <span className='temp-date'>Days</span>
                    </div>
                    <div className='temp'>
                        <span className='temp-number'>22</span>
                        <span className='temp-date'>Hours</span>
                    </div>
                    <div className='temp'>
                        <span className='temp-number'>45</span>
                        <span className='temp-date'>Mins</span>
                    </div>
                    <div className='temp'>
                        <span className='temp-number'>57</span>
                        <span className='temp-date'>Secs</span>
                    </div>
                </div>
                <div className='centent-program'>

                </div>
            </div>
        </div>
    );
}