import { PostDto } from './post.dto';

export class CreateCommentDto {
  authorId: string;
  message: string;
  attachment: string;
  postId: string;
}
