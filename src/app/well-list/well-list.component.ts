import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import {ListModel} from '../shared/well-list.model'
@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
@Output() handleSource = new EventEmitter<ListModel>()
@Input() items:ListModel[]
  constructor() {}

  ngOnInit(): void {}

  changeColor(type:string){
    return type === 'rls' ? 'white' : 'black'
  }

  onSourceClick(val:ListModel){
    this.handleSource.emit(val)
  }
}
