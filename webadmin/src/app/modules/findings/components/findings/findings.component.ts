import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-findings",
  templateUrl: "./findings.component.html",
  styleUrls: ["./findings.component.sass"]
})
export class FindingsComponent implements OnInit {
  @Input() findingsDataToShow: any[] = null;

  @Output() changeFindingData = new EventEmitter<any>();

  allFindingsData: any[] = new Array();

  constructor() {}

  ngOnInit() {}

  clickFindingData(data) {
    console.log("click event triggered" + data);
    this.changeFindingData.emit(data);
  }

  clickFetchAllData(data) {
    this.allFindingsData = new Array();
    console.log(this.findingsDataToShow);
    this.findingsDataToShow.forEach(element => {
      this.allFindingsData.push(element);
    });
    this.changeFindingData.emit(this.allFindingsData);
  }
}
