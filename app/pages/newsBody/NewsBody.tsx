import NewsCards from "./NewsCards"
import NewsLetters from "./NewsLetters"
import TodaysEdition from "./TodaysEdition"
import TopStories from "./TopStories"
import YesterdaysEdition from "./YesterdaysEdition"

const NewsBody=()=>
{
    return (
        < >
        <div className="bg-[rgba(255,249,241,1)]">
            <NewsCards />
            <TodaysEdition />
            <YesterdaysEdition/>
        </div>
        <div>
            <TopStories/>
            <NewsLetters/>
            <YesterdaysEdition/>
        </div>

        </>
    )
}

export default NewsBody