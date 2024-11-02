import Article from "@/app/features/Article"
import { NEWS_LETTERS_DATA, TODAYS_EDITION_DATA } from "@/app/utils/Constants"


const NewsLetters=()=>
{
    const newsLettersData=NEWS_LETTERS_DATA
    return(
        <div className="lg:mx-28">
            <div className="flex flex-col items-center">
                <span className="font-bold text-[30px] leading-[51px] font-serif mt-10 mb-4">Latest Newsletters</span>
                <span className="text-center text-[14px] font-normal px-10 font-serif">A wealth of knowledge from India's top writers curated for you by The Morning Context.</span>
            </div>
            <div>
                {
                    newsLettersData.map(newsLetter=>
                        {
                            // using the article reusable compoents to render the newsLetter
                            return (
                                <Article  articleData={newsLetter}></Article>
                            )
                        }
                    )
                }
            </div>


        </div>
    )
}

export default NewsLetters