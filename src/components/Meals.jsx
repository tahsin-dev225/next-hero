"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


const Meals = () => {
    const [search , setSearch] = useState('a');
    const [error , setError] = useState('');
    const [meals , setMeals] = useState([]);

    console.log(meals)

    const loadData = async () =>{
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            setMeals(data.meals)
            setError('')
        } catch (err) {
            setError("no data Found")
        }
    }

    const handler =(e) =>{
        setSearch(e.target.value)
    }


    useEffect(() => {
        loadData();
    },[]);

    return (
        <div className=" my-6 ">
            <input
             onChange={handler}
             type="text" placeholder="Search Meals"
             className="outline-none py-4 px-5 p-1 shadow-2xl border-t border-l bg-white  text-slate-800" />
            <button onClick={() => loadData()} className="bg-red-200 py-4 text-slate-500 px-5 shadow-2xl p-1 ">Search</button>
            <div className="mt-12 grid grid-cols-3 gap-8">
                {
                   meals.length > 0 && !error && meals?.map((meal) => 
                    <div key={meal.idMeal} className="border p-5 rounded hover:shadow-lg">
                        <Image src={meal.strMealThumb} width={400} height={400} alt="imge"></Image>
                        <h6 className="text-2xl font-semibold text-stone-900">{meal.strMeal}</h6>
                        <p className="text-slate-700">{meal.strInstructions}</p>
                    </div>
                    )
                }
                {
                    error && <h4 className="">No Data Found</h4>
                }
            </div>
        </div>
    );
};

export default Meals;