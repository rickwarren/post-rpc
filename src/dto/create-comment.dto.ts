import { PostDto } from './post.dto';

export class CreateCommentDto {
  authorId: number;
  message: string;
  attachment: string;
  postId: number;
}
