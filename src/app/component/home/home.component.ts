import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  public timeArr = [
    {
      text:'Avg.Talktime',
      time:'0m 38s'
    },
    {
      text:'Avg.Talktime',
      time:'0m 38s'
    },
    {
      text:'Avg.Talktime',
      time:'0m 38s'
    },
    {
      text:'Avg.Talktime',
      time:'0m 38s'
    },
    {
      text:'Avg.Talktime',
      time:'0m 38s'
    },
    {
      text:'Avg.Talktime',
      time:'0m 38s'
    },
  ]
  public callLogArr = [
    {
      text:'Open Missed Calls',
      time:'62'
    },
    {
      text:'Intrested',
      time:'35'
    },
    {
      text:'Not Intrested',
      time:'785'
    },
  
  ]
  constructor() { }

  ngOnInit() {}
  
  public cardArr = [
    {
      icon:'resize-outline',
      name:'229',
      description:'Received'
  
    }, {
      icon:'male-outline',
      name:'115',
      color:'success',
      description:'Missed'
  
    }, 
    {
      icon:'call-outline',
      name:'114',
      color:'success',
      description:'Answered'
  
    }, {
      icon:'person-outline',
      name:'110',
      color:'success',
      description:'Incoming'
  
    }, 
   
  
  ]

}
