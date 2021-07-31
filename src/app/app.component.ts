import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { TranslocoLocaleService } from '@ngneat/transloco-locale';
import { iLanguage } from './i18n/interfaces/iLanguage';
import { TranslationFactory } from './i18n/translationFactory';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','styles/dashboard.scss','styles/admin-portal.scss'],
})
export class AppComponent implements OnInit{
  
  availableLangs: any;
  activeLang : any;
  radioModel = 0;
  datVal1 = "07/20/2021";
  nameVal = "Catering Admin";
  message1 : string = "";
  message2: string  = "";
  lm : iLanguage;

  sellingPrice : number = 200;
  cost : number = 210;
  amount : number = 12;
  reason : string = "selling price is less than the cost"

constructor(
  private translocoService: TranslocoService,
  // @Inject(LOCALE_ID) private _locale: string,
  private service: TranslocoLocaleService
  ){
  this.availableLangs = this.translocoService.getAvailableLangs();
  this.activeLang = this.translocoService.getActiveLang();
  this.lm = TranslationFactory.Create(this.activeLang);
  //this.setLanguageFixedTexts();
 
}
  ngOnInit() {
    console.log(this.availableLangs)
  }



  public setActiveLanguage(language: any): void {
  
    this.translocoService.setActiveLang(language);
    this.activeLang = this.translocoService.getActiveLang();
    this.service.setLocale(this.activeLang);
    this.switchLanguageFromDBMockData(this.activeLang);
    // platformBrowserDynamic().bootstrapModule(AppModule, {
    //   providers: [{provide: LOCALE_ID, useValue: this.activeLang }]
    // });
  }

  switchLanguageFromDBMockData(lngId : string){
     if(lngId == "en-US")
        this.nameVal = "Catering Admin(This is a dynamically changed role)"
     else if(lngId == "fr-CA")
        this.nameVal = "Administrateur de la restauration(This is a dynamically changed role)"
     else if(lngId == "si-LK")
        this.nameVal = "කේටරින් පරිපාලක(This is a dynamically changed role)"

     this.lm = TranslationFactory.Create(lngId);
  }


  showAlert1(){
    alert("Something went wrong");
    //alert(this.lm.somethingWrongMsg);
  }

  showAlert2(){
   let alertMsg = `Rejected - ${this.sellingPrice} for ${this.amount} buckets ($${this.cost}) }  - ${this.reason}`
   // let alertMsg = this.lm.alertMessage1(this.sellingPrice, this.amount, this.cost, this.reason);
    alert(alertMsg);
  }


  
}
