import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfigAsync } from './config/typeorm.config';
import { SongModule } from './song/song.module';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';
import { PlaylistSongModule } from './playlist_song/playlist_song.module';
import { LoveSongModule } from './loves_song/loves_song.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync(TypeOrmConfigAsync),
        SongModule,
        AuthModule,
        UserModule,
        PlaylistModule,
        PlaylistSongModule,
        LoveSongModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
