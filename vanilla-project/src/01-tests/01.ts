
 export const add = (a:number, b:number) => {
    return (a+b);
 }

 export const mult = (a:number, b:number) => {
    return (a*b);
 }

 export const splittingIntoWords = (sentence: string) => {
    let words = sentence.toLowerCase().split(' ')
     return words.filter(word => {
         if(word === " ") return false
         if(word === "") return false
         if(word ==="!") return false
         else return true
     })
         .map (word => word
             .replace(",", "")
             .replace("!", "")
             .replace("?", "")
         )
 }
