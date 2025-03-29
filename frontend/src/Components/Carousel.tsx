import '../App.css'
// import '../bootstrap/dist/css/bootstrap.min.css';
// import Slider from "../react-slick";
// import "../slick-carousel/slick/slick.css";
// import "../slick-carousel/slick/slick-theme.css";
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

const Carousel = () => {
return(
    <>

    <p>the page shows up</p>
    <img src='frontend/src/assets/200w.gif' alt='HELP MEEEEEE (image ALT)'/>
    <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzgyenRxYTY5ejVjNmpnODg2eTg2N3JwMnYxb21sYmszNmNrMmR0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8lgqAbycBjosxjfi9k/giphy.gif' />
    
    </>)
};

export default Carousel;














//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 30000,
//         arrows: false,
//     };

//     return (
//         <div className="d-flex justify-content-center">
//             <div className="mt-3" style={{ width: "33%", minWidth: "280px" }}>
//                 <Slider {...settings}>
//                     {data.map((d, index) => (
//                         <div key={index} className="bg-white p-2 rounded shadow-sm text-center">
//                             <img 
//                                 src={d.img} 
//                                 alt="IMAGE HERE" 
//                                 className="img-fluid mx-auto d-block"
//                                 style={{ width: "90%", maxHeight: "200px", objectFit: "cover" }} 
//                             />
//                             <div className="p-2">
//                                 <h6 className="fw-bold mb-1">{d.title}</h6>
//                                 <p className="text-muted small">{d.subline}</p>
//                                 <a href={d.link} className="btn btn-primary btn-sm w-100 mt-2">Read More</a>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default MyCarousel;

// function HomeCarousel() {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
//         };




// return (
// <>
// <h1>Recent church news</h1>



// <div className="col-md-9 mx-auto" style={{ width: '34%' }}>
//     <div className="mt-5">

//         <Slider {...settings}>

//         {data.map((d)=>(
//             <div className="bg-white" >
//             <div >
//                 <img src={d.img} alt="IMAGE HERE" className="" style={{ width: '50%' }}/>
//             </div>
            
//             <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-3">
//                 <h3>{d.title}</h3>
//                 <p>{d.subline}</p>
//                 <a href={d.link}>Read More</a>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//             </div>
//             </div>
//         ))}
//         </Slider>
//     </div>
// </div>
// </>
// );
// }

// export default HomeCarousel;