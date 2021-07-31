import { iLanguage } from '../interfaces/iLanguage'

export class frCALangModel implements iLanguage {
    constructor() { }
    //fixed texts
    somethingWrongMsg = "Quelque chose s'est mal passé"
    header = "Success";

        //dynamically changing texts
    alertMessage1 = (sellingPrice : any, amount : any, cost : any, reason : any) => 
                    `Rejeté - ${sellingPrice}$ pour ${amount} seaux (${cost})$ } - ${reason}`;
  }