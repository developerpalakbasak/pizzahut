"use client";

import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/cartContext";

const Page = () => {

   
     const { selectedFromCart } = useCart();
   console.log(selectedFromCart.length)

    const searchParams = useSearchParams(); // Use the new hook
    const responseData = searchParams.get("responseData"); // Retrieve the query parameter

    const data = responseData ? JSON.parse(responseData) : null; // Parse the data

    return (
        <div className="mt-24 flex flex-col gap-3 w-[90vw] md:w-[80vw] max-w-5xl mx-auto">
            
            {(data && selectedFromCart.length>0) ? (
<>
<h1>Data received</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre> 

</>

            ) : (
                <p>No Records Found.</p>
            )}
        </div>
    );
};

export default Page;
