import { CreateSavedPostDto, DeleteSavedPostResponseDto, GetSavedPostsResponseDto, SaveId, SavedPostDto, SavedPostProto, createSavedPostProto } from '../protos/saved-post.pb.ts';
import { getDataSource } from '../data-source.ts';
import { SavedPost } from '../entity/saved-post.entity.ts';


const savedPostProto: SavedPostProto = {
    getSavedPosts: async (id: SaveId): Promise<GetSavedPostsResponseDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(SavedPost);
        const posts = await postRepo.manager.find(SavedPost, { where: { userId: id.id }});
        if(posts.length <= 0) {
            return { savedPosts: [] }
        }
        return { savedPosts: posts };
    },
    getSavedPost: async (id: SaveId): Promise<SavedPostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(SavedPost);
        const post = await postRepo.manager.findOne(SavedPost, { where: { id: id.id }});
        if(!post) {
            throw Error('Post not found');
        }
        return post;
    },
    createSavedPost: async (data: CreateSavedPostDto): Promise<SavedPostDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(SavedPost);
        const post = await postRepo.manager.save(SavedPost, data);
        if(!post) {
            throw Error('unable to create post');
        }
        return post;
    },
    deleteSavedPost: async (id: SaveId): Promise<DeleteSavedPostResponseDto> => {
        const AppDataSource = await getDataSource();
        const postRepo = AppDataSource.getRepository(SavedPost);
        const result = await postRepo.manager.delete(SavedPost, { where: { id: id.id }});
        if(!result) {
            throw Error('Unable to delete user');
        }
        return { success: true };
    }
  };
  
  export const savedPostProtoHandler = createSavedPostProto(savedPostProto);