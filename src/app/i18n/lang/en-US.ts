import { iLanguage } from '../interfaces/iLanguage'

export class enUSLangModel implements iLanguage {
    constructor() { }
    //fixed texts
    somethingWrongMsg = "Something went wrong"
    header = "Succès";

    //dynamically changing texts
    alertMessage1 = (sellingPrice : any, amount : any, cost : any, reason : any) => 
                    `Rejected - $${sellingPrice} for ${amount} buckets ($${cost}) } - ${reason}`;
  }