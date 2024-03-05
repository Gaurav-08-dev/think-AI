import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function handleError(error:unknown){
  
  if(error instanceof Error){
throw new Error(`Error: ${error.message}`)
  }
  else if(typeof error === 'string'){
    throw new Error(`Error: ${error}`)
  }
  else {
    throw new Error(`Unknown error: ${JSON.stringify(error)}`)
  }
}