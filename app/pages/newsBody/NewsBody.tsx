import NewsCards from "./NewsCards"
import TodaysEdition from "./TodaysEdition"

const NewsBody=()=>
{
    return (
        < >
      <div className="bg-[rgba(255,249,241,1)]">
            <NewsCards />
            <TodaysEdition />
            <button className="w-[335px] h-[40px] border mx-auto block text-[rgba(30,27,75,1)] px-[14px] my-6">VIEW ALL STORIES</button>
            <TodaysEdition />
        </div>

        </>
    )
}

export default NewsBody