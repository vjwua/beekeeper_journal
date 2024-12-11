import { Controller, Delete, Get, Post, Param, Patch, Body, Render } from '@nestjs/common';
import { ApiariesService } from './apiaries.service';
import { CreateApiaryDto, UpdateApiaryDto } from './dto/create-apiary.dto';
import { Apiary } from './apiaries.entity';

@Controller('apiaries')
export class ApiariesController {
    constructor( private readonly apiariesService: ApiariesService ){}

    @Get()
    @Render('apiaries')
    async getAllApiaries() {
        const apiaries = await this.apiariesService.findAll();
        return { apiaries };
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Apiary> {
        return this.apiariesService.findOne(id);
    }

    @Post()
    create(@Body() createHiveDto: CreateApiaryDto): Promise<Apiary> {
        return this.apiariesService.create(createHiveDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateHiveDto: UpdateApiaryDto): Promise<Apiary> {
        return this.apiariesService.update(id, updateHiveDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.apiariesService.remove(id);
    }
}
