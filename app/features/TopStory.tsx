import Image from "next/image"
import authorPhoto from '../../public/images/Author-avatar.png'
import { topStoryPropsInterface } from "../utils/Interfaces"

const TopStory=(props:topStoryPropsInterface)=>
{
    const {heading,title,editorName,comments,imagePath} =props.story
    const index=props.index
    return (
        <div className="w-[280px] h-[263px] min-w-[250px] flex-shrink-0 p-4  space-y-1 bg-white flex flex-row">
            <div className="mr-2 mt-7 text-[30px] text-[rgba(161,161,161,1)] font-semibold"> 
                {index+1}
            </div>
            <div>
                <span className="text-green-400 font-bold text-[12px] my-1">{heading}</span>
                <img src={imagePath} alt="editionPhoto" className="w-[254px] h-[128px] object-fill my-1"></img>
                <span className="text-[13px] font-bold font-sans my-1">{title}</span>
                <div className="flex flex-row justify-between">
                    <div className="flex items-center"> 
                            <Image  src={authorPhoto} alt="authorPhoto" height={22} width={22} className="mr-3"></Image>
                            <span className="text-[16px]">{editorName}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mx-2 border-l h-4 border-gray-300"></span>
                        <span className="ml-1 text-gray-500 text-[14px] ">{comments}</span>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default TopStory