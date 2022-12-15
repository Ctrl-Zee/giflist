import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Gif } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.page.html',
  styleUrls: ['./gif-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListPage implements OnInit {
  @Input() gifs!: Gif[];

  trackByFn(index: number, gif: Gif) {
    return gif.permalink;
  }

  constructor() {}

  ngOnInit() {}
}
