import { Component, OnInit, Inject, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { NGXLogger } from "ngx-logger";
import { DataListService } from "../../../core/services/data-list.service";
@Component({
  selector: "app-finding-page",
  templateUrl: "./finding-page.component.html",
  styleUrls: ["./finding-page.component.scss"]
})
export class FindingPageComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataListService: DataListService,
    private logger: NGXLogger,
    private renderer: Renderer2
  ) {}

  findingsData: any[] = null;
  subFindingData: any[] = new Array();
  errorMessage: any = null;

  ngOnInit() {
    this.renderer.addClass(this.document.body, "login-body");
    this.getDataList("findingsData.json");
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, "login-body");
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
    this.subFindingData = event;
    if (event instanceof Array) {
      console.log("instance array");
    } else {
      this.subFindingData = event;
    }
    console.log(this.subFindingData);
  }
}
