import { Component, OnInit } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { DataListService } from "../../../core/services/data-list.service";
@Component({
  selector: "app-finding-page",
  templateUrl: "./finding-page.component.html",
  styleUrls: ["./finding-page.component.scss"]
})
export class FindingPageComponent implements OnInit {
  constructor(
    private dataListService: DataListService,
    private logger: NGXLogger
  ) {}

  findingsData: any[] = null;
  subFindingData: any[] = null;
  errorMessage: any = null;

  ngOnInit() {
    this.getDataList("findingsData.json");
  }

  /**
   * Handle the dataListService observable
   **/
  getDataList(jsonUrl) {
    this.dataListService
      .get(jsonUrl)
      .subscribe(
        dataList => (this.findingsData = dataList),
        error => (this.errorMessage = <any>error),
        () => this.initData()
      );
  }

  initData() {
    this.findingsData = this.findingsData["allFindings"];
    console.log(this.findingsData);
  }

  changeData(event) {
    this.subFindingData = event.findings;
  }
}
