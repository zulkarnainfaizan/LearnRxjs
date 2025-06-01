import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  imports: [],
  templateUrl: './new-observable.html',
  styleUrl: './new-observable.css'
})
export class NewObservable implements OnInit{
  ngOnInit(): void {
   const newObservable= new Observable<number>((observer)=>{
          let timer=0;
    for(let i=0;i<=5;i++){

      // interval()

   setTimeout(() => {
        observer.next(i);
   }, timer+=4000);
//error can be thrwon with below code and no further data is emitted
      //   if(i===4){
      //   observer.error("Unknown error on 4")
      // }
   
    }
    // observer.complete();
   });
   let observer={
    next:(data:number)=>console.log(data),
    error:(error:string)=>console.log(error),
    complete:()=>console.log("Observer completred")
   }
   newObservable.subscribe(observer);
  }
  

}
