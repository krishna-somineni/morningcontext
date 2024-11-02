import YesterdaysCard from "@/app/features/YesterdaysCard";
import { YESTERDAYS_EDITION_DATA } from "@/app/utils/Constants"
interface yesterday {
    title: string;
    description: string;
    borderColor: string;
    background: string;
}

const YesterdaysEdition=()=>
{
    const yesterdaysEditionData :yesterday[]=YESTERDAYS_EDITION_DATA
    return (
        <div>
            {
                yesterdaysEditionData.map(card=>
                    {
                        return (
                            <YesterdaysCard yesData={card}></YesterdaysCard>
                        )
                    })
            }
        <button className="w-[335px] h-[40px] border mx-auto block text-white px-[14px] my-6 bg-[rgba(108,122,246,1)]">READ MORE</button>
        </div>
    )
}

export default YesterdaysEdition