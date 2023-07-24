import { Module } from '@nestjs/common';
import { PlaylistSongController } from './playlist_song.controller';
import { PlaylistSongService } from './playlist_song.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistSong } from './playlist_song.entity';

@Module({
    controllers: [PlaylistSongController],
    providers: [PlaylistSongService],
    exports: [PlaylistSongService],
    imports: [TypeOrmModule.forFeature([PlaylistSong])],
})
export class PlaylistSongModule {}
