import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHiveDto, UpdateHiveDto } from './dto/create-hive.dto';
import { Hive } from './hives.entity';
import { Apiary } from '../apiaries/apiaries.entity';

@Injectable()
export class HivesService {
  constructor(
    @InjectRepository(Hive)
    private readonly hivesRepository: Repository<Hive>,
    @InjectRepository(Apiary)
    private readonly apiaryRepository: Repository<Apiary>,
  ) {}

  async getAllHives(): Promise<Hive[]> {
    return this.hivesRepository.find({ relations: ['apiary'] });
  }

  async getHiveById(id: string): Promise<Hive> {
    const hive = await this.hivesRepository.findOne({ 
      where: { id }, 
      relations: ['apiary'] 
    });
    if (!hive) {
      throw new NotFoundException(`Hive with ID "${id}" not found`);
    }
    return hive;
  }

  async createHive(createHiveDto: CreateHiveDto): Promise<Hive> {
    const { apiaryId, ...rest } = createHiveDto;

    const apiary = await this.apiaryRepository.findOne({ where: { id: apiaryId } });
    if (!apiary) throw new NotFoundException(`Apiary with ID "${apiaryId}" not found`);

    const hive = this.hivesRepository.create({ ...rest, apiary });
    return this.hivesRepository.save(hive);
  }

  async updateHive(id: string, updateHiveDto: UpdateHiveDto): Promise<Hive> {
    const hive = await this.getHiveById(id);
    Object.assign(hive, updateHiveDto);
    return this.hivesRepository.save(hive);
  }

  async removeHive(id: string): Promise<void> {
    const hive = await this.getHiveById(id);
    await this.hivesRepository.remove(hive);
  }
}
