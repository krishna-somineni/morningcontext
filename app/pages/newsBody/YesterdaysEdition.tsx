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
            <div className="flex justify-between mx-5"> 
                <span className="text-[16px] font-normal tracking-widest font-serif text-[rgba(13,37,108,1)]">YESTERDAY</span>
                <span className="text-[rgba(41,41,41,0.5)] font-sans tracking-widest">April 12, 2022</span>
            </div>
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