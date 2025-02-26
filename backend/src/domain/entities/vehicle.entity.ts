import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;
}
