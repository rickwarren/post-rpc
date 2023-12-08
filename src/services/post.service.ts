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
        if (posts.length < 1) {
            throw Error('Posts not found');
        }
        return { posts: posts };
    },
    getPost: async (postId: PostId): Promise<PostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const post = await postRepo.manager.findOneBy(Post, { id: postId.id });
        if(!post) {
            throw Error('Post not found');
        }
        return post;
    },
    createPost: async (data: CreatePostDto): Promise<PostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const post = await postRepo.manager.save(Post, data);
        if(!post) {
            throw Error('Post not created');
        }
        return post;
    },
    updatePost: async (data: UpdatePostDto): Promise<PostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const post = await postRepo.manager.update(
            Post,
            { id: data.id },
            data,
          );
        if(!post) {
            throw Error('Post not updated');
        }
        return post.raw;
    },
    deletePost: async (postId: PostId): Promise<DeletePostResponseDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const post = await postRepo.manager.delete(Post, {where : { id: postId.id }})
        if(!post) {
            throw Error('Post not deleted');
        }
        return { success: true }
    }
  };
  
  export const postProtoHandler = createPostProto(postProto);