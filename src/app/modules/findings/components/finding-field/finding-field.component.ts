import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-finding-field",
  templateUrl: "./finding-field.component.html",
  styleUrls: ["./finding-field.component.sass"]
})
export class FindingFieldComponent implements OnInit {
  @Input() findingFieldData: any;
  @Output() changeFieldData = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  changeData(data) {
    this.findingFieldData = data;
  }
}
