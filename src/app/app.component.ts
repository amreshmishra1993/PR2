import { Component } from '@angular/core';
import { ListModel } from './shared/well-list.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {name:"TestRSl801",type: "rls",sourceKey:1001011}
  ]
  sourceKey = [1001011, 100101112, 10011211, 1101011]
  isItemClick: boolean = true;
  item: ListModel

  handleSubmitClick(value: { name: string, type: string,sourceKey:number }) {
    const index = Math.floor(Math.random() * this.sourceKey.length)
    value.sourceKey = this.sourceKey[index]
    this.items.push(value)
    this.isItemClick = true
  }
  getSource(val: ListModel) {
    this.item = val
    this.isItemClick = false
  }

}
