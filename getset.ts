class Studentgetset {
    private _stuName: string;
    private _stuPer: number;

   set stdName(value: string){
        this._stuName = value;   
        if(value.length == 0){
            throw "Plz enter student name";
        }
    } 
   
    get stdName(): string{
     return this._stuName;
    }
    set stdPer(value: number){
     this._stuPer = value;
     if (value < 60){
         throw "percentage must be greater than 60";
        }

    }
    
    get stdPer(): number{
        return this._stuPer;

    }


}