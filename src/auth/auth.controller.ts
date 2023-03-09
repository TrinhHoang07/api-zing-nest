import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        console.log('body', req.body);
        return this.authService.generateToken(req.body);
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
