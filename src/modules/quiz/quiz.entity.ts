import {
  AfterInsert,
  AfterUpdate,
  BaseEntity,
  BeforeRemove,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

@Entity()
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: UUID;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @AfterInsert()
  onInsert() {
    console.log(`User created with id: ${this.id}`);
  }

  @AfterUpdate()
  onUpdate() {
    console.log(`User updated with id: ${this.id}`);
  }

  @BeforeRemove()
  onDelete() {
    console.log(`User deleted with id: ${this.id}`);
  }
}
