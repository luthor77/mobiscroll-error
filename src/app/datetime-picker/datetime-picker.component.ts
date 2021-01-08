import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { MbscDatepickerOptions } from '@mobiscroll/angular';
import momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatetimePickerComponent implements OnInit {
  options: MbscDatepickerOptions = {
    stepMinute: 5,
    returnFormat: 'jsdate',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm',
  };

  @Input()
  value: string;
  @Input()
  dateType: 'datetime' | 'date' | 'time' = 'datetime';
  @Input()
  label: string;
  @Input()
  min: string;

  @Output()
  valueChange = new EventEmitter<string>();

  ngOnInit() {}

  getControls = (dateType: 'datetime' | 'date' | 'time') => {
    let controls;

    if (!dateType || dateType === 'datetime') controls = ['calendar', 'time'];
    else if (dateType === 'date') controls = ['calendar'];
    else controls = ['time'];

    this.setDate(this.value);

    return controls;
  };

  private getDate(date: string): string {
    const roundTo = this.dateType === 'date' ? 'day' : null;

    if (date) date = momentTimezone(date).startOf(roundTo).toISOString(true);

    return date || null;
  }

  setDate(date: string) {
    if (!date) return;

    const parsedDate = this.getDate(date);

    if (parsedDate === this.value) return;

    this.valueChange.emit(parsedDate);
  }
}
