import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehicleDto } from 'src/domain/dtos/vehicle.dto';
import { VehicleEntity } from 'src/domain/entities/vehicle.entity';
import logger from 'src/logger';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async fetchAll(): Promise<VehicleEntity[]> {
    logger.info('Get all vehicles')
    return this.vehicleService.findAll();
  }

  @Post('seed')
  async seedVehicles(): Promise<VehicleEntity[]> {
    return this.vehicleService.createDefaultVehicles();
  }

  @Post()
  async createVehicle(@Body() vehicle: VehicleDto): Promise<VehicleEntity> {
    logger.info('Create a new vehicle')
    return this.vehicleService.createNewVehicle(vehicle);
  }  

}
