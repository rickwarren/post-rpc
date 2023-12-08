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
        if (comments.length < 1) {
            throw Error('Comments not found');
        }
        return { comments: comments };
    },
    getComment: async (id: CommentId): Promise<Comment> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comment = await commentRepo.manager.findOneBy(Comment,{ id: id.id });
        if (!comment) {
            throw Error('Comment not found');
        }
        return comment;
    },
    createComment: async (data: CreateCommentDto): Promise<Comment> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comment = await commentRepo.manager.save(Comment, data);
        if(!comment) {
            throw Error('Comment not created');
        }
        return comment;
    },
    updateComment: async (updateCommentDto: UpdateCommentDto): Promise<Comment> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comment = await commentRepo.manager.save(Comment, updateCommentDto);
        if(!comment) {
            throw Error('Comment not uodated');
        }
        return comment;
    },
    deleteComment: async (id: CommentId): Promise<DeleteCommentResponseDto> => {
        const AppDataSource = await getDataSource();
        const commentRepo = AppDataSource.getRepository(Comment);
        const comment = await commentRepo.manager.delete(Comment, { where: { ownerId: id.id }});
        if(!comment) {
            throw Error('Comment not deleted');
        }
        return { success: true }
    }
};

export const CommentProtoHandler = createCommentProto(CommentProto);