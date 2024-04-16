import './trending.css';
import TopProduct from '../topProduct/topProduct';

export default function Trending(){
    return(
        <div className='container-trending'>
            <TopProduct title="Top Selling"/>
            <TopProduct title="Trending Products"/>
            <TopProduct title="Recently added"/>
            <TopProduct title="Top Rated"/>
        </div>
    );
}