import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: {name:string, status:string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    console.log(status);
  }

  constructor() { }

  ngOnInit() {
  }

}
