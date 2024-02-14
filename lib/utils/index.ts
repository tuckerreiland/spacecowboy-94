import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toKebabCase (string) {
  let kebab = ''
  let meat = ''
  for (let i = 0; i < string.length; i++){
    if(string.charAt(i)!==' '){
      meat = string.charAt(i)
      kebab = kebab + meat
    } else {
      kebab = kebab + '-'
    }
  }
  return kebab.toLowerCase()
}

export function toCamelCase (string) {
  let camel = ''
  for (let i=0; i<string.length; i++){
    if (string.charAt(i)!==' '){
      camel = camel + string.charAt(i)
    } else {
      camel = camel + ''
    }
  }
  camel = camel[0].toLowerCase()+camel.slice(1)
  return camel
}

export function formatDate (date, dateFormat) {
  // TODO: format based on the location
  return format(new Date(date), dateFormat?dateFormat:'yyyy-MM-dd')
}

export function formatCurrency (price, locale, currency) {
  return new Intl.NumberFormat(locale||'en-US', {
    style: 'currency',
    currency: currency||'USD',
  }).format(price)
}