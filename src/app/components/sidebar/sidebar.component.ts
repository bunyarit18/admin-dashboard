import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'หน้าหลัก',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'ข้อมูลห้องพัก',  icon:'hotel', class: '' },
    { path: '/table-list', title: 'การจัดการห้องพัก',  icon:'design_services', class: '' },
    { path: '/typography', title: 'การจัดการพนักงาน',  icon:'library_books', class: '' },
    { path: '/icons', title: 'ข้อมูลลูกค้า',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'ข้อมูลการเงิน',  icon:'price_change', class: '' },
    { path: '/notifications', title: 'คลังสินค้า',  icon:'inventory_2', class: '' },
    { path: '/notifications', title: 'ประวัติการทำรายการ',  icon:'auto_stories', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
