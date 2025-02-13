"use client";
import Accordian from "@/components/Accordian";
import Datafetching from "@/components/Api-fetch-pagination";
import { Aritra } from "@/components/Aritra";
import BasicForm from "@/components/Basic-form";
import Carousal from "@/components/Carousal";
import { ConditionDropdown } from "@/components/ConditionDropdown";
import Debouncing from "@/components/debouncing";
import DigitalClock from "@/components/Digital-clock";
import { Dropdown } from "@/components/Dropdown";
import { Fetchme } from "@/components/fetchme";
import File from "@/components/File";
import { HookCounter } from "@/components/Hook-Counter";
import InputAction from "@/components/InputAction";
import MortgageCalculator from "@/components/MortgageCalculator";
import { MultistepForm } from "@/components/MultiForm";
import ProgrssBar from "@/components/ProgrssBar";
import Rainbow from "@/components/Rainbow";
import { Stopwatch } from "@/components/stopwatch";
import Tab from "@/components/Tab";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Timer from "@/components/timer";
import Todo from "@/components/Todo";
import Togglemode from "@/components/toggle-mode";
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
import { ThemeContext } from "@/context/ThemeContext";
import { title } from "process";
import { useState } from "react";

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
  {
    title: "Basic Form",
    description: "Basic Form",
    component: <BasicForm />,
  },
  {
    title: "Rainbow",
    description: "Rainbow",
    component: <Rainbow />,
  },
  {
    title: "Carousal",
    description: "Carousal",
    component: <Carousal />,
  },
  {
    title: "Input Action",
    description: "Input Action",
    component: <InputAction />,
  },
  {
    title: "API",
    description: "API Fetch Pagination",
    component: <Fetchme />,
  },
  {
    title: "Timer",
    description: "Timer",
    component: <Timer />,
  },
  {
    title: "Stopwatch",
    description: "Stop Watch",
    component: <Stopwatch />,
  },
  {
    title: "Aritra",
    description: "Aritra",
    component: <Aritra />,
  },
  {
    title: "Toggle",
    description: "Toggle also stored in localstorage",
    component: <Togglemode />,
  },
  {
    title: "Counter",
    description: "Counter by hooks",
    component: <HookCounter />,
  },
  {
    title: "Debouncing",
    description: "method of debouncing",
    component: <Debouncing />,
  },
  {
    title: "Multi Step Form",
    description: "multi step form",
    component: <MultistepForm />,
  },
];

export default function Home() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main
        className={` w-full h-screen flex flex-col items-center justify-start gap-y-12 p-20   text-3xl font-medium tracking-tight ${
          theme === "light" ? "bg-lime-200/60" : "bg-slate-600/60"
        }`}
      >
        <h1>WELCOME</h1>
        <ThemeSwitcher />
        <div className=" w-full flex flex-wrap items-center justify-center gap-4 ">
          {content.map((item, index) => (
            <Drawer key={index}>
              <div className=" w-max flex items-center justify-between">
                <DrawerTrigger
                  className={` ${
                    theme === "light" ? "bg-gray-500" : " bg-sky-200"
                  }  p-2 rounded-lg text-black w-max `}
                >
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
    </ThemeContext.Provider>
  );
}
