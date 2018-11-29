import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from '../models/Activity';

@Component({
    selector: 'app-activity-form',
    templateUrl: './activity-form.component.html',
    styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

    form: FormGroup;
    @Input() activity?: Activity;
    @Output() submitted = new EventEmitter();

    constructor(
        private fb: FormBuilder,
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    onSubmit() {
        this.submitted.emit({
            name: this.form.value.name,
            startDate: this.form.value.startDate,
            endDate: this.form.value.endDate
        });
    }

    private buildForm() {
        this.form = this.fb.group({
            name: [this.activity ? this.activity.name : '', Validators.compose([
                Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            startDate: [this.activity ? new Date(this.activity.startDate.replace('Z', '')) : new Date(Date.now()), Validators.required],
            endDate: [this.activity ? new Date(this.activity.endDate.replace('Z', '')) : new Date(Date.now()), Validators.required],
        });
    }


}
