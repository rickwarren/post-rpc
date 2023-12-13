import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as protoscript from "protoscript";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  authorId: string;

  @Column()
  postId: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  attachment: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'NOW()'
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'NOW()',
    onUpdate: 'NOW()'
  })
  updatedAt: string;
}
