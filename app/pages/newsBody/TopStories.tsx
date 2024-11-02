import TopStory from "@/app/features/TopStory";
import { NEWS_LETTERS_DATA } from "@/app/utils/Constants"


const TopStories=()=>
{
    const topStoriesData=NEWS_LETTERS_DATA
    return(
    <div >
            <div className="flex justify-center ">
                <span className="font-bold text-[30px] leading-[51px] font-serif mt-10">Top Stories</span>
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