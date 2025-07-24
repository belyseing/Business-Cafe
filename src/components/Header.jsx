import { RiDashboardLine } from "react-icons/ri";

function Header (){


    
    return(
       <div className="flex justify-between p-12">
          <RiDashboardLine className="text-3xl text-green-700 ml-36"/>
           <h1 className="font-bold text-xl mr-auto">Business <span className="text-green-700">Cafe</span></h1>
          <nav>
            <ul className="text-black flex flex-cols gap-16 text-sm font-bold mr-36">
                <li><a href="Home.jsx" className="hover:text-green-900">Home</a></li>
                <li><a href="Space.jsx" className="hover:text-green-900">Space</a></li>
                <li><a href="#About.jsx" className="hover:text-green-900">About</a></li>
                <li><a href="#Contact.jsx" className="hover:text-green-900">Contact</a></li>
            </ul>
          </nav>
       </div>
    )
}


export default Header;