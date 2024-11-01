
const NewsCard=(props:any)=>
{
    const {time,description}=props.card
    // destructuring the data of cardRow
    return (
        <div className=" w-1/3 min-w-[250px] flex-shrink-0 p-4 flex-col space-y-1 bg-white">
          <h1 className="text-gray-400">{time}</h1>
          <p className="text-[13px] font-bold" style={{ color: 'rgba(41, 41, 41, 1)' }}>{description}</p>
        </div>
      );
}

export default NewsCard