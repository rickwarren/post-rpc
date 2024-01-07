import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as protoscript from "protoscript";
import { Comment } from './comment.entity.ts';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  authorId: string;

  @Column()
  locationId: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  attachment: string;

  @OneToMany(() => Comment, comment => comment.postId)
  @JoinColumn()
  comments: Comment[];
  
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'NOW()',
    onUpdate: 'NOW()'
  })
  updatedAt: string;
}
