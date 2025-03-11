import React from "react";
import { Button } from "./ui/button";

const HeaderProducts = () => {
  return (
    <div className="">
        <div className="flex flex-col h-full bg-background mt-10">
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-pink-100 text-pink-800 text-sm font-medium">
                car sales
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                Wide choice of vehicles
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
             our company offers a wide range of vehicles for both private and professional customers, because dealers make everyone happy.  
            </p>
            <Button
                size={"lg"}
                className="bg-foreground text-black hover:bg-foreground/80 p-6 rounded-full"
            >
                Contact Us
            </Button>
            </div>
        </div>
    </div>
  );
};

export default HeaderProducts;
