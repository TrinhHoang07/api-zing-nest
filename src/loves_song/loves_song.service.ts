import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoveSong } from './loves_song.entity';

@Injectable()
export class LoveSongService {
    constructor(@InjectRepository(LoveSong) private loveSong: Repository<LoveSong>) {}

    async addLoveSong(data: { id_song: number; id_user: number }) {
        const loveSong = new LoveSong();
        loveSong.song_ = data.id_song;
        loveSong.user_ = data.id_user;

        console.log(loveSong);

        return await this.loveSong.save(loveSong);
    }

    // .createQueryBuilder('playlistSong')
    // .addSelect('s.name', 'song_name')
    // .addSelect('s.des', 'song_des')
    // .addSelect('s.src', 'song_src')
    // .addSelect('s.date', 'song_date')
    // .addSelect('s.time', 'song_time')
    //         .addSelect('p.name', 'playlist_name')
    //         .innerJoin('playlist', 'p', 'p.id=playlistSong.playlist_id')
    //         .innerJoin('song', 's', 's.id=playlistSong.song_id')
    //         .where(`p.id=${id}`)
    //         .getRawMany();

    async getLoveSongByUserId(id_user: number) {
        return await this.loveSong
            .createQueryBuilder('loveSong')
            .addSelect('s.name', 'song_name')
            .addSelect('s.des', 'song_des')
            .addSelect('s.src', 'song_src')
            .addSelect('s.date', 'song_date')
            .addSelect('s.time', 'song_time')
            .addSelect('u.name', 'user_name')
            .innerJoin('song', 's', 's.id=loveSong.song_id')
            .innerJoin('user', 'u', 'u.id=loveSong.user_id')
            .where(`u.id=${id_user}`)
            .getRawMany();
    }
}
