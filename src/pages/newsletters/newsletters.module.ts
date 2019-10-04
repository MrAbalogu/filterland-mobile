import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslettersPage } from './newsletters';

@NgModule({
  declarations: [
    NewslettersPage,
  ],
  imports: [
    IonicPageModule.forChild(NewslettersPage),
  ]
})
export class NewslettersPageModule {}
