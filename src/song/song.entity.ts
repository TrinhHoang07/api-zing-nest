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
    src?: string;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    ph: string;

    @Column({
        type: 'int',
        default: 0,
    })
    count: number;

    @Column({
        type: 'nvarchar',
        default: '',
    })
    date: string;

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
        type: 'boolean',
        default: false,
    })
    isBolero: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isCorner: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isEvents: boolean;

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
    isMixtape: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isNewSongEveryDay: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isNewSongN2: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isNewSong: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isOutStandingTop100: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isPodCard: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isTodayChoice: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isTop100: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isTop100Asian: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isTop100HT: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isTop100USUK: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    isTop100VN: boolean;

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
