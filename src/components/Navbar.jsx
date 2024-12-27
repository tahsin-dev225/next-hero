"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();
    // console.log(pathName)

    const links =[
        
        {
            title: 'Home',
            path : '/'
        },
        {
            title: 'posts',
            path : '/posts'
        },
        {
            title: 'meals',
            path : '/meals'
        },
        {
            title: 'about',
            path : '/about'
        },
        {
            title: 'gallery',
            path : '/gallery'
        },
    ]

    const  handler = ()=>{
        router.push('/login')
    }

    if(pathName.includes('dashboard')){
        return <div className="bg-green-400 ">
            dashboard nav
            <Link href="/" className="">    home</Link>
        </div>
    }

    return (
        <nav className="px-5 bg-emerald-200 text-white py-2 flex justify-between items-center">
            <h6 className="text-3xl font-medium text-yellow-700">Next Hero </h6>
            <ul className="flex gap-5">
            {
                links.map(link => <Link className={`${pathName === link.path ? "text-slate-700" : ""} `} key={link.path} href={link.path} >{link.title}</Link>)
            }
            </ul>
            <button onClick={handler} className="px-5 py-2 bg-white shadow-2xl rounded-lg text-gray-900">Login</button>
        </nav>
        
    );
};

export default Navbar;