import './archiveHeader.css';

import HomeIcon from '@mui/icons-material/Home';

export default function ArchiveHeader({title}){
    return(
        <div className='archiveHeader'>
            <h1>{title}</h1>
            <div className='pages'>
                <ul>
                    <li><a href='/home'><HomeIcon className='iconHome'/><span>Home</span></a></li>
                    <span>/</span>
                    <li>{title}</li>
                </ul>
            </div>
        </div>
    );
}