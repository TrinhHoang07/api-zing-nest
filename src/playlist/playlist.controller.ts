import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistCreateDto } from './playlist-create.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('playlist')
export class PlaylistController {
    constructor(private playlistService: PlaylistService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    @UsePipes(new ValidationPipe())
    async createPlaylist(@Body() data: PlaylistCreateDto) {
        console.log(data);

        return await this.playlistService.createPlaylist(data);
    }
}
