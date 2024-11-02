const YesterdaysCard=(props :any)=>
{
    const {title,description,borderColor,background}=props.yesData
    return(
        <div className="p-4 m-4  border-l-4" style={{ borderLeftColor: borderColor , backgroundColor: background}}>
                <div className="font-bold mb-2">{title}</div>
                <div className="text-[16px]">{description}</div>
        </div>
    )
}
export default YesterdaysCard