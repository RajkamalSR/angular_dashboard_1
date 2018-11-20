import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite : boolean = false;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  
  public like(){
    this.isFavorite = !this.isFavorite;
    this.change.emit()
  }

}
