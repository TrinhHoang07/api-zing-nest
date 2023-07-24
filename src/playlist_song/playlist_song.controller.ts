import { Controller } from '@nestjs/common';
import { PlaylistSongService } from './playlist_song.service';

@Controller('playlist_song')
export class PlaylistSongController {
    constructor(private playlistSongService: PlaylistSongService) {}
}
