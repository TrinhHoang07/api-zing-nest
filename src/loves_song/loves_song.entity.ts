import { Song } from 'src/song/song.entity';
import { User } from 'src/user/user.entity';
import {
    BaseEntity,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('loves_song')
export class LoveSong extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Song, (song) => song.id)
    song_: number;

    @ManyToOne(() => User, (user) => user.id)
    user_: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
