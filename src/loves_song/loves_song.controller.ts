import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { LoveSongService } from './loves_song.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('loves_song')
export class LoveSongController {
    constructor(private loveSongService: LoveSongService) {}

    @Get('/love-song/:id')
    async getLoveSongById(@Param('id') id: string) {
        return this.loveSongService.getLoveSongByUserId(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('/add-love-song')
    async addLoveSong(@Body() data: { id_song: number; id_user: number }) {
        console.log(data);

        return await this.loveSongService.addLoveSong(data);
    }
}
