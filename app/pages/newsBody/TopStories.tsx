import TopStory from "@/app/features/TopStory";
import { TODAYS_EDITION_DATA } from "@/app/utils/Constants"
interface Article {
    heading: string;
    title: string;
    description: string;
    editorName: string;
    timeToRead: string;
    comments: string;    
}

const TopStories=()=>
{
    const topStoriesData:Article[]=TODAYS_EDITION_DATA
    return(
    <div >
            <div className="flex justify-center ">
                <span className="font-bold text-[30px] leading-[51px] font-serif mt-10">Top Stories</span>
            </div>
            <div className="flex overflow-x-auto space-x-4 p-4">
                {
                    topStoriesData.map((story,index)=>
                        {
                            return (
                                <TopStory story={story} index={index}></TopStory>
                            )
                        })
                }
            </div>
        </div>
    )
}
export default TopStories