import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './user-create.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userEntity: Repository<User>) {}

    async createUser(user: UserCreateDto) {
        const newUser = new User();
        newUser.name = user.name;
        newUser.password = user.password;
        newUser.avatar = user.avatar;

        return await this.userEntity.save(newUser);
    }

    async findUserByNameAndPassword(name: string, password: string) {
        return await this.userEntity.findOneBy({
            name: name,
            password: password,
        });
    }

    async getAllUser(): Promise<User[]> {
        return await this.userEntity.find();
    }

    async deleteById(id) {
        console.log('id: ', id);

        return this.userEntity.softDelete({
            id: id,
        });
    }
}
