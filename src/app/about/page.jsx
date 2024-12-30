import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: "About",
    description: "about next page",
    keywords : ["about", "about page"]
};

const getTime = async () =>{
    // const res = await fetch("http://localhost:3000/time", {cache : 'no-store'});
    const res = await fetch("http://localhost:3000/time", {next : {revalidate : 5}});
    const data = await res.json();
    return data.currentTime;
}

const page = async () => {
    const session = await getServerSession(authOptions)
    console.log('abt',{session})
    const currentTime = await getTime()
    return (
        <div>
            <h2 className="text-2xl text-center"> About page</h2>
            <h2 className="text-3xl text-red-500 mt-12">Time : {currentTime}</h2>
        </div>
    );
};

export default page;