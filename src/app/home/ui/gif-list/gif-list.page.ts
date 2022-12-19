import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Gif } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.page.html',
  styleUrls: ['./gif-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListPage implements OnInit {
  @Input() gifs!: Gif[];
  @Output() gifLoadStart = new EventEmitter<string>();
  @Output() gifLoadComplete = new EventEmitter<string>();

  trackByFn(index: number, gif: Gif) {
    return gif.permalink;
  }

  constructor() {}

  ngOnInit() {}

  playVideo(ev: Event, gif: Gif) {
    const video = ev.target as HTMLVideoElement;
    if (video.readyState === 4) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    } else {
      if (video.getAttribute('data-event-loaddeddata') !== 'true') {
        this.gifLoadStart.emit(gif.permalink);
        video.load();
        const handleVideoLoaded = async () => {
          this.gifLoadComplete.emit(gif.permalink);
          await video.play();
          video.removeEventListener('loadeddata', handleVideoLoaded);
        };
        video.addEventListener('loadeddata', handleVideoLoaded);
        video.setAttribute('data-event-loadeddata', 'true');
      }
    }
  }

  showComments(gif: Gif) {
    Browser.open({
      toolbarColor: '#fff',
      url: `https://reddit.com/${gif.permalink}`,
      windowName: '_system',
    });
  }
}
