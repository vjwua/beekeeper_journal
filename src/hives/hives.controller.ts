import { Controller, Delete, Get, Post, Param, Patch, Body } from '@nestjs/common';
import { HivesService } from './hives.service';
import { CreateHiveDto, UpdateHiveDto } from './dto/create-hive.dto';
import { Hive } from './hives.entity';

@Controller('hives')
export class HivesController {
    constructor( private readonly hivesService: HivesService ){}

    @Get()
    findAll(): Promise<Hive[]> {
        return this.hivesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Hive> {
        return this.hivesService.findOne(id);
    }

    @Post()
    create(@Body() createHiveDto: CreateHiveDto): Promise<Hive> {
        return this.hivesService.create(createHiveDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateHiveDto: UpdateHiveDto): Promise<Hive> {
        return this.hivesService.update(id, updateHiveDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.hivesService.remove(id);
    }
}