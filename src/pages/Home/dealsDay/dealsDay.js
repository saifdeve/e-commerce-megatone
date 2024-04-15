import './dealsDay.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Program from "../../../components/Program/program"

export default function DealsDay(){
    return(
        <div className='container-deals'>
            <div className='NavDeals'> 
                <h3 className='tetlePro'>Deals Of The Day</h3>
                <Button className='btnBanner'><span>All Deals</span><ArrowForwardIcon className='iconBtnBanner'/></Button>
            </div>
            <div>
                <Program/>
            </div>
        </div>
    );
}