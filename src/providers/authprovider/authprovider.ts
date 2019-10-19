import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController, App } from 'ionic-angular';
import { Injectable, } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UtilProvider } from '../util/util';

const USER = 'user';

@Injectable()
export class AuthproviderProvider {

  private baseUrl = 'https://filterland-api.herokuapp.com/api/v1';

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private utility: UtilProvider,
    private appCtrl: App) {}

  public login(email: string, password: string): Promise<any>{
    return this.http.post(`${this.baseUrl}/auth/sign_in`, {email:email, password:password})
      .toPromise()
      .then((user) => {
        this.storage.set(USER, user);
        if (user) {
          localStorage.setItem("currentuser", 'Signedin');
        }
        return user;
      })
      .then(() => {
        return Promise.resolve();
      })
      .catch((error: HttpErrorResponse) => {
        console.log(error);
        return Promise.reject(error.statusText);
      });
  }

  public logout(navCtrl:NavController): void{
    this.utility.presentAlertConfirm('Confirm Logout..', 'Are you sure you want to <strong>Log out</strong> of this application?', () => {
      this.storage.remove(USER)
      .then(res => {
        localStorage.removeItem('currentuser');
        this.appCtrl.getRootNav().setRoot('IntroPage');
      })
      .catch(err => {
        console.error(err);
      });
    });
  }

  public hasAuthentication(): Promise<boolean>{
    return this.storage.get(USER).then(res =>{
      if(res){
        return Promise.resolve(true);
      }else{
        return Promise.resolve(false);
      }
    });
  }

  public forgotPassword(email: string): Promise<any>{
    return this.http.post(`${this.baseUrl}/enroleeauth/password`, {email: email})
      .toPromise()
      .then(res =>{
        return Promise.resolve(res);
      })
      .catch((err: HttpErrorResponse) =>{
        return Promise.reject(err);
      });
  }
}
