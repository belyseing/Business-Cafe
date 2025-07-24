const CardCard = ({images,title, description, link}) => {



    return(
        <div className="flex flex-col justify-center gap-2 w-100">
        <img src={images} alt="" className="w-full h-98"/>
        <div>
            
        </div>
        <h2 className="text-2xl font-bold text-primary-700 text-center">{title}</h2>
       
         <div className="p-0.5 bg-primary-700 w-20 ml-60"></div>
        <p className="w-100  text-start">{description}</p>
       
       
        <a className="text-primary-700  text-end font-bold" href="">{link}</a>
        </div>  
       
           
       
    )
}

export default CardCard;
