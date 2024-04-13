/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import { FetchHttpRequest } from "./core/FetchHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { AlbumsService } from "./services/AlbumsService";
import { ArtistsService } from "./services/ArtistsService";
import { AudiobooksService } from "./services/AudiobooksService";
import { CategoriesService } from "./services/CategoriesService";
import { ChaptersService } from "./services/ChaptersService";
import { EpisodesService } from "./services/EpisodesService";
import { GenresService } from "./services/GenresService";
import { LibraryService } from "./services/LibraryService";
import { MarketsService } from "./services/MarketsService";
import { PlayerService } from "./services/PlayerService";
import { PlaylistsService } from "./services/PlaylistsService";
import { SearchService } from "./services/SearchService";
import { ShowsService } from "./services/ShowsService";
import { TracksService } from "./services/TracksService";
import { UsersService } from "./services/UsersService";
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class SpotifyClient {
  public readonly albums: AlbumsService;
  public readonly artists: ArtistsService;
  public readonly audiobooks: AudiobooksService;
  public readonly categories: CategoriesService;
  public readonly chapters: ChaptersService;
  public readonly episodes: EpisodesService;
  public readonly genres: GenresService;
  public readonly library: LibraryService;
  public readonly markets: MarketsService;
  public readonly player: PlayerService;
  public readonly playlists: PlaylistsService;
  public readonly search: SearchService;
  public readonly shows: ShowsService;
  public readonly tracks: TracksService;
  public readonly users: UsersService;
  public readonly request: BaseHttpRequest;
  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest,
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "https://api.spotify.com/v1",
      VERSION: config?.VERSION ?? "2024.3.3",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.albums = new AlbumsService(this.request);
    this.artists = new ArtistsService(this.request);
    this.audiobooks = new AudiobooksService(this.request);
    this.categories = new CategoriesService(this.request);
    this.chapters = new ChaptersService(this.request);
    this.episodes = new EpisodesService(this.request);
    this.genres = new GenresService(this.request);
    this.library = new LibraryService(this.request);
    this.markets = new MarketsService(this.request);
    this.player = new PlayerService(this.request);
    this.playlists = new PlaylistsService(this.request);
    this.search = new SearchService(this.request);
    this.shows = new ShowsService(this.request);
    this.tracks = new TracksService(this.request);
    this.users = new UsersService(this.request);
  }
}
