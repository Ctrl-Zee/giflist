import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { SettingsService } from '../shared/data-access/settings.service';
import { Settings } from '../shared/interfaces';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage implements OnInit {
  settingsForm = this.fb.nonNullable.group<Settings>({
    sort: 'hot',
    perPage: 10,
  });

  constructor(
    private fb: FormBuilder,
    public settingsService: SettingsService,
    public popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  handleSave() {
    this.settingsService.save(this.settingsForm.getRawValue());
    this.popoverCtrl.dismiss();
  }
}
