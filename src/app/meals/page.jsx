"use client"
import Meals from "@/components/Meals";



const MealPage = () => {
    
    return (
        <div className="p-12">
            <h1 className="text-2xl my-3 text-red-300 font-semibold">Chose your Meals</h1>
            <p className="my-3">Choose meals of you choice by searching ......</p>
            <Meals></Meals>
        </div>
    );
};

export default MealPage;