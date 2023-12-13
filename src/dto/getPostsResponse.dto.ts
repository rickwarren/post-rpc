import { Post } from "../protos/post.pb.ts";

export class GetPostsResponseDto {
    posts: Post[];
}