import NewsCard from "@/app/features/NewsCard";
import { CARDS_ROWS_DATA } from "@/app/utils/Constants"
import { cardRow } from "@/app/utils/Interfaces";


const NewsCards=()=>
{
    const cardRowsData:cardRow[]=CARDS_ROWS_DATA
    return (
            <>
                <div className="flex overflow-x-auto space-x-4 p-4">
                {
                    // using the reusable component cardRow for all the newsCards
                    cardRowsData.map((card, index) => {
                    return (
                        <NewsCard key={index} card={card}></NewsCard>
                        );
                    })
                }
                </div>    
            </>
    )
}
export default NewsCards

