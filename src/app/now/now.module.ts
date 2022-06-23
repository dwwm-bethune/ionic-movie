import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NowPageRoutingModule } from './now-routing.module';

import { NowPage } from './now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NowPageRoutingModule
  ],
  declarations: [NowPage]
})
export class NowPageModule {}
