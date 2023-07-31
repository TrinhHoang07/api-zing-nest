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

    async getAllPlaylistAndIdUser() {
        return await this.playlistEntity
            .createQueryBuilder('playlist')
            .addSelect('u.name')
            .innerJoin('user', 'u', 'u.id=playlist.user_id')
            .getRawMany();
    }

    async getPlaylistByUserId(userId: number) {
        return await this.playlistEntity
            .createQueryBuilder('playlist')
            .innerJoin('user', 'u', 'u.id=playlist.user_id')
            .where(`u.id=${userId}`)
            .getRawMany();
    }

    async createPlaylist(data: PlaylistCreateDto) {
        const playlist = new Playlist();
        playlist.name = data.name;
        playlist.description = data.description;

        return await this.playlistEntity.save(playlist);
    }
}
