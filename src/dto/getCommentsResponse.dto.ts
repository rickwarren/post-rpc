import { Comment } from "../protos/comment.pb.ts";

export class GetCommentsResponseDto {
    comments: Comment[];
}