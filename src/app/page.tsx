"use client";
import { ConditionDropdown } from "@/components/ConditionDropdown";
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
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-12 p-20 bg-lime-200/60  text-3xl font-medium tracking-tight">
      <h1>WELCOME</h1>
      <div className=" w-max flex items-center justify-center gap-x-4 ">
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
