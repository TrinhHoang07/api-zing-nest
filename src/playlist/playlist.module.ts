import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';

@Module({
    controllers: [PlaylistController],
    providers: [PlaylistService],
    exports: [PlaylistService],
    imports: [TypeOrmModule.forFeature([Playlist])],
})
export class PlaylistModule {}
