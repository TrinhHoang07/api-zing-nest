import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongController } from './song.controller';
import { Song } from './song.entity';
import { SongService } from './song.service';

@Module({
    controllers: [SongController],
    providers: [SongService],
    imports: [TypeOrmModule.forFeature([Song])],
    exports: [SongService],
})
export class SongModule {}
