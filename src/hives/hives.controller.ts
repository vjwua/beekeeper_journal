import { Controller, Delete, Get, Post, Param, Body, Render, Res } from '@nestjs/common';
import { HivesService } from './hives.service';
import { ApiariesService } from '../apiaries/apiaries.service';
import { CreateHiveDto, UpdateHiveDto } from './dto/create-hive.dto';
import { Hive } from './hives.entity';
import { Response } from 'express';
  
@Controller('hives')
export class HivesController {
    constructor( 
        private readonly hivesService: HivesService,
        private readonly apiariesService: ApiariesService
    ) {}

    @Get()
    @Render('my_hives')
    async getHiveListPage() {
        const my_hives = await this.hivesService.getAllHives();
        return { my_hives };
    }

    @Get('/create_hive')
    @Render('create_hive') 
    async getHiveCreatePage() {
        const apiaries = await this.apiariesService.getAllApiaries();
        return { apiaries };
    }  

    @Post('/create_hive')
    async createHive(
        @Body() createHiveDto: CreateHiveDto,
        @Res() res: Response,
    ) {
        await this.hivesService.createHive(createHiveDto);
        return res.redirect('/hives');
    }

    @Get('/:id/update_hive')
    @Render('update_hive') 
    async getHiveUpdatePage(@Param('id') id: string) {
        const hive = await this.hivesService.getHiveById(id);
        const apiaries = await this.apiariesService.getAllApiaries();
        return { hive, apiaries };
    }

    @Post('/:id/update_hive')
    async updateHive(
        @Param('id') id: string, 
        @Body() updateHiveDto: UpdateHiveDto,
        @Res() res: Response,
    ) {
        await this.hivesService.updateHive(id, updateHiveDto);
        return res.redirect('/hives');
    }

    @Get(':id/delete_hive')
    async removeHive(
        @Param('id') id: string, 
        @Res() res: Response,
    ) {
        await this.hivesService.removeHive(id);
        return res.redirect('/hives');
    }

    @Get(':id')
    getHiveById(@Param('id') id: string): Promise<Hive> {
        return this.hivesService.getHiveById(id);
    }
}