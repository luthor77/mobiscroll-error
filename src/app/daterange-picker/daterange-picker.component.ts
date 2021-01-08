import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MbscDatepickerOptions } from '@mobiscroll/angular';
import momentTimezone from 'moment-timezone';

@Component({
  selector: 'app-daterange-picker',
  templateUrl: './daterange-picker.component.html',
  styleUrls: ['./daterange-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaterangePickerComponent implements OnInit {
  options: MbscDatepickerOptions = {
    stepMinute: 5,
    returnFormat: 'jsdate',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm',
    select: 'range',
  };

  @Input()
  value: [string, string];
  @Input()
  dateType: 'datetime' | 'date' | 'time' = 'datetime';
  @Input()
  startLabel: string;
  @Input()
  endLabel: string;
  @Input()
  min: string;

  @Output()
  valueChange = new EventEmitter<[string, string]>();

  ngOnInit() {}

  getControls = (dateType: 'datetime' | 'date' | 'time') => {
    let controls;

    if (!dateType || dateType === 'datetime') controls = ['calendar', 'time'];
    else if (dateType === 'date') controls = ['calendar'];
    else controls = ['time'];

    this.setRange(this.value);

    return controls;
  };

  private getRange(range: [string, string]): [string, string] {
    let [start, end] = range;

    const roundTo = this.dateType === 'date' ? 'day' : null;

    if (start) start = momentTimezone(start).startOf(roundTo).toISOString(true);
    if (end) end = momentTimezone(end).endOf(roundTo).toISOString(true);

    return [start || null, end || null];
  }

  setRange(range: [string, string]) {
    if (!range) return;

    const parsedRange = this.getRange(range);

    if (
      parsedRange[0] === this.value?.[0] &&
      parsedRange[1] === this.value?.[1]
    )
      return;

    this.valueChange.emit(parsedRange);
  }
}
