import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="container py-4">
      {/* search  */}
      <div className="flex items-center w-60 ">
        <Input className="rounded-e-none" />
        <Button className="rounded-s-none border-none outline-none h-[38px] bg-orange-500 hover:bg-orange-600">
          <Search />
        </Button>
      </div>
      {/* product */}
      <section className="p-4 ring-1 ring-border mt-4 rounded-md bg-slate-100/50">
        {/* section header  */}
        <div className="flex items-center justify-between py-4 pb-8 ">
          <div className="flex items-center gap-4">
            <TrendingUp />
            <h1 className="text-xl">Trending Now</h1>
          </div>
          <Button variant={"link"}>See All</Button>
        </div>
        {/* proudcts  */}
        <div className="grid grid-cols-5 gap-4">
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default page;
