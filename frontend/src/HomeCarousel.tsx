import './App.css'

const data = [
    {
        title: "Read about the new presidents and matrons of 8 temples — from Alaska to Brazil",
        img: "/img/temple.png",
        subline: "Learn about the new presidents and matrons of the Anchorage Alaska, Belém Brazil, Birmingham Alabama, Gilbert Arizona, Oakland California, Reno Nevada, Santiago Chile and Spokane Washington temples."
    },

    {
        title: "New York Mets Spanish radio producer credits self-reliance class",
        img: "/img/guy.png",
        subline: "Brian Munguia says he would not have fulfilled a childhood dream without the Find a Better Job course through his stake."

    },
    {
        title: "Behind the scenes of general conference: The staging crew",
        img: "/img/stage.png",
        subline: "Thousands of helping hands at the Conference Center put together what is seen every six months. In this video from The Liahona, see what the staging crew does to prepare for general conference."
    }

]



function HomeCarousel() {
return (
<>
<h1>I am workong on the carousle</h1>



<div className="w-3.4 m-auto">
    <div className='mt-20'>
        {data.map((d)=>
            <div>
            <div>
                <img src={d.img} alt="IMAGE HERE" />
            </div>
            
            <div>
                <h3>{d.title}</h3>
                <p>{d.subline}</p>
            </div>
            </div>
        )}
        
    </div>
</div>
</>
);
}

export default HomeCarousel;
