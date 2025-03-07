"use client"

import Link from "next/link";

const Page = () => {


    return (
        <div className="mt-24 flex gap-3 w-[90vw] md:w-[80vw] max-w-5xl mx-auto">
            
            <h1>Order Placed successfully</h1>
            <Link className="px-3 py-1 rounded bg-primary hover:bg-secondary text-white hover:text-primary" href="/">Continue Shopping</Link>
        </div>
    );
};

export default Page;
