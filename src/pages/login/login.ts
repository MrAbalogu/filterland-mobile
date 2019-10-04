import { Component, OnInit, ViewChild,  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading} from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthproviderProvider } from './../../providers/authprovider/authprovider';
import { TabsPage } from './../tabs/tabs';
import { UtilProvider } from './../../providers/util/util';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
  @ViewChild('loginForm') loginForm: NgForm;
  public loading: Loading;

  responseData : any;
  nextpage= TabsPage;
  public userData: any = {};
  alerter: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AuthproviderProvider:AuthproviderProvider,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private utility: UtilProvider) {
  }

  ngOnInit() {
    this.loginForm.resetForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Method to handle login
  public login(form: NgForm): void{
    if (form.invalid) {
      this.utility.showToast('Login form cannot be empty.', 3000, 'toast-danger');
      return;
    }
    if(!this.utility.validateEmail(form.value.email)){
      this.utility.showToast('Please enter a valid email.', 3000, 'toast-danger');
      return;
    }
    this.loading = this.utility.showLoading();
    this.AuthproviderProvider.login(form.value.email, form.value.password)
      .then(() => {
        this.loading.dismiss();
        this.navCtrl.push('TabsPage');
      })
      .catch((err) => {
        this.loading.dismiss();
        if (err === 'Unknown Error') {
            return this.utility.showToast('Cannot connect to server. Check network connection.', 3000, 'toast-danger');
        }
        this.utility.showToast('Invalid Login Credentials.', 3000, 'toast-danger');
      });
  }

  // public forgotPassword(): void{
  //   this.presentAlertPrompt((data, alert) =>{
  //     if(this.utility.validateData(data)){
  //       this.loading = this.utility.showLoading();
  //       this.authProvider.forgotPassword(data.email)
  //         .then((res: {success: boolean; message: string}) => {
  //           if (res.success) {
  //             this.loading.dismiss();
  //             this.utility.showToast('A password reset email has been sent to your email. Check your email for further instructions', 4000, 'toast-success');
  //             alert.dismiss();
  //           }
  //         })
  //         .catch((err: HttpErrorResponse) => {
  //           if (err.status === 404) {
  //             this.loading.dismiss();
  //             this.utility.showToast('A provider associated with such email doesn\'t exist, please check and try again', 3000, 'toast-danger');
  //           }
  //         });
  //     }
  //     else{
  //       this.utility.showToast('Field must contain a valid email, and musn\'t be empty', 3000, 'toast-danger');
  //       return false;
  //     }~
  //   });
  // }

  private presentAlertPrompt(okayCallBack: Function) {
    console.log('Alert called');
    const alert = this.alerter.create({
      subTitle: 'Kindly enter your provider email to reset passsword',
      cssClass: 'prompt-alert',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Provider Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary-button',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          cssClass: 'primary-button',
          handler: (data) => {
            const dataIsValid = okayCallBack(data, alert);
            if(!dataIsValid){
              return false;
            }
          }
        }
      ]
    });
     alert.present();
  }
}
