import { Injectable } from '@nestjs/common';
import { PlaylistSong } from './playlist_song.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlaylistSongService {
    constructor(@InjectRepository(PlaylistSong) private playlistSong: Repository<PlaylistSong>) {}
}
