import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NGXLogger } from "ngx-logger";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private logger: NGXLogger) {}

  ngOnInit() {
    this.logger.info("inside my componet");
    // scroll to top when changing route
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      window.scrollTo(0, 0);
    });
  }
}
