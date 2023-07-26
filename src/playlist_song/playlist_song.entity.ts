import { Exclude } from 'class-transformer';
import { Playlist } from 'src/playlist/playlist.entity';
import { Song } from 'src/song/song.entity';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('playlist_song')
export class PlaylistSong extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Song, (song) => song.id)
    song_: number;

    @ManyToOne(() => Playlist, (playlist) => playlist.id)
    playlist_: number;

    @CreateDateColumn({
        select: false,
    })
    created_at: Date;

    @UpdateDateColumn({
        select: false,
    })
    updated_at: Date;

    @DeleteDateColumn({
        select: false,
    })
    deleted_at: Date;
}
