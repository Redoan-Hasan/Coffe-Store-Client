import headerPhoto from '../../public/images/more/15.jpg'
import logo from '../../public/images/more/logo1.png'
const Header = () => {
    return (
        <div>
            <div className='relative '>
                <img className='h-[100px] w-full' src={headerPhoto} alt="" />
                <div className='absolute inset-0 flex justify-center items-center gap-4'>
                    <img className='h-20' src={logo} alt="" />
                    <h1 className='font-rancho text-white text-3xl md:text-4xl lg:text-6xl font-normal'>Espresso Emporium</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;