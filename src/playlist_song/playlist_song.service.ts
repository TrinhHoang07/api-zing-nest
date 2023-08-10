import { Injectable } from '@nestjs/common';
import { PlaylistSong } from './playlist_song.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlaylistSongService {
    constructor(@InjectRepository(PlaylistSong) private playlistSong: Repository<PlaylistSong>) {}

    async addPlaylistSong(data: { song_id: number; playlist_id: number }) {
        const playlist = new PlaylistSong();
        playlist.song_ = data.song_id;
        playlist.playlist_ = data.playlist_id;

        const playlistNew = await this.playlistSong.save(playlist);

        return {
            message: 'success',
            statusCode: 200,
            data: playlistNew,
        };
    }

    async addPlaylistSongByIds(data: { song_id: number; playlist_ids: number[] }) {
        for (let index = 0; index < data.playlist_ids.length; index++) {
            const playlist = new PlaylistSong();
            playlist.song_ = data.song_id;
            playlist.playlist_ = data.playlist_ids[index];

            await this.playlistSong.save(playlist);
        }

        return {
            message: 'success',
            code: 201,
        };
    }

    async getPlaylistSongById(id: number): Promise<any> {
        return await this.playlistSong
            .createQueryBuilder('playlistSong')
            .addSelect('s.name', 'song_name')
            .addSelect('s.des', 'song_des')
            .addSelect('s.src', 'song_src')
            .addSelect('s.date', 'song_date')
            .addSelect('s.time', 'song_time')
            .addSelect('p.name', 'playlist_name')
            .innerJoin('playlist', 'p', 'p.id=playlistSong.playlist_id')
            .innerJoin('song', 's', 's.id=playlistSong.song_id')
            .where(`p.id=${id}`)
            .getRawMany();
    }
}
