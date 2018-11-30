import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivityFormComponent } from './activity-form.component';
import { SharedModule } from '../../shared/shared.module';
import { By } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

describe('ActivityForm Componentt', () => {
    let comp: ActivityFormComponent;
    let fixture: ComponentFixture<ActivityFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, BsDatepickerModule.forRoot()],
            providers: [],
            declarations: [ActivityFormComponent]
        });
        fixture = TestBed.createComponent(ActivityFormComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy();
    });

    describe('form validation', () => {
        describe('invalid name', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement;
                nameInputElement.value = 'aa';
                nameInputElement.dispatchEvent(new Event('input'));
                const expected_start_date = fixture.debugElement.query(By.css('input[name="expected_start_date"]'));
                const expected_start_dateElement = expected_start_date.nativeElement;
                expected_start_dateElement.value = '15/05/2018';
                expected_start_dateElement.dispatchEvent(new Event('input'));
                const expected_end_date = fixture.debugElement.query(By.css('input[name="expected_end_date"]'));
                const expected_end_dateElement = expected_end_date.nativeElement;
                expected_end_dateElement.value = '15/05/2018';
                expected_end_dateElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            });
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true);
            });
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy();
            });
            it('error message should appear', () => {
                fixture.detectChanges();
                const y = fixture.debugElement.queryAll(By.css('p[test-id="errorMessage"]'));
                expect(y[0].nativeElement.innerHTML).toContain('Please enter');
                expect(y[0].properties.hidden).toBeFalsy();
            });

        });

        describe('all valid', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement;
                nameInputElement.value = 'nnaa';
                nameInputElement.dispatchEvent(new Event('input'));
                const expected_start_date = fixture.debugElement.query(By.css('input[name="expected_start_date"]'));
                const expected_start_dateElement = expected_start_date.nativeElement;
                expected_start_dateElement.value = '15/05/2018';
                expected_start_dateElement.dispatchEvent(new Event('input'));
                const expected_end_date = fixture.debugElement.query(By.css('input[name="expected_end_date"]'));
                const expected_end_dateElement = expected_end_date.nativeElement;
                expected_end_dateElement.value = '15/05/2018';
                expected_end_dateElement.dispatchEvent(new Event('input'));

                fixture.detectChanges();
            });
            it('form should be valid', () => {
                expect(comp.form.invalid).toBe(false);
            });
            it('submit button should be enabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeFalsy();
            });

            describe('submitting', () => {
                it('should call output', () => {
                    const spy = spyOn(comp.submitted, 'emit');
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click();
                    fixture.detectChanges();
                    expect(spy).toHaveBeenCalled();
                });
            });
        });



    });

});
