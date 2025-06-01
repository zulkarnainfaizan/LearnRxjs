import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected title = 'LearnRxjs';
  postsArray=[
    {title:"Leela1",description:"Leela1 description1"},
    {title:"Leela2",description:"Leela2 description2"},
    {title:"Leela3",description:"Leela3 description3"}
  ]
  postArrayObservable$=from(this.postsArray);
   promise= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Resolve the promise. Sending Data")
      },3000)
   });
   promisObservable$= from(this.promise);

  constructor(){
    this.postArrayObservable$.subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log('Completed Done'),
    });
    this.promisObservable$.subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log('Completed Promise Done'),
    });
  }
  ngAfterViewInit(){
    fromEvent(document.getElementById('click-button')!,'click').subscribe({
  next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log('Completed Promise Done'),
    });
  }

}
