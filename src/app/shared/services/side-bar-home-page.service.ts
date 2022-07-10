import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarHomePageService {
  @Output() sideBarClass: EventEmitter<any> = new EventEmitter(); 

  constructor() { }
}
