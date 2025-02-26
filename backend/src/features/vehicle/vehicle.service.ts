import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleDto } from 'src/domain/dtos/vehicle.dto';
import { VehicleEntity } from 'src/domain/entities/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
  constructor(@InjectRepository(VehicleEntity) private repo: Repository<VehicleEntity>) {}

  async findAll(): Promise<VehicleEntity[]> {
    return this.repo.find();
  }

  async createNewVehicle(vehicle: VehicleDto): Promise<VehicleEntity> {
    const newVehicle = this.repo.create(vehicle);
    return this.repo.save(newVehicle);
  }

  async createDefaultVehicles(): Promise<VehicleEntity[]> {
    const defaultVehicles = [
      { make: 'Ferrari', model: '812 Superfast', year: 2017 },
      { make: 'Ferrari', model: '488 Pista', year: 2019 },
      { make: 'Audi', model: 'RS6', year: 2020 },
      { make: 'Audi', model: 'RS3', year: 2018 },
      { make: 'Mercedes', model: 'CLA45s', year: 2021 },
    ];

    const newVehicles = this.repo.create(defaultVehicles);
    return this.repo.save(newVehicles);
  }
}
