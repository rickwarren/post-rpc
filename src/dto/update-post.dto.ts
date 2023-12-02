import * as protoscript from 'protoscript';
import { CommentDto } from './comment.dto';


export class UpdatePostDto {
  id: number;
  authorId: number;
  message: string;
  attachment: string;
  comments: CommentDto[];
  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}
