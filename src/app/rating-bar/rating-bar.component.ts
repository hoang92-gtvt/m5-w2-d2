import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IRating} from "./IRating";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {
  @Input()
  max:number =10;

  @Input()
  current:number= 0;


  ratingList: Array<IRating> =[];


  constructor() {
    this.loadRating();
  }

  ngOnInit(): void {
// this.loadRating();
  }


  ngOnChanges(changes: SimpleChanges) {
    // if('max' in changes){}
    // let max= changes.max.currentValue;
    // max = typeof max==='undefined'?4:max;
    // this.max = max;
    this.loadRating();
  }

  loadRating(){
    this.ratingList = Array.from({length: this.max}, (_, index) => ({
      value:index +1,
      active: index<this.current
    }));
  }

  clickChuot(index: number){
    this.current = index+1;
    this.ratingList.forEach((item, idx)=>
    {item.active = idx <this.current});

  }

  diChuyenChuot(index: number){
    this.ratingList.forEach((item, idx)=>{item.active = idx <index});
  }



}
