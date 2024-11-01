import Image from 'next/image'
import Battery from '../../public/images/Battery.jpg'
import Cellular from '../../public/images/Cellular.jpg'
import wifi from '../../public/images/Wifi.jpg'

const StatusBar=()=>
{
    return (
       <div className='flex m-3'>
              <div className='w-2/3'>  <span className='w-[26.62px] h-[10.36px] gap-0 opacity-1'>9:42</span></div>  
              <div className='flex w-1/3 justify-end'> 
                    <Image src={Cellular} alt="cellular" className='w-[17px] h-[10.67px] gap-0 opacity-1 mr-1'></Image>
                    <Image src={wifi} alt="wifi" className='w-[15.27px] h-[10.97px] gap-0 opacity-1 mr-1 ' ></Image>
                    <Image src={Battery} alt="battery" className='w-[24.33px] h-[11.33px] gap-0 opacity-1 mr-1'></Image>
              </div>
       </div>
    )
}
export default StatusBar