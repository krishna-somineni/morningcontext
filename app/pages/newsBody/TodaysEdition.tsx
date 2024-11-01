import Article from "@/app/features/Article";
import { TODAYS_EDITION_DATA } from "@/app/utils/Constants";

interface Article {
    heading: string;
    title: string;
    description: string;
    editorName: string;
    timeToRead: string;
    comments: string;    
}

const TodaysEdition=()=>
{
    const articlesData:Article[]=TODAYS_EDITION_DATA
    return (
            <>
            <div className="flex flex-col items-center">
            <span className="font-bold text-[30px] leading-[51px] font-serif">Today's Edition</span>
            <div>
                {
                    articlesData.map((article:Article )=>
                        {
                            return (
                                //using the reusable component for rendering all the articles
                                <Article articleData={article}></Article>
                            )
                        })
                }
            </div>
            </div>
            </>
    )
}

export default TodaysEdition