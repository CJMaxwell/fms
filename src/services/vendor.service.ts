import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { VendorInterface } from "src/app/shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private vendorUrl = 'src/assets/vendors.json';

  constructor(private http: HttpClient) { }

  getVendors(): Observable<VendorInterface[]> {
    console.log(this.vendorUrl,'daaaa');
    return this.http.get<VendorInterface[]>(this.vendorUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getVendorById(id: string): Observable<VendorInterface | undefined> {
    return this.getVendors()
      .pipe(
        map((vendors: VendorInterface[]) => vendors.find(p => p.Id === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
