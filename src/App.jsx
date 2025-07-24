import Header from "./components/Header"
import Home from "./components/Home"
import Space from "./components/Space"
import SpaceCard from "./components/SpaceCard"


function App() {

  const SpaceContent = [
    {
   image: "https://images.pexels.com/photos/5546845/pexels-photo-5546845.jpeg",
   title:"Rent Offices",
   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum possimus dolorum aut ipsa perferendis, veritatis eius! Aperiam fugit modi aliquam omnis voluptatem recusandae laborum sed harum! Velit, in est?",
   link:"Learn More"  
  },
  {
   image:"https://images.pexels.com/photos/2067634/pexels-photo-2067634.jpeg",
   title:"Coffee Shop",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum possimus dolorum aut ipsa perferendis, veritatis eius! Aperiam fugit modi aliquam omnis voluptatem recusandae laborum sed harum! Velit, in est?",
    link:"Learn More"  
  },
     {
   image:"https://images.pexels.com/photos/59321/pexels-photo-59321.jpeg",
   title:"Private Event Space",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum possimus dolorum aut ipsa perferendis, veritatis eius! Aperiam fugit modi aliquam omnis voluptatem recusandae laborum sed harum! Velit, in est?",
    link:"Learn More"  

  }

]
 

  return (
    <>
      <div className="">
       <Header/>
       <Home/>
       <Space/> 
       <div className="flex gap-8 ">
     {SpaceContent.map((content,index)=>(<SpaceCard  images={content.image} title={content.title} description = {content.description} link = {content.link}  key={index}/>))}
       </div>
      </div>
    </>
  )
}

export default App
