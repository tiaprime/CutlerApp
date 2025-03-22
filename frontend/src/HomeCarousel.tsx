import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
    {
        title: "Read about the new presidents and matrons of 8 temples — from Alaska to Brazil",
        img: "/img/temple.png",
        subline: "Learn about the new presidents and matrons of the Anchorage Alaska, Belém Brazil, Birmingham Alabama, Gilbert Arizona, Oakland California, Reno Nevada, Santiago Chile and Spokane Washington temples."
        ,link: "https://www.thechurchnews.com/leaders/2025/03/21/new-temple-presidents-and-matrons-alaska-to-brazil/"
    },

    {
        title: "New York Mets Spanish radio producer credits self-reliance class",
        img: "/img/guy.png",
        subline: "Brian Munguia says he would not have fulfilled a childhood dream without the Find a Better Job course through his stake."
        ,link:"https://www.thechurchnews.com/members/2025/03/20/self-reliance-class-new-york-mets-spanish-radio-producer-brian-munguia/"

    },
    {
        title: "Behind the scenes of general conference: The staging crew",
        img: "/img/stage.png",
        subline: "Thousands of helping hands at the Conference Center put together what is seen every six months. In this video from The Liahona, see what the staging crew does to prepare for general conference."
        ,link:"https://www.thechurchnews.com/general-conference/2025/03/20/behind-the-scenes-conference-center-staging-crew/"
    }

]



function HomeCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
        };




return (
<>
<h1>I am workong on the carousle</h1>



<div className="col-md-9 mx-auto" style={{ width: '34%' }}>
    <div className="mt-5">

        <Slider {...settings}>

        {data.map((d)=>(
            <div className="bg-white" >
            <div >
                <img src={d.img} alt="IMAGE HERE" className="" style={{ width: '50%' }}/>
            </div>
            
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-3">
                <h3>{d.title}</h3>
                <p>{d.subline}</p>
                <a href={d.link}>Read More</a>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            </div>
        ))}
        </Slider>
    </div>
</div>
</>
);
}

export default HomeCarousel;
