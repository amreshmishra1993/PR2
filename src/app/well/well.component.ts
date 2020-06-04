import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { ListModel } from '../shared/well-list.model';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  @Output() onSubmitClick = new EventEmitter<{ name: string, type: string }>()
  @ViewChild('inputName') nameInput: ElementRef
  @ViewChild('inputType') typeInput: ElementRef
  @Input() formValue:ListModel
  constructor() { }

  ngOnInit(): void {
  }

  onformSubmit(e: Event) {
    e.preventDefault();
    const name = this.nameInput.nativeElement.value
    const type = this.typeInput.nativeElement.value
    this.onSubmitClick.emit({ name, type })
  }
}
