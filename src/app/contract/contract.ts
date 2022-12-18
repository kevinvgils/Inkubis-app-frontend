import { FormGroup } from "@angular/forms";

export class Contract {
    firstQuestion: boolean = false;
    secondQuestion: boolean = false;
    thirdQuestion: boolean = false;
    lastQuestion: boolean = false;

    constructor(form: FormGroup){
        this.firstQuestion = form.value.firstPart.firstQuestion;
        this.secondQuestion = form.value.firstPart.secondQuestion;
        this.thirdQuestion = form.value.secondPart.thirdQuestion;
        this.lastQuestion = form.value.secondPart.lastQuestion;
    }
}