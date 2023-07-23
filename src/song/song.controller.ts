import { Controller, Get, Post, Body, Delete, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
        console.log('data: ', data);

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

    @UseGuards(JwtAuthGuard)
    @Delete('/delete')
    async deletById(@Body() data) {
        return await this.songService.deleteById(data.id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/update')
    async updateById(@Body() data) {
        console.log('data', data);
        return await this.songService.updateById(data.body.id, data.body.data);
    }
}
