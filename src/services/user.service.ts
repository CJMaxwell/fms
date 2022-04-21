import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { UserInterface } from "src/app/shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'src/assets/vendors.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    console.log(this.userUrl,'daaaa');
    return this.http.get<UserInterface[]>(this.userUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getUsersById(id: string): Observable<UserInterface | undefined> {
    return this.getUsers()
      .pipe(
        map((users: UserInterface[]) => users.find(p => p.Id === id))
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
