import { PostProto, createPostProto } from '../protos/Post.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Post } from '../entity/post.entity.ts';
import { GetPostsResponseDto } from '../dto/getPostsResponse.dto.ts';
import { PostId } from '../dto/postId.dto.ts';
import { CreatePostDto } from '../dto/create-Post.dto.ts';
import { UpdatePostDto } from '../dto/update-Post.dto.ts';
import { DeletePostResponseDto } from '../dto/deletePostResponse.dto.ts';
import { PostDto } from '../dto/Post.dto.ts';

const postProto: PostProto = {
    getPosts: async (EmptyPost): Promise<GetPostsResponseDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const posts = await postRepo.manager.find(Post);
        return { posts: posts };
    },
    getPost: async (postId: PostId): Promise<PostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        return await postRepo.manager.findOneBy(Post, { id: postId.id });
    },
    createPost: async (data: CreatePostDto): Promise<PostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        return await postRepo.manager.save(Post, data);
    },
    updatePost: async (data: UpdatePostDto): Promise<PostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const post = await postRepo.manager.update(
            Post,
            { id: data.id },
            data,
          );
          return post.raw;
    },
    deletePost: async (postId: PostId): Promise<DeletePostResponseDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        if (await postRepo.manager.delete(Post, { id: postId.id })) {
            return { success: true }
        } else {
            return { success: false };
        }
    }
  };
  
  export const postProtoHandler = createPostProto(postProto);