import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoggerModule } from "ngx-logger";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: environment.apiLog,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
