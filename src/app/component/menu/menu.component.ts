import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
public cardArr = [
  {
    icon:'home',
    name:'Followups',
    color:'success'

  }, {
    icon:'calendar-number-outline',
    name:'Calender',
    color:'success'

  }, 
  {
    icon:'call-outline',
    name:'Call loges',
    color:'primary'

  }, {
    icon:'trending-up-outline',
    name:'Request Report',
    color:'danger'

  }, 
  {
    icon:'podium-outline',
    name:'Advanced Report',
    color:'danger'

  }, {
    icon:'logo-whatsapp',
    name:'Whatsapp Templates',
    color:'success'

  }, 
  {
    icon:'mail-outline',
    name:'Sms Templates',
    color:'success'

  }, {
    icon:'mail-outline',
    name:'Email Templates',
    color:'primary'

  }, 
  {
    icon:'swap-horizontal-outline',
    name:'Recurring Folloups',
    color:'success'

  }, {
    icon:'sync-outline',
    name:'Rechrum Data',
    color:'danger'

  }, 
  {
    icon:'people-circle-outline',
    name:'intrection',
    color:'primary'

  }, {
    icon:'person-circle-outline',
    name:'Team Live Status',
    color:'success'

  }, 
]

}
