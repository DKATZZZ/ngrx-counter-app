export class User {
    constructor(
        private idToken:string,
        private email:string,
        private localId:string,
        private expirationdate:Date

    ){}
    get expireDate(){
     return this.expirationdate;
    }
}
