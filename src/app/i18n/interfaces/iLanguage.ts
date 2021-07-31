export interface iLanguage{
    //fixed texts
    somethingWrongMsg : string;
    header : string;

    //dynamically changing texts
    alertMessage1(sellingPrice : any, amount : any, cost : any, reason : any) : string;
}