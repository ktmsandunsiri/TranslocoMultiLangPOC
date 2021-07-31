import { enUSLangModel } from './lang/en-US';
import { frCALangModel } from './lang/fr-CA';
import { siLangModel } from './lang/si-LK';
import { iLanguage } from './interfaces/iLanguage';

export class TranslationFactory{
    constructor(){
    }

    static Create(lang : string) : iLanguage {
        let langObj : iLanguage;
        if(lang == "fr-CA")
          langObj = new frCALangModel();
        else if(lang == "si-LK")
          langObj =  new siLangModel();
        else //default is en-US
          langObj =  new enUSLangModel();
   
        return langObj;

    }
}