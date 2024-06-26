import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {SignUpRequest} from "../../models/authentication/sign-up.request";
import {SignUpResponse} from "../../models/authentication/sign-up.response";
import {SignInRequest} from "../../models/authentication/sign-in.request";
import {SignInResponse} from "../../models/authentication/sign-in.response";


/**
 * Service for Authentication
 * @summary
 * This service is responsible for handling sign-up, sign-in, and sign-out operations.
 * It also provides observables to check if the user is signed in, the current user id, and the current username.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  basePath: string = 'https://sweetmanagerapi.ryzeon.me/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })};

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) { }


  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  /**
   * Sign up a new user
   * @param signUpRequest - The sign-up request containing the username and password
   * @returns - The sign-up response containing the user id and username
   */
  signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions)
      .subscribe( {
        next: (response) => {
          console.log(`Signed up as ${response.email} with id ${response.id}`);
          alert(`Signed up as ${response.email} with id ${response.id}`);
          this.router.navigate(['/payment/subscription']).then();
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/access-view']).then();
        }
      });

  }

  /**
   * Sign in an existing user
   * @param signInRequest - The sign-in request containing the username and password
   * @returns - The sign-in response containing the user id, username, and token
   */
  signIn(signInRequest: SignInRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedInUsername.next(response.email);
          localStorage.setItem('token', response.token);
          console.log(`Signed in as ${response.email} with token ${response.token}`);
          alert("Successfully logged in!")
          this.router.navigate(['/dashboard/panel']).then();
        },
        error: (error) => {
          console.error(`Error while signing in: ${error}`);
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUsername.next('');
          localStorage.removeItem('token');
          alert("User not found!")
          this.router.navigate(['/access-view']).then();
        }
      });
  }

  /**
   * Sign out the current user
   */
  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/access-view']).then();
  }

}
