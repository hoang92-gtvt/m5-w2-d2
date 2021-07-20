import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  interval :any;


  constructor() { }

  ngOnInit(): void {
    this.loading();
    // this.loading2();
  }

  loading(){
    let interval = setInterval(() =>{
    this.progress = +this.progress+10;
      console.log("dang chay");
      console.log(this.progress);
      if(this.progress===100){
        clearInterval(interval);
        console.log("ket thuc");
      }

    },1000);


  }

  // loading2(){
  //    this.interval = setInterval(this.increaseProgress(),1000);
  //
  // }
  //
  // increaseProgress(){
  //   this.progress += this.progress+10;
  //   console.log("dang chay");
  //   console.log(this.progress);
  //   if(this.progress==100){
  //     clearInterval(this.interval);
  //     console.log("ket thuc");
  //   }
  // }



}
