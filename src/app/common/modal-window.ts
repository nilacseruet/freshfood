import { Component } from '@angular/core';


@Component({
  selector: 'appmodal',
  template: `
  <div (click)="hideModal()" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <ng-content select=".app-modal-header"></ng-content>
        </div>
        <div class="modal-body">
          <ng-content select=".app-modal-body"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select=".app-modal-footer"></ng-content>
        </div>
      </div>
    </div>
  </div>
  `
})
export class CommonModalWindow {
  
  public visible = false;
  private visibleAnimate = false;
 
  constructor() {  }

  public showModal(): void {
    console.log("sdssf");
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hideModal(): void {
  
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
        
    
  }

  
}

