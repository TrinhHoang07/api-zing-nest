import { Controller, Get, Post, Body } from '@nestjs/common';
import { Song } from './song.entity';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
    constructor(private readonly songService: SongService) {}

    @Get('/all')
    async allSong(): Promise<Song[]> {
        return await this.songService.allSongs();
    }

    @Post('/create')
    async createSong(@Body() data: Song) {
        return await this.songService.createSong(data);
    }

    @Get('/zingchart')
    async getzingChart(): Promise<Song[]> {
        return await this.songService.zingChart();
    }

    @Get('/topweek')
    async getTopWeek(): Promise<Song[]> {
        return await this.songService.topWeek();
    }

    @Get('/listzing')
    async getListZing(): Promise<Song[]> {
        return await this.songService.listZing();
    }

    @Get('/listsong')
    async getListSong(): Promise<Song[]> {
        return await this.songService.listSong();
    }

    @Get('/listnewsong')
    async getListNewSong(): Promise<Song[]> {
        return await this.songService.listNewSong();
    }

    @Get('/listmv')
    async getListMV(): Promise<Song[]> {
        return await this.songService.listMV();
    }
}
