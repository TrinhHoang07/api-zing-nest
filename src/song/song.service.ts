import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongService {
    constructor(@InjectRepository(Song) private song: Repository<Song>) {}

    async allSongs(): Promise<Song[]> {
        return this.song.find();
    }

    async createSong(song: Song): Promise<Song> {
        return this.song.save(song);
    }

    async zingChart(): Promise<Song[]> {
        return this.song.find({
            where: {
                isZingChart: true,
            },
        });
    }

    async topWeek(): Promise<Song[]> {
        return this.song.find({
            where: {
                isTopWeek: true,
            },
        });
    }

    async listZing(): Promise<Song[]> {
        return this.song.find({
            where: {
                isListZing: true,
            },
        });
    }

    async listSong(): Promise<Song[]> {
        return this.song.find({
            where: {
                isListSong: true,
            },
        });
    }

    async listNewSong(): Promise<Song[]> {
        return this.song.find({
            where: {
                isListNewSong: true,
            },
        });
    }

    async listMV(): Promise<Song[]> {
        return this.song.find({
            where: {
                isListMv: true,
            },
        });
    }
}
