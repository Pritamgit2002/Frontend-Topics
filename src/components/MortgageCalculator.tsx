"use client";
import { useEffect, useState } from "react";
export default function MortgageCalculator() {
  const [loan, setLoan] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [term, setTerm] = useState<number>();
  const [monthlyMortage, setMonthlyMortage] = useState<number>();
  const [totalPayed, setTotalPayed] = useState<number>();
  const [totalInterestPaid, setTotalInterestPaid] = useState<
    number | undefined
  >();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Loan:", loan);
    console.log("Interest Rate:", interestRate);
    console.log("Term:", term);
    if (
      loan === undefined ||
      interestRate === undefined ||
      term === undefined
    ) {
      alert("Please enter values.");
      return;
    }
    if (
      isNaN(Number(loan)) ||
      isNaN(Number(interestRate)) ||
      isNaN(Number(term))
    ) {
      alert("Please enter valid numbers.");
      return;
    }

    const p = Number(loan);
    const i = Number(interestRate);
    const n = Number(term);

    const monthlyMortage =
      p * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));

    setMonthlyMortage(monthlyMortage);
    setTotalPayed(monthlyMortage * 12 * n);
    setTotalInterestPaid(p * i * n * 12);
  };
  return (
    <main className="h-max w-max flex flex-col items-center justify-start gap-y-20 p-24 bg-lime-200 ">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-y-3 ">
        <input
          type="text"
          placeholder="loan"
          onChange={(e) => setLoan(Number(e.target.value))}
          className=" w-80 p-2 rounded-lg border-2 border-gray-800 "
        />
        <input
          type="text"
          placeholder="interest rate"
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className=" w-80 p-2 rounded-lg border-2 border-gray-800 "
        />
        <input
          type="text"
          placeholder="term(yr)"
          onChange={(e) => setTerm(Number(e.target.value))}
          className=" w-80 p-2 rounded-lg border-2 border-gray-800 "
        />
        <button
          type="submit"
          className=" w-max mx-auto px-6 py-2 rounded-xl text-lg font-semibold text-white bg-pink-800 "
        >
          Calculate
        </button>
      </form>

      <div className="flex flex-col items-center justify-center w-96 h-max ">
        <h1 className="text-center text-4xl font-bold">Result</h1>
        <div className=" flex items-center justify-center gap-x-4 ">
          <span>Monthly mortgage payment: {monthlyMortage}</span>
        </div>
        <div className=" flex items-center justify-center gap-x-4 ">
          <span>Total payment: {totalPayed}</span>
        </div>
        <div className=" flex items-center justify-center gap-x-4 ">
          <span>Total Interest Paid: {totalInterestPaid}</span>
        </div>
      </div>
    </main>
  );
}
