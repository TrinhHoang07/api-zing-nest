import { Injectable } from '@nestjs/common';
import { Playlist } from './playlist.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaylistCreateDto } from './playlist-create.dto';

@Injectable()
export class PlaylistService {
    constructor(@InjectRepository(Playlist) private playlistEntity: Repository<Playlist>) {}

    async getAllPlaylists(): Promise<Playlist[]> {
        return await this.playlistEntity.find();
    }

    async createPlaylist(data: PlaylistCreateDto) {
        const playlist = new Playlist();
        playlist.name = data.name;
        playlist.description = data.description;

        return await this.playlistEntity.save(playlist);
    }
}
