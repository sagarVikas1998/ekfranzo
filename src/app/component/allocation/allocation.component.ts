import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss'],
})
export class AllocationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  public allocationArr = [
    {
      type:'Hot Folloup',
      name:"Manish singh",
      dateTime:'06:01 PM 2 Oct',
      by:"kbn munish",
    },
    {
      type:'others',
      name:"Shivabasava",
      dateTime:'06:10 PM 2 Oct',
      by:"kbn munish",
    },
    {
      type:'Not intrested',
      name:"Manthan Muinao",
      dateTime:'06:41 PM 5 Oct',
      by:"kbn munish",
    },
    {
      type:'Intrested',
      name:"Muskan",
      dateTime:'06:11 PM 6 Oct',
      by:"kbn munish",
    },
    {
      type:'Hot Folloup',
      name:"Harshit ",
      dateTime:'06:01 PM 2 Oct',
      by:"kbn munish",
    },
    {
      type:'others',
      name:"Vivek",
      dateTime:'06:10 PM 2 Oct',
      by:"kbn munish",
    },
    {
      type:'Not intrested',
      name:"Ayush",
      dateTime:'06:41 PM 5 Oct',
      by:"kbn munish",
    },
    {
      type:'Intrested',
      name:"Sagar",
      dateTime:'06:11 PM 6 Oct',
      by:"kbn munish",
    }
  ]

}
