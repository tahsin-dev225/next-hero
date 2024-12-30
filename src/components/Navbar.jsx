"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const session = useSession()
    // console.log(pathName)
    console.log(session)

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
        {
            title: 'dashboard',
            path : '/dashboard'
        },
    ]

    if(pathName.includes('dashboard')){
        return <div className="bg-green-400 ">
            dashboard nav
            <Link href="/" className="">  home</Link>
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
            {
                session?.status === 'authenticated' ? 
                <button onClick={()=> signOut()} className="">Logout</button>
                :
                <div className="">
                    <Link href={'/api/auth/signin'} className="px-5 mx-3 py-2 bg-white shadow-2xl rounded-lg text-gray-900">sign in</Link>
                    <Link href={'/api/auth/signup'} className="px-5 py-2 bg-white shadow-2xl rounded-lg text-gray-900">sign up</Link>
                </div>
            }
            {
                session?.data?.user?.name && <div className="">
                    <p className="">{session?.data?.user?.name}</p>
                    <p className="">{session?.data?.user?.type}</p>
                </div>
            }
            {   
                session?.data?.user?.image  && <div className="size-10 bg-cover rounded-full bg-transparent">
                    <Image className="w-full h-full rounded-full" src={session?.data?.user?.image} height={100} width={100} alt={session?.data?.user?.name}></Image>
                </div>
            }
        </nav>
        
    );
};

export default Navbar;