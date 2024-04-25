import './feature.css';

export default function Feature(){
    const Cards =[{img:'https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg',bigTitle:"Best prices & offers",smallTitle:"Orders $50 or more"},{img:'https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg',bigTitle:"Free delivery",smallTitle:"24/7 amazing services"},{img:'https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg',bigTitle:"Great daily deal",smallTitle:"When you sign up"},{img:'https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg',bigTitle:"Wide assortment",smallTitle:"Mega Discounts"},{img:'https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg',bigTitle:"Easy returns",smallTitle:"Within 30 days"}]
    return(
        <div className='featureCards'>
            {
                Cards.map((card,index) => (
                        <div key={index} className='card'>
                            <div className='card-img'>
                                <img src={card.img} alt={`icon-${index+1}`} />
                            </div>
                            <div className='content-card'>
                                <div className='titles'>
                                    <h3>{card.bigTitle}</h3>
                                    <p>{card.smallTitle}</p>
                                </div>
                            </div>
                        </div>

                ))
            }
        </div>
    );
}