import ExploreNewsLetter from "./ExploreNewsLetter"
import NewsCards from "./NewsCards"
import NewsLetters from "./NewsLetters"
import TodaysEdition from "./TodaysEdition"
import TopStories from "./TopStories"
import YesterdaysEdition from "./YesterdaysEdition"

const NewsBody=()=>
{
    return (
        < >
        <div className="bg-[rgba(255,249,241,1)] py-6">
            <div>
                {/* News Section */}
                <div>
                    <NewsCards />
                </div>
                
                {/* Editions - Stack on small screens, side-by-side on large screens */}
                <div className="flex flex-col lg:flex-row lg:space-x-6 lg:mx-28">
                    <div className="w-full lg:w-2/3">
                        <TodaysEdition />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <YesterdaysEdition />
                    </div>
                </div>
            </div>
        </div>

            {/* Separate container for Top Stories and Newsletters */}
        <div className="py-6">
                <div className="flex flex-col lg:flex-col lg:space-x-6 lg:mx-12 lg:items-center ">
                        <div className="w-full ">
                            <TopStories />
                        </div>
                        <div className="w-full lg:w-2/3 lg:mt-7">
                            <NewsLetters />
                        </div>
                </div>
                <div> 
                       <ExploreNewsLetter/>
                </div>
        </div>

        </>
    )
}

export default NewsBody