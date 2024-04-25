import './topProduct.css';


export default function TopProduct({title,children}){
    return(
        <div className='container-trending'>
            <div className='title-trending'>
                <h3>{title}</h3>
            </div>
            <div className='content-trending'>
                {children}
            </div>
        </div>
    );
}