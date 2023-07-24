import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoveSongController } from './loves_song.controller';
import { LoveSongService } from './loves_song.service';
import { LoveSong } from './loves_song.entity';

@Module({
    controllers: [LoveSongController],
    providers: [LoveSongService],
    exports: [LoveSongService],
    imports: [TypeOrmModule.forFeature([LoveSong])],
})
export class LoveSongModule {}
