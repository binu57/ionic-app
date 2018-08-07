import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class Modal {
  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;
  
  currentHeight:number = 0;
  constructor(public renderer: Renderer) {
    // console.log('Hello ModalComponent Component');
  }
  ngAfterViewInit(){
    this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');   
    // console.log(this.expanded);
    // console.log(this.expandHeight);
  }

}
