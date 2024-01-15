import { 
    CommentDto, 
    CommentId, 
    CommentPostId, 
    CommentProto, 
    CreateCommentDto, 
    DeleteCommentResponseDto,
    GetCommentsResponseDto, 
    UpdateCommentDto, 
    createCommentProto 
} from '../protos/comment.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Comment } from '../entity/comment.entity.ts';


const commentProto: CommentProto = {
    getComments: async (EmptyProfile): Promise<GetCommentsResponseDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comments = await commentRepo.manager.find(Comment);
        if(comments.length <= 0) {
            throw Error('Comments not found');
        }
        return { comments: comments };
    },
    getCommentsForPost: async (id: CommentPostId): Promise<GetCommentsResponseDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comments = await commentRepo.manager.find(Comment, { where: { postId: id.id }, order: { createdAt: 'ASC' }});
        if(comments.length <= 0) {
            return { comments: [] };
        }
        return { comments: comments };
    },
    createComment: async (data: CreateCommentDto): Promise<CommentDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comment =  await commentRepo.manager.save(Comment, data);
        if(!comment) {
            throw Error('Comment not created');
        }
        return comment;
    },
    updateComment: async (data: UpdateCommentDto): Promise<CommentDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comment = await commentRepo.manager.save(Comment, data);
        if(!comment) {
            throw Error('Comment not updated');
        }
        return comment;
    },
    deleteComment: async (id: CommentId): Promise<DeleteCommentResponseDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comment = await commentRepo.manager.delete(Comment, { where: { ownerId: id.id }});
        if (!comment) {
            throw Error('Profile not deleted');
        }
        return { success: true }
    }
};

export const commentProtoHandler = createCommentProto(commentProto);