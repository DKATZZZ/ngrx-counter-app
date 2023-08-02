/*create a interface counterstate*/ 
export interface counterstate{
    counter:number;
    channeltitle:string;
}
/*create state for comp*/
export const initialState:counterstate={
    counter:0,
    channeltitle:"Welcome to Angular World"
}

