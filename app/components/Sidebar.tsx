import useMainContext from "../Helpers/useMain";
import Link from "next/link";
const Sidebar = () => {
    const { toggleSidebar, setToggleSidebar,theme} = useMainContext();

    return (
        <>
            {toggleSidebar ? (
                <div className={` z-50 fixed  w-64 ${theme ?'bg-white' : 'bg-black'} h-screen text-white mt-10 `}>
                    <div className="px-4 py-6">
                        
                        <Link
                            href="/"
                            className={`${theme?'text-black':'text-white'} block border-b border-gray-500  text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300`}>
                            
                          Item1
                        </Link>
                        <Link
                            href="/"
                            className={`${theme?'text-black':'text-white'} block border-b border-gray-500  text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300`}>
                            
                          Item2
                        </Link>
                        <Link
                            href="/"
                            className={`${theme?'text-black':'text-white'} block border-b border-gray-500  text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300`}>
                            
                          Item3
                        </Link>
                        <Link
                            href="/"
                            className={`${theme?'text-black':'text-white'} block border-b border-gray-500  text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300`}>
                            
                          Item4
                        </Link>
                        <Link
                            href="/"
                            className={`${theme?'text-black':'text-white'} block border-b border-gray-500  text-xl font-semibold py-2 mt-6 hover:text-yellow-500 transition duration-300`}>
                            
                          Item5
                        </Link>
                       
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Sidebar;