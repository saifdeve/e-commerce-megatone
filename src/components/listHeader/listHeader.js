import './listHeader.css';
import iconCompare from "../../assets/images/icon-compare.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import iconUser from "../../assets/images/icon-user.svg";

export default function listHeader(){
    const Lists =[{icon:iconCompare,item:"Compare",statue:1},{icon:iconHeart,item:"Wishlist",statue:0}];

    return(
        <>
            <ul className='itemsUlHeader' type='none'>
                
                {               
                    Lists.map((list) => (     
                        <li className='itemHeader'>
                            <span>
                                <img src={list.icon} alt='iconCompare'/>
                                <span className='numberStatue'>{list.statue}</span>
                                {list.item}
                            </span>               
                        </li>
                    ))
                    
                }
                <li className='itemHeader'>
                    <span><img src={iconUser} alt='iconCompare'/>Account</span>     
                </li>

            </ul>
        </>
    );
}