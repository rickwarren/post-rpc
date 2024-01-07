import { PostProto, createPostProto } from '../protos/post.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Post } from '../entity/post.entity.ts';
import { PostDto } from '../dto/post.dto.ts';
import { CreatePostDto } from '../dto/create-post.dto.ts';
import { UpdatePostDto } from '../dto/update-post.dto.ts';
import { LocationId } from '../dto/locationId.dto.ts';
import { GetPostsResponseDto } from '../dto/getPostsResponse.dto.ts';
import { PostId } from '../dto/postId.dto.ts';
import { DeletePostResponseDto } from '../dto/deletePostResponse.dto.ts';


const postProto: PostProto = {
    getPosts: async (LocationId): Promise<GetPostsResponseDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const posts = await postRepo.manager.find(Post, { where: { locationId: LocationId.id }, order: { createdAt: 'DESC' }});
        if(posts.length <= 0) {
            return { posts: [] }
        }
        return { posts: posts };
    },
    getPost: async (postId: PostId): Promise<PostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const post = await postRepo.manager.findOne(Post, { where: { id: postId.id }});
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
            throw Error('unable to create post');
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
        if(!post.raw) {
            throw Error('Unable to save post');
        }
        return post.raw;
    },
    deletePost: async (PostId): Promise<DeletePostResponseDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(Post);
        const result = await postRepo.manager.delete(Post, { where: { id: PostId.id }});
        if(!result) {
            throw Error('Unable to delete user');
        }
        return { success: true };
    }
  };
  
  export const postProtoHandler = createPostProto(postProto);