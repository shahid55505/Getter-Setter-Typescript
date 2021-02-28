class Studentgetset {
    set stdName(value) {
        this._stuName = value;
        if (value.length == 0) {
            throw "Plz enter student name";
        }
    }
    get stdName() {
        return this._stuName;
    }
    set stdPer(value) {
        this._stuPer = value;
        if (value < 60) {
            throw "percentage must be greater than 60";
        }
    }
    get stdPer() {
        return this._stuPer;
    }
}
