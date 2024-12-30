"use client"

const page = () => {

    const handleRegister = async ( event ) => {
        event.preventDefault()
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            image: event.target.photo.value,
            type: event.target.type.value,
        }
        const res = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method : 'POST',
            body : JSON.stringify(newUser),
            headers : {
                'Content-type' : 'application/json'
            }
        }) 

        console.log(res)
    }
    return (
        <div className='flex gap-24 mx-auto my-5 items-center justify-center mt-24 max-w-4xl'>
            <p className="text-3xl text-slate-600 font-semibold"> sign up with email and password </p>
            <div className="w-full">
                <form  onSubmit={handleRegister} className='space-y-4'>
                    <div className="flex space-y-2 flex-col">
                        <label >Name</label>
                        <input type="text" placeholder='Enter Your name' className='outline-none border rounded-md p-3 text-slate-800' name="name" />
                    </div>
                    <div className="flex flex-col">
                        <label >Email</label>
                        <input type="text" placeholder='Enter Your email' className='outline-none border rounded-md p-3 text-slate-800' name="email" />
                    </div>
                    <div className="flex flex-col">
                        Password
                        <input type="password" placeholder='Enter Your password' className='outline-none border rounded-md p-3 text-slate-800' name="password" />
                    </div>
                    <div className="flex flex-col">
                        image 
                        <input type="text" placeholder='Enter Your photo url' className='outline-none border rounded-md p-3 text-slate-800' name="photo" />
                    </div>
                    <div className="flex flex-col">
                        Type 
                        <select name="type" className='outline-none border rounded-md p-3 text-slate-800'>
                            <option value="admin">Admin</option>
                            <option value="modarator">Modarator</option>
                            <option value="user">user</option>
                        </select>
                    </div>
                    <input className="w-full p-3 bg-green-900 rounded-lg text-white" type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    );
};

export default page;