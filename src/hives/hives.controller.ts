import { Controller, Delete, Get, Post } from '@nestjs/common';
import { HivesService } from './hives.service';

@Controller('hives')
export class HivesController {
    constructor( private readonly hivesService: HivesService ){}

    @Get()

    @Get(':id')

    @Post()

    @Patch(':id')

    @Delete()
}