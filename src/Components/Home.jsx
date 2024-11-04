import banner from '../../public/images/more/3.png'
import icon1 from '../../public/images/icons/1.png'
import icon2 from '../../public/images/icons/2.png'
import icon3 from '../../public/images/icons/3.png'
import icon4 from '../../public/images/icons/4.png'
import { Link, useLoaderData } from 'react-router-dom'
import Coffee from './Coffee'
import { useState } from 'react'

const Home = () => {
    const coffees = useLoaderData()
    console.log(coffees);
    const [currentCoffees,setCurrentCoffees]=useState(coffees)
    console.log(currentCoffees);
    return (
        <div>
            <div className='relative '>
                    <img className='h-[calc(100vh-100px)] w-full' src={banner} alt="" />
                <div className='absolute top-[20%] left-0  text-center md:text-center lg:text-left  md:top-[30%] lg:top-[40%] md:left-0 lg:left-[50%]'>
                    <h1 className='font-rancho text-3xl md:text-4xl lg:text-6xl font-normal text-white'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='py-6 text-base text-white font-normal leading-5 md:leading-8 lg:leading-8'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className=' btn py-[9px] px-[22px] text-black text-2xl font-normal font-rancho bg-[#E3B577]'>Learn More</button>
                </div>
            </div>
            <div className=' bg-[#ECEAE3]'>
                <div className='flex flex-col md:flex-row lg:flex-row gap-9 max-w-screen-xl mx-auto py-6 md:py-12 lg:py-14 px-3 text-center md:text-left lg:text-left'>
                    <div className='flex flex-col  items-center md:items-start lg:items-start gap-4 '>
                        <img className='h-[70px] w-[70px]' src={icon1} alt="" />
                        <h1 className='text-[#331A15] font-rancho text-2xl md:text-3xl lg:text-4xl font-normal'>Awesome Aroma</h1>
                        <p className='text-[#1B1A1A] font-raleway text-xs md:text-sm lg:text-base font-normal leading-6'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='flex flex-col items-center md:items-start lg:items-start gap-4'>
                        <img className='h-[70px] w-[70px]' src={icon2} alt="" />
                        <h1 className='text-[#331A15] font-rancho text-2xl md:text-3xl lg:text-4xl font-normal'>High Quality</h1>
                        <p className='text-[#1B1A1A] font-raleway text-xs md:text-sm lg:text-base font-normal leading-6'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='flex flex-col items-center md:items-start lg:items-start gap-4'>
                        <img className='h-[70px] w-[70px]' src={icon3} alt="" />
                        <h1 className='text-[#331A15] font-rancho text-2xl md:text-3xl lg:text-4xl font-normal'>Pure Grades</h1>
                        <p className='text-[#1B1A1A] font-raleway text-xs md:text-sm lg:text-base font-normal leading-6'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='flex flex-col items-center md:items-start lg:items-start gap-4'>
                        <img className='h-[70px] w-[70px]' src={icon4} alt="" />
                        <h1 className='text-[#331A15] font-rancho text-2xl md:text-3xl lg:text-4xl font-normal'>Proper Roasting</h1>
                        <p className='text-[#1B1A1A] font-raleway text-xs md:text-sm lg:text-base font-normal leading-6'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <div className='text-center py-8 md:py-10 lg:py-12'>
                    <p className='text-[#1B1A1A] text-base md:text-xl lg:text-xl font-raleway font-normal '>--- Sip & Savor ---</p>
                    <h1 className='text-[#331A15] font-rancho text-3xl md:text-5xl lg:text-6xl font-normal py-3'>Our Popular Products</h1>
                    <Link to='/updateCoffee' className='btn bg-[#E3B577] hover:bg-[#E3B577] text-white font-rancho font-normal text-2xl border-2 border-[#331A15] w-fit'>
                    <span>Add Coffee</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
                        <path d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z" fill="#331A15"/>
                        </svg>
                    </span>
                    </Link>
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 w-full lg:grid-cols-2 pb-11'>
                    {
                        currentCoffees.map(coffee=><Coffee currentCoffees={currentCoffees} setCurrentCoffees={setCurrentCoffees} coffee={coffee} key={coffee._id}></Coffee>)
                    }
                </div>
            </div>  
        </div>
    );
};

export default Home;