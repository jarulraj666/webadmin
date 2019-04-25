import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";

/**
 * This class provides the DataListService service with methods to read names and add names.
 */
@Injectable()
export class DataListService {
  private apiUrl = environment.apiBase; // URL to web api

  /**
   * Creates a new DataListService with the injected HttpClient.
   */
  constructor(protected httpClient: HttpClient) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   */
  get(urlAddress: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + urlAddress);
  }
}
