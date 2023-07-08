import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Role as RoleEnum } from 'src/common/enums/role.enum';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: RoleEnum;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'userId',
  })
  user: User;
}
