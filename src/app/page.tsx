"use client";

import {ITEM_TABLE} from "@/app/itemTable";
import {useState} from "react";

const RANGE = 1000000;
const MIN = 1;

export default function Home() {
    const [currentItem,setCurrentItem] = useState('');
    const rangeCalc = () => {
        const a = ITEM_TABLE.reduce((acc, item) => {
            return acc + item.percentage;
        }, 0);
    }

    const calculate = () => {
        let a:any = 0;
        //1 ~ 1000;
        const random = Math.floor(Math.random() * (RANGE -1) ) + MIN;
        // 1~1000
        const res =  ITEM_TABLE.reduce((acc: any, item: any) => {

        }, 0);
    }

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className={'border-gray-200 border-2 p-2'} onClick={calculate}>
        input
      </button>
        {currentItem};
    </main>
  )
}
