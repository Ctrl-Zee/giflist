import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarPage implements OnInit {
  @Input() subredditFormControl!: FormControl;

  constructor() {}

  ngOnInit() {}
}
