import { CommentProto, createCommentProto } from '../protos/Comment.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Comment } from '../entity/Comment.entity.ts';
import { GetCommentsResponseDto } from '../dto/getCommentsResponse.dto.ts';
import { DeleteCommentResponseDto } from '../dto/deleteCommentResponse.dto.ts';
import { CreateCommentDto } from '../dto/create-Comment.dto.ts';
import { UpdateCommentDto } from '../dto/update-Comment.dto.ts';
import { CommentId } from '../dto/commentId.dto.ts';

const CommentProto: CommentProto = {
    getComments: async (EmptyComment): Promise<GetCommentsResponseDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comments = await commentRepo.manager.find(Comment);
        return { comments: comments };
    },
    getComment: async (id: CommentId): Promise<Comment> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        return await commentRepo.manager.findOneBy(Comment,{ id: id.id });
    },
    createComment: async (data: CreateCommentDto): Promise<Comment> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        return await commentRepo.manager.save(Comment, data);
    },
    updateComment: async (updateCommentDto: UpdateCommentDto): Promise<Comment> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        return await commentRepo.manager.save(Comment, updateCommentDto);
    },
    deleteComment: async (id: CommentId): Promise<DeleteCommentResponseDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        if(await commentRepo.manager.delete(Comment, { ownerId: id.id })) {
            return { success: true }
        }
        return { success: false };
    }
};

export const CommentProtoHandler = createCommentProto(CommentProto);