import './footer.css';


export default function Footer() {
    const Infos = [
        {
            title: "Company",
            items: [{url:'/home',title:"About Us"}, {url:'/home',title:"Services"}, {url:'/home',title:"Contact Us"}, {url:'/home',title:"Careers"}, {url:'/home',title:"Blog"}, {url:'/home',title:"Press"}, {url:'/home',title:"FAQs"}]
        },
        {
            title: "Account",
            items: [{url:'/home',title:"About Us"}, {url:'/home',title:"Services"}, {url:'/home',title:"Contact Us"}, {url:'/home',title:"Careers"}, {url:'/home',title:"Blog"}, {url:'/home',title:"Press"}, {url:'/home',title:"FAQs"}]
        },
        {
            title: "Popular",
            items: [{url:'/home',title:"About Us"}, {url:'/home',title:"Services"}, {url:'/home',title:"Contact Us"}, {url:'/home',title:"Careers"}, {url:'/home',title:"Blog"}, {url:'/home',title:"Press"}, {url:'/home',title:"FAQs"}]
        }
    ];

    return (
        <div className='footer'>
            <div className='row-footer'>
                <div className='info-row'>
                    <div className='info-img'>
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg' alt='img' />
                    </div>
                    <div className='info-centent'>
                        <ul>
                            <li><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-location.svg' alt='address'/><strong>Address: </strong><span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                            <li><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-contact.svg' alt='call'/><strong>Call Us: </strong><span>(+91) - 540-025-124553</span></li>
                            <li><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-email-2.svg' alt='email'/><strong>Email: </strong><span>sale@Nest.com</span></li>
                            <li><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-clock.svg' alt='hours'/><strong>Hours: </strong><span>10:00 - 18:00, Mon - Sat</span></li>
                        </ul>
                    </div>
                </div>
                <div className='partie-row'>
                    {Infos.map((info, index) => (
                        <div key={index} className='partie'>
                            <h4>{info.title}</h4>
                            <ul>
                                {info.items.map((item, e) => (
                                    <li key={e}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <hr style={{opacity:0.5}}/>
            <div className='row-footer-bottom'>
                <div className='rights'>
                    <p>© 2022,<strong>Nest</strong>- HTML Ecommerce Template All rights reserved</p>
                </div>
                <div className='social'>
                    <div className='follow'>
                        <h6>Follow Us</h6>
                        <div className='social-media'>
                            <button><a href='https://www.facebook.com'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-facebook-white.svg' alt='facebook'/></a></button>
                            <button><a href='https://www.x.com'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-twitter-white.svg' alt='twitter'/></a></button>
                            <button><a href='https://www.instagram.com'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-instagram-white.svg' alt='instagram'/></a></button>
                            <button><a href='https://www.pinterest.com'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-pinterest-white.svg' alt='pinterest'/></a></button>
                            <button><a href='https://www.youtube.com'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-youtube-white.svg' alt='youtube'/></a></button>
                        </div>
                    </div>
                    <p>Up to 15% discount on your first subscribe</p>
                </div>
            </div>
        </div>
    );
}
