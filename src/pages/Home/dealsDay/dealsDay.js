import './dealsDay.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Program from "../../../components/Program/program"

export default function DealsDay(){
    const Programs =[   
        {id:1,img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-5.png",ProgramCategory:"fitnesse",titleProgram:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:2,img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",ProgramCategory:"fitnesse",titleProgram:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:3,img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",ProgramCategory:"fitnesse",titleProgram:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:4,img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",ProgramCategory:"fitnesse",titleProgram:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
    ];
    return(
        <div className='container-deals'>
            <div className='NavDeals'> 
                <h3 className='tetlePro'>Deals Of The Day</h3>
                <Button className='btnBanner'><span>All Deals</span><ArrowForwardIcon className='iconBtnBanner'/></Button>
            </div>
            <div className='content-deals'>
                {
                   Programs.map((program)=>(
                        <Program key={program.id} image={program.img} ProgramCategory={program.ProgramCategory} titleProgram={program.titleProgram} ByWho={program.ByWho} />
                   )) 
                }
            </div>
        </div>
    );
}