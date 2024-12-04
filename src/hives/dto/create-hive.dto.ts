import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateHiveDto {
  @IsString()
  @IsNotEmpty()
  apiaryId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  status?: string;
}

export class UpdateHiveDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
