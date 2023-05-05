import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialDigitalPageRoutingModule } from './credencial-digital-routing.module';

import { CredencialDigitalPage } from './credencial-digital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialDigitalPageRoutingModule
  ],
  declarations: [CredencialDigitalPage]
})
export class CredencialDigitalPageModule {}
