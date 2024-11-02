import Article from "@/app/features/Article";
import { TODAYS_EDITION_DATA, TODAYS_EDITION_TITLE } from "@/app/utils/Constants";
import { articleInterface } from "@/app/utils/Interfaces";

const TodaysEdition=()=>
{
    const articlesData:articleInterface[]=TODAYS_EDITION_DATA
    return (
            <>
            <div className="flex flex-col items-center">
                <span className="font-bold text-[30px] leading-[51px] font-serif">{TODAYS_EDITION_TITLE}</span>
                <div>
                    {
                        articlesData.map((article:articleInterface )=>
                            {
                                return (
                                    //using the reusable component for rendering all the articles
                                    <Article articleData={article}></Article>
                                )
                            })
                    }
                </div>
                <button className="w-[335px] h-[40px] border mx-auto block text-white px-[14px] my-6 bg-[rgba(108,122,246,1)]">VIEW ALL STORIES</button>
            </div>
            </>
    )
}

export default TodaysEdition