import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PlaylistSongService } from './playlist_song.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('playlist_song')
export class PlaylistSongController {
    constructor(private playlistSongService: PlaylistSongService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/playlist/:id')
    async getPlaylistSongById(@Param('id') id: string): Promise<any> {
        return await this.playlistSongService.getPlaylistSongById(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/add-playlist-song')
    async addPlaylistSong(@Body() data: { song_id: number; playlist_id: number }) {
        console.log(data);

        return await this.playlistSongService.addPlaylistSong(data);
    }

    @Post('/add-playlist-song-ids')
    async addPlaylistSongByIds(@Body() data: { song_id: number; playlist_ids: number[] }) {
        return await this.playlistSongService.addPlaylistSongByIds(data);
    }
}
