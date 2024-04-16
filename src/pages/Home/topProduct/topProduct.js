import './topProduct.css';

export default function TopProduct({title}){
    return(
        <div className='container-trending'>
            <div className='title-trending'>
                <h3>{title}</h3>
            </div>
            <div className='content-trending'>
                
            </div>
        </div>
    );
}