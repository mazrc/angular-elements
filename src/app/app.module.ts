import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

const config = {
  apiKey: 'AIzaSyAesSTpq6RdhSGqqh3BNcJErodzk1ePzps',
  authDomain: 'fireship-dev-17429.firebaseapp.com',
  databaseURL: 'https://fireship-dev-17429.firebaseio.com',
  projectId: 'fireship-dev-17429',
  storageBucket: 'fireship-dev-17429.appspot.com',
  messagingSenderId: '307044372590'
};

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LazyImageComponent} from './lazy-image/img-lazy.component';
import { MyBtnComponent } from './my-btn/my-btn.component';
import { CoolService } from './cool.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [LazyImageComponent, MyBtnComponent, ContactComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule
  ],
  providers: [CoolService],
  entryComponents: [LazyImageComponent, MyBtnComponent, ContactComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [LazyImageComponent, 'lazy-image'],
      [MyBtnComponent, 'my-btn'],
      [ContactComponent, 'contact-form']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
