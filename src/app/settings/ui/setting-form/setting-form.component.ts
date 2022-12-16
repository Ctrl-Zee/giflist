import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingFormComponent implements OnInit {
  @Input() settingsForm!: FormGroup;
  @Output() save = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  declarations: [SettingFormComponent],
  exports: [SettingFormComponent],
})
export class SettingsFormComponentModule {}
