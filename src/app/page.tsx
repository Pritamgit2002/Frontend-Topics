"use client";
import Accordian from "@/components/Accordian";
import Datafetching from "@/components/Api-fetch-pagination";
import { ConditionDropdown } from "@/components/ConditionDropdown";
import DigitalClock from "@/components/Digital-clock";
import { Dropdown } from "@/components/Dropdown";
import File from "@/components/File";
import MortgageCalculator from "@/components/MortgageCalculator";
import ProgrssBar from "@/components/ProgrssBar";
import Tab from "@/components/Tab";
import Todo from "@/components/Todo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { title } from "process";

const content = [
  {
    title: "Mortgage Calculator",
    description: "Calculate your mortgage payment",
    component: <MortgageCalculator />,
  },
  {
    title: "Tabs Content",
    description: "Tabs Content for multiple items.",
    component: <Tab />,
  },
  {
    title: "File Explorer",
    description: "File Explorer",
    component: <File />,
  },
  {
    title: "Todo List",
    description: "Todo List",
    component: <Todo />,
  },
  {
    title: "Dropdown",
    description: "Dropdown Lists of contry",
    component: <Dropdown />,
  },
  {
    title: "Conditional Dropdown",
    description: "Conditional Dropdown Lists of contry",
    component: <ConditionDropdown />,
  },
  {
    title: "Progress Bar",
    description: "Progress Bar",
    component: <ProgrssBar />,
  },
  {
    title: "API Fetch Pagination",
    description: "API Fetch Pagination",
    component: <Datafetching />,
  },
  {
    title: "Accordian",
    description: "Accordian",
    component: <Accordian defaultOpenIndex={1} />,
    //component: <Accordian />,
  },
  {
    title: "Digital Clock",
    description: "Digital Clock",
    component: <DigitalClock />,
  },
];

export default function Home() {
  return (
    <main className=" w-full h-screen flex flex-col items-center justify-start gap-y-12 p-20 bg-lime-200/60  text-3xl font-medium tracking-tight">
      <h1>WELCOME</h1>
      <div className=" w-full flex flex-wrap items-center justify-center gap-4 ">
        {content.map((item, index) => (
          <Drawer key={index}>
            <div className=" w-max flex items-center justify-between">
              <DrawerTrigger className=" bg-gray-500 p-2 rounded-lg text-black w-max ">
                {item.title}
              </DrawerTrigger>
            </div>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{item.title}</DrawerTitle>
                <DrawerDescription>{item.description}</DrawerDescription>
                {/* <MortgageCalculator /> */}
                {item.component}
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <button>Cancel</button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </main>
  );
}
