import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, startWith } from 'rxjs';
import { RedditService } from '../shared/data-access/reddit.service';
import { Gif } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  currentlyLoadingGifs$ = new BehaviorSubject<string[]>([]);
  loadedGifs$ = new BehaviorSubject<string[]>([]);

  subredditFormControl = new FormControl('gifs');

  settingsModalIsOpen$ = new BehaviorSubject<boolean>(false);

  // Combine the stream of gifs with the streams determining their loading status
  gifs$ = combineLatest([
    this.redditService.getGifs(this.subredditFormControl),
    this.currentlyLoadingGifs$,
    this.loadedGifs$,
  ]).pipe(
    map(([gifs, currentlyLoadingGifs, loadedGifs]) =>
      gifs.map((gif) => ({
        ...gif,
        loading: currentlyLoadingGifs.includes(gif.permalink),
        dataLoaded: loadedGifs.includes(gif.permalink),
      }))
    )
  );

  vm$ = combineLatest([
    this.gifs$.pipe(startWith([])),
    this.settingsModalIsOpen$,
  ]).pipe(
    map(([gifs, modalIsOpen]) => ({
      gifs,
      modalIsOpen,
    }))
  );

  constructor(private redditService: RedditService) {}

  setLoading(permalink: string) {
    // Add the gifs permalink to the loading array
    this.currentlyLoadingGifs$.next([
      ...this.currentlyLoadingGifs$.value,
      permalink,
    ]);
  }

  setLoadingComplete(permalinkToComplete: string) {
    this.loadedGifs$.next([...this.loadedGifs$.value, permalinkToComplete]);
    this.currentlyLoadingGifs$.next([
      ...this.currentlyLoadingGifs$.value.filter(
        (permalink) => !this.loadedGifs$.value.includes(permalink)
      ),
    ]);
  }

  loadMore(ev: Event, currentGifs: Gif[]) {
    this.redditService.nextPage(ev, currentGifs[currentGifs.length - 1].name);
  }
}
