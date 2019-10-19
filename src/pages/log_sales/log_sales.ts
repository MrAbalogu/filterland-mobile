import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { InvoiceModal } from '../invoice/invoice';

@IonicPage()
@Component({
  selector: 'log-sales',
  templateUrl: 'log_sales.html',
})
export class LogSalesPage {

  gender: string;
  netResponse: string;
  total: any;
  indicator_classes: any = {
    'onlinebg': false,
    'offlinebg': false
  };
  items: any = [];
  myitems: any = [];

  public logSaleForm: FormGroup;
  public itemForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    ) {

    this.logSaleForm = this.fb.group({
      name: [''],
      invoicenumber: [''],
      phone: [''],
      email: [''],
      address: [''],
      paid: [''],
      date: [''],
      items: this.fb.array([
      ])
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogSalesPage');
  }

  calculateTotal() {
    this.items = this.logSaleForm.get('items').value;
    this.items.forEach((item) => {
      let itemtotal = item.price * item.quantity;
      item.total = itemtotal;
    });

    this.total = this.items.reduce(function(prev, cur) {
      return prev + cur.total;
    }, 0);
    console.log(this.total);
  }

  goToTabsPage() {
    this.navCtrl.setRoot(TabsPage)
  }

  add_item() {
    console.log(this.total);
    console.log(this.myitems);
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
    let formData = this.logSaleForm.value;
    formData.total = this.total;
    let invoiceModal = this.modalCtrl.create(InvoiceModal, formData);
    invoiceModal.present();
    console.log(this.logSaleForm.value);
  }

}
