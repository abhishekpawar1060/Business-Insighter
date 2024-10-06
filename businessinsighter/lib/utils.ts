import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { eachDayOfInterval, isSameDay } from "date-fns";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function convertAmountFromMiliunits(amount: number){
  return amount / 1000;
};

export function convertAmountToMiliunits(amount: number){
  return Math.round(amount * 1000);
};


export function formatCurreny(value: number){
  // const finalValue = convertAmountFromMiliunits(value)
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(value);
};


export function calculatePercentageChange(
  current: number,
  previous: number,
){
  if(previous === 0){
    return previous === current ? 0 : 100;
  }

  return ((current - previous) / previous) * 100;
}


export function fillMissingDays(
  activeDays: {
    date: Date,
    income: number,
    expenses: number,
  }[],
  startDate: Date,
  endDate: Date,
){
  if(activeDays.length === 0){
    return [];
  }

  const allDay = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const transactionsByDay = allDay.map((day) => {
    const found = activeDays.find((d) => isSameDay(d.date, day));

    if(found){
      return found;
    }else{
      return{
        date: day,
        income: 0,
        expenses: 0,
      };
    }
  });

  return transactionsByDay;
}