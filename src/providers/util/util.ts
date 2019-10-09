import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Loading, AlertController } from 'ionic-angular';


@Injectable()
export class UtilProvider {

  private enrolleeOtp: string;

  constructor(
    private http: HttpClient,
    private toaster: ToastController,
    private alerter: AlertController,
    private loadingCtrl: LoadingController) {}

  public showToast(message: string, duration: number, typeClass: string) {
    typeClass = 'hiis-toast ' + typeClass;
    const toast = this.toaster.create({
      message: message,
      duration: duration,
      position: 'top',
      cssClass: typeClass
    });
    toast.present();
  }

  public showAlert(title: string, message: string): void {
    let alert = this.alerter.create({
      title: title,
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }

  public showLoading(): Loading{
   let loading = this.loadingCtrl.create({
      content: `<div class="spinner">
                  <div class="cube1"></div>
                  <div class="cube2"></div>
                </div>`
    });
    loading.present();
    return loading;
  }

  public presentLoadingDefault(message: string): Loading {
    let loading = this.loadingCtrl.create({
      content: message
    });

    loading.present();
    return loading;
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 5000);
  }

  public presentAlertConfirm(title:string, message:string, okayCallBack: Function) {
    const alert = this.alerter.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          cssClass: 'primary-button',
          handler: () => {
            console.log('Confirm Okay');
            okayCallBack();
          }
        }
      ]
    });
    alert.present();
  }

  public validateData(data):boolean{
    if(data){
      if(data.email){
        if(!this.validateEmail(data.email)){
          return false;
        }
        return true;
      }
    }
    return false;
  }

  public setEnrolleeOtp(otp: string){
    this.enrolleeOtp = otp;
  }

  public getEnrolleeOtp(): string{
    return this.enrolleeOtp;
  }

  public compareEnrolleeOtp(otpProvided:string): boolean{
    return this.enrolleeOtp == otpProvided;
  }

  public validateEmail(email): boolean{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
