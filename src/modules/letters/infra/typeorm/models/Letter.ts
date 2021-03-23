import {
  ObjectID,
  ObjectIdColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';


@Entity('letters')
class Letter {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  message: string;

  read: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.read = false;
  }
}

export default Letter;
