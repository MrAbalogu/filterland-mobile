import { Component, ViewChild, ElementRef, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { InvoiceModal } from '../invoice/invoice';

@IonicPage()
@Component({
  selector: 'log-sales',
  templateUrl: 'log_sales.html',
})
export class LogSalesPage {

  @ViewChild("internet_checker_indicator") internetIndicator: ElementRef;
  gender: string;
  netResponse: string;
  indicator_classes: any = {
    'onlinebg': false,
    'offlinebg': false
  };
  items: any = [];

  public logSaleForm: FormGroup;
  public itemForm: FormGroup;
  private itemCount: number = 1;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    ) {

    this.logSaleForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      address: [''],
      paid: [''],
      items: this.fb.array([])
    });

    // const fa = (this.logSaleForm.get('items')as FormArray);
    // this.add_item();
  }

  presentModal() {
    this.navCtrl.push("InvoiceModal");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogSalesPage');
    // Continously Check for Internet
    setInterval(() => { 
      // The code that you want to run repeatedly
      if (!navigator.onLine) {
        this.indicator_classes.offlinebg = true;
        this.indicator_classes.onlinebg = false;
        this.internetIndicator.nativeElement.innerHTML = "Offline";

      } else {
        this.indicator_classes.offlinebg = false;
        this.indicator_classes.onlinebg = true;
        this.internetIndicator.nativeElement.innerHTML = "Online";
      }
    }, 2000);
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  add_item() {
    const fa = (this.logSaleForm.get('items') as FormArray);
    fa.push(this.fb.group({
      name: ['', Validators.required],
      partnumber: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    }));
    console.log("items ", this.logSaleForm.get('items').value)
  }

  remove_item(i:number){
    const fa = (this.logSaleForm.get('items') as FormArray);
    fa.removeAt(i);
    if(fa.length===0) this.add_item();
  }

  viewInvoice() {
    console.log(this.logSaleForm.value);
  }

}
