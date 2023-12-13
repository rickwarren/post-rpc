import { CommentDto } from './comment.dto';

export class PostDto {
  id: string;
  authorId: string;
  locationId: string;
  message: string;
  attachment: string;
  comments: CommentDto[];
  createdAt: string;
  updatedAt: string;
}
