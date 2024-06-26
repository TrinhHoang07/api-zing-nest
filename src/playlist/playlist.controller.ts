import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, Get, Param } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistCreateDto } from './playlist-create.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Playlist } from './playlist.entity';

@Controller('playlist')
export class PlaylistController {
    constructor(private playlistService: PlaylistService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    @UsePipes(new ValidationPipe())
    async createPlaylist(@Body() data: PlaylistCreateDto) {
        return await this.playlistService.createPlaylist(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    async getAll(): Promise<Playlist[]> {
        return await this.playlistService.getAllPlaylists();
    }

    @Get('/all-admin')
    async getAllPlaylistAndIdUser() {
        return await this.playlistService.getAllPlaylistAndIdUser();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/playlist/:id')
    async getPlaylistById(@Param('id') id: string): Promise<Playlist[]> {
        return await this.playlistService.getPlaylistByUserId(+id);
    }
}
