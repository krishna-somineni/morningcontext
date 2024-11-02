import Article from "@/app/features/Article"
import { NEWS_LETTERS_DATA, NEWS_LETTER_SUB_TITLE, NEWS_LETTER_TITLE } from "@/app/utils/Constants"
import { articleInterface } from "@/app/utils/Interfaces"


const NewsLetters=()=>
{
    const newsLettersData :articleInterface[]=NEWS_LETTERS_DATA
    return(
        <div className="lg:mx-28">
            <div className="flex flex-col items-center">
                <span className="font-bold text-[30px] leading-[51px] font-serif mt-10 mb-4">{NEWS_LETTER_TITLE}</span>
                <span className="text-center text-[14px] font-normal px-10 font-serif">{NEWS_LETTER_SUB_TITLE}</span>
            </div>
            <div>
                {
                    newsLettersData.map((newsLetter:articleInterface)=>
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