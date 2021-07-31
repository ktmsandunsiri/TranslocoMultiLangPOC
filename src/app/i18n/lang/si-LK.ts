import { iLanguage } from '../interfaces/iLanguage'

export class siLangModel implements iLanguage {
    constructor() { }
    //fixed texts
    somethingWrongMsg = "කුමක් හෝ වරදක් සිදු වී ඇත"
    header = "සාර්ථකයි";

    //dynamically changing texts
    alertMessage1 = (sellingPrice : any, amount : any, cost : any, reason : any) => 
               `ප්‍රතික්ෂේප කළා - බකට් ${amount}ක් සඳහා $${sellingPrice} ($${cost}) }  - ${reason}`;
  }