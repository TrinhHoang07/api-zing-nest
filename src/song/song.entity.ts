import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('song')
export class Song extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    name: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    des: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    src: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    date: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    percent: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    color: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    time: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    type: string;

    @Column({
        type: 'boolean',
        default: false,
    })
    isListMv: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isListNewSong: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isListSong: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isListZing: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isTopWeek: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isZingChart: boolean;
}
