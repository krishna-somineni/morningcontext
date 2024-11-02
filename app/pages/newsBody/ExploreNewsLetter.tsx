import { EXPLORE_ON_PLATFORMS } from "@/app/utils/Constants"

const ExploreNewsLetter=()=>
{
    return (
        <div className="flex items-center my-28 flex-col mx-5">

            <span className="font-bold text-[24px] leading-[28.8px] font-sans mb-4">Explore newsletters on</span>
            <div className="flex  justify-center flex-wrap">
                {
                    EXPLORE_ON_PLATFORMS.map((platform,index)=>
                        {
                            return(
                                <button  key={index} className=" h-min-36px] w-min-[100px] border rounded-[40px] px-[16px] py-[10px] my-3 mx-[10px] text-[rgba(123,143,254,1)] border-[rgba(123,143,254,1)]"> {platform}</button>
                            )
                        })
                }
            </div>
            <span className="mt-4 w-full lg:w-80"><button className="bg-gradient-to-r w-full from-[#85F1C7] to-[#69B0F4] px-5 py-2 text-white font-bold cursor-pointer">SIGN UP TO SUBSCRIBE</button></span>
        </div>
    )
}
export default ExploreNewsLetter