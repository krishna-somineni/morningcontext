import TopStory from "@/app/features/TopStory";
import { NEWS_LETTERS_DATA, TOP_STORIES_TITLE } from "@/app/utils/Constants"
import { articleInterface } from "@/app/utils/Interfaces";

const TopStories=()=>
{
    const topStoriesData:articleInterface[]=NEWS_LETTERS_DATA
    return(
    <div >
            <div className="flex justify-center ">
                <span className="font-bold text-[30px] leading-[51px] font-serif mt-10">{TOP_STORIES_TITLE}</span>
            </div>
            <div className="flex overflow-x-auto space-x-4 p-4 lg:mx-28">
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