import { Observer } from "rxjs"

export class Observer4 implements Observer<number> {
   next(data:number){
    console.log(data+ '  4th way')
   }
   error(error:string){
    console.log(error)
   }
   complete(){
    console.log('complete done 4th way')
   }
}