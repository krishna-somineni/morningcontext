import Image from "next/image"
import editionPhoto from '../../public/images/todaysEdition.jpg'
import authorPhoto from '../../public/images/Author-avatar.png'

const Article=(props:any)=>
{
    const {heading,title,description,editorName,timeToRead,comments,displayDescription,displayImage,titleTextSize,displayTimeToRead,headerColor} =props.articleData
    return(
        <div className="flex flex-col mx-4 my-6">
            <span className="font-bold text-[12px] my-1" style={{color:headerColor}}>{heading}</span>

             {/* conditinaly rendering the image based on displayImage property */}
            { displayImage && <Image src={editionPhoto} alt="editionPhoto" className="w-full h-full object-cover my-1"></Image>}
            <span className="font-bold font-sans my-1" style={{fontSize:titleTextSize}}>{title}</span>

             {/* conditinaly rendering the description based on displayDescription property */}
            {displayDescription &&<span className="my-1 text-[14px]" >{description}</span>}

            <div className="flex flex-row justify-between">
                <div className="flex items-center"> 
                        <Image  src={authorPhoto} alt="authorPhoto" height={32} width={32} className="mr-3"></Image>
                        <span>{editorName}</span>
                </div>
                <div className="flex items-center"> 
                    {/* conditinaly rendering the timeToRead based on displayTimeToRead property */}
                    {displayTimeToRead && <span className="text-gray-400">{timeToRead}</span>}
                    <span className="mx-2 border-l h-4 border-gray-300"></span>
                    <span className="ml-1 text-gray-500 text-[14px] ">{comments}(comments)</span>
                </div>

            </div>   



        </div>
    )
}

export default Article