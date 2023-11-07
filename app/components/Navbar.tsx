'use client'
import useMain from "../Helpers/useMain"
import Sidebar from "./Sidebar";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Link from "next/link";
import useWindowSize from "../Hooks/useWindow";
const Navbar = () => {
  const {width} = useWindowSize()
  const isSmallScreen = width < 800;
    const {toggleSidebar,setToggleSidebar,theme,setTheme} = useMain()
    if(isSmallScreen)
    {

    
  return (
    <>
    <Sidebar/>
    <div className={`fixed w-full ${theme ? 'bg-white':'bg-black'} min-h-content t z-50 `}>
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-2xl">
          {
            !toggleSidebar ?
            
          (<button className={`${theme ?'text-black':'text-white'}`} onClick={()=>setToggleSidebar(!toggleSidebar)} >
            <span>☰</span>
            </button>):
            (<button className={`${theme ?'text-black':'text-white'}`} onClick={()=>setToggleSidebar(!toggleSidebar)} >
            <span>✕</span>  
          </button>)
}
        </div>
        <a href="/" className="text-yellow-500 text-2xl font-bold">
          <span>AddTodo</span>
        </a>
        <button className="text-black">
          <span>🔍</span>
        </button>
        <button className={`${theme ?'text-black':'text-white'}`}  onClick={()=>setTheme(!theme)}>
          {!theme?<span ><DarkModeIcon/></span>:<span><LightModeIcon/></span>}
        </button>
        <div className='flex'>
          <span>👤</span>
          <Link href="/SignIn" className={`${theme ?'text-black':'text-white'} font-semibold`}>
            <span>SignIn</span>
          </Link>
        </div>
      </div>
    </div>;
    </>)
    }
    else
    {
      return (
        <>
      <Sidebar/>
        <div className={`fixed w-full ${theme ? 'bg-white':'bg-black'} min-h-content t z-50 `}>
          <div className="flex justify-between items-center px-4 py-2">
            <div className="text-2xl">
              {
                !toggleSidebar ?
                
              (<button className={`${theme ?'text-black':'text-white'}`} onClick={()=>setToggleSidebar(!toggleSidebar)} >
                <span>☰</span>
                </button>):
                (<button className={`${theme ?'text-black':'text-white'}`} onClick={()=>setToggleSidebar(!toggleSidebar)} >
                <span>✕</span>  
              </button>)
    }
            </div>
            <a href="/" className="text-yellow-500 text-2xl font-bold">
              <span>AddTodo</span>
            </a>
            <button className="text-black">
              <span>🔍</span>
            </button>
            <button className={`${theme ?'text-black':'text-white'}`}  onClick={()=>setTheme(!theme)}>
              {!theme?<span ><DarkModeIcon/></span>:<span><LightModeIcon/></span>}
            </button>
            <div className='flex'>
              <span>👤</span>
              <Link href="/SignIn" className={`${theme ?'text-black':'text-white'} font-semibold`}>
                <span>SignIn</span>
              </Link>
            </div>
          </div>
        </div>;
        </>)
    }
    
};
export default Navbar