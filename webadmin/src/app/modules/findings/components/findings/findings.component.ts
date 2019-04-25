import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-findings",
  templateUrl: "./findings.component.html",
  styleUrls: ["./findings.component.sass"]
})
export class FindingsComponent implements OnInit {
  @Input() findingsDataToShow: any[] = null;

  @Output() changeFindingData = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  clickFindingData(data) {
    console.log("click event triggered" + data);
    this.changeFindingData.emit(data);
  }
}
