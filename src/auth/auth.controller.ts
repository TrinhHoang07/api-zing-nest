import { Controller, Get, Post, Request, UseGuards, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { UserCreateDto } from 'src/user/user-create.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        console.log('body', req.body);
        return this.authService.login(req.body.username, req.body.password);
    }

    @UsePipes(new ValidationPipe())
    @Post('/register')
    async register(@Body() data: UserCreateDto) {
        return this.authService.register(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    async test(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Get('/test')
    async test1(@Request() req) {
        return req.user;
    }
}
