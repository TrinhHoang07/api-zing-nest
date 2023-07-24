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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
