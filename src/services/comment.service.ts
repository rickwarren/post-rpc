import { getDataSource } from '../data-source.ts';
import { CommentProto, createCommentProto } from '../protos/comment.pb.ts';
import { Comment } from '../entity/comment.entity.ts';
import { CreateCommentDto } from '../dto/create-comment.dto.ts';
import { CommentDto } from '../dto/comment.dto.ts';
import { UpdateCommentDto } from '../dto/update-comment.dto.ts';
import { GetCommentsResponseDto } from '../dto/getCommentsResponse.dto.ts';
import { PostId } from '../dto/postId.dto.ts';
import { UserId } from '../dto/userId.dto.ts';
import { DeleteCommentResponseDto } from '../dto/deleteCommentResponse.dto.ts';

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
    getCommentsForPost: async (id: PostId): Promise<GetCommentsResponseDto> => {
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
    deleteComment: async (id: UserId): Promise<DeleteCommentResponseDto> => {
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