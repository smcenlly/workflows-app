import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from '../models/Activity';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
    selector: 'app-activity-form',
    templateUrl: './activity-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityFormComponent implements OnInit {
    form: FormGroup;
    datePickerConfig: Partial<BsDatepickerConfig>;
    @Input() activity?: Activity;
    @Output() submitted = new EventEmitter();

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.datePickerConfig = { containerClass: 'theme-red' };
        this.buildForm();
    }

    onSubmit() {
        this.submitted.emit({
            name: this.form.value.name,
            expected_start_date: this.form.value.expected_start_date,
            expected_end_date: this.form.value.expected_end_date,
        });
    }

    private buildForm() {
        this.form = this.fb.group({
            name: [
                this.activity ? this.activity.name : '',
                Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
            ],
            expected_start_date: [
                this.activity ? new Date(this.activity.expected_start_date.replace('Z', '')) : new Date(Date.now()),
                Validators.required,
            ],
            expected_end_date: [
                this.activity ? new Date(this.activity.expected_end_date.replace('Z', '')) : new Date(Date.now()),
                Validators.required,
            ],
        });
    }
}
