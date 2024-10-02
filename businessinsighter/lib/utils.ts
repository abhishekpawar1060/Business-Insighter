import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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