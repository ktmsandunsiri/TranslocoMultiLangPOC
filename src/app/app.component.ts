import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { TranslocoLocaleService } from '@ngneat/transloco-locale';


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
  nameVal = "Catering Admin"
constructor(
  private translocoService: TranslocoService,
  // @Inject(LOCALE_ID) private _locale: string,
  private service: TranslocoLocaleService
  ){
  this.availableLangs = this.translocoService.getAvailableLangs();
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
        this.nameVal = "Catering Admin(This is a Dynamically change role)"
     else if(lngId == "fr-CA")
        this.nameVal = "Administrateur de la restauration(This is a Dynamically change role)"
     else if(lngId == "si-LK")
        this.nameVal = "කේටරින් පරිපාලක(This is a Dynamically change role)"
  }
}
