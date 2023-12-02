// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/post.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";

//========================================//
//                 Types                  //
//========================================//

export interface GetPostsResponseDto {
  posts: Post[];
}

export interface DeletePostResponseDto {
  success: boolean;
}

export interface EmptyPost {}

export interface PostId {
  id: number;
}

export interface UpdatePostDto {
  id: number;
  authorId: number;
  message: string;
  attachment: string;
  comments: CommentDto[];
  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}

export interface CreatePostDto {
  authorId: number;
  message: string;
  attachment: string;
}

export interface Post {
  id: number;
  authorId: number;
  message: string;
  attachment: string;
  comments: CommentDto[];
  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}

export interface CommentDto {
  id: number;
  authorId: number;
  message: string;
  attachment: string;
  postId: number;
}

//========================================//
//       PostProto Protobuf Client        //
//========================================//

export async function getPosts(
  emptyPost: EmptyPost,
  config?: ClientConfiguration,
): Promise<GetPostsResponseDto> {
  const response = await PBrequest(
    "/PostProto/getPosts",
    EmptyPost.encode(emptyPost),
    config,
  );
  return GetPostsResponseDto.decode(response);
}

export async function getPost(
  postId: PostId,
  config?: ClientConfiguration,
): Promise<Post> {
  const response = await PBrequest(
    "/PostProto/getPost",
    PostId.encode(postId),
    config,
  );
  return Post.decode(response);
}

export async function createPost(
  createPostDto: CreatePostDto,
  config?: ClientConfiguration,
): Promise<Post> {
  const response = await PBrequest(
    "/PostProto/createPost",
    CreatePostDto.encode(createPostDto),
    config,
  );
  return Post.decode(response);
}

export async function updatePost(
  updatePostDto: UpdatePostDto,
  config?: ClientConfiguration,
): Promise<Post> {
  const response = await PBrequest(
    "/PostProto/updatePost",
    UpdatePostDto.encode(updatePostDto),
    config,
  );
  return Post.decode(response);
}

export async function deletePost(
  postId: PostId,
  config?: ClientConfiguration,
): Promise<DeletePostResponseDto> {
  const response = await PBrequest(
    "/PostProto/deletePost",
    PostId.encode(postId),
    config,
  );
  return DeletePostResponseDto.decode(response);
}

//========================================//
//         PostProto JSON Client          //
//========================================//

export async function getPostsJSON(
  emptyPost: EmptyPost,
  config?: ClientConfiguration,
): Promise<GetPostsResponseDto> {
  const response = await JSONrequest(
    "/PostProto/getPosts",
    EmptyPostJSON.encode(emptyPost),
    config,
  );
  return GetPostsResponseDtoJSON.decode(response);
}

export async function getPostJSON(
  postId: PostId,
  config?: ClientConfiguration,
): Promise<Post> {
  const response = await JSONrequest(
    "/PostProto/getPost",
    PostIdJSON.encode(postId),
    config,
  );
  return PostJSON.decode(response);
}

export async function createPostJSON(
  createPostDto: CreatePostDto,
  config?: ClientConfiguration,
): Promise<Post> {
  const response = await JSONrequest(
    "/PostProto/createPost",
    CreatePostDtoJSON.encode(createPostDto),
    config,
  );
  return PostJSON.decode(response);
}

export async function updatePostJSON(
  updatePostDto: UpdatePostDto,
  config?: ClientConfiguration,
): Promise<Post> {
  const response = await JSONrequest(
    "/PostProto/updatePost",
    UpdatePostDtoJSON.encode(updatePostDto),
    config,
  );
  return PostJSON.decode(response);
}

export async function deletePostJSON(
  postId: PostId,
  config?: ClientConfiguration,
): Promise<DeletePostResponseDto> {
  const response = await JSONrequest(
    "/PostProto/deletePost",
    PostIdJSON.encode(postId),
    config,
  );
  return DeletePostResponseDtoJSON.decode(response);
}

//========================================//
//               PostProto                //
//========================================//

export interface PostProto<Context = unknown> {
  getPosts: (
    emptyPost: EmptyPost,
    context: Context,
  ) => Promise<GetPostsResponseDto> | GetPostsResponseDto;
  getPost: (postId: PostId, context: Context) => Promise<Post> | Post;
  createPost: (
    createPostDto: CreatePostDto,
    context: Context,
  ) => Promise<Post> | Post;
  updatePost: (
    updatePostDto: UpdatePostDto,
    context: Context,
  ) => Promise<Post> | Post;
  deletePost: (
    postId: PostId,
    context: Context,
  ) => Promise<DeletePostResponseDto> | DeletePostResponseDto;
}

export function createPostProto<Context>(service: PostProto<Context>) {
  return {
    name: "PostProto",
    methods: {
      getPosts: {
        name: "getPosts",
        handler: service.getPosts,
        input: { protobuf: EmptyPost, json: EmptyPostJSON },
        output: {
          protobuf: GetPostsResponseDto,
          json: GetPostsResponseDtoJSON,
        },
      },
      getPost: {
        name: "getPost",
        handler: service.getPost,
        input: { protobuf: PostId, json: PostIdJSON },
        output: { protobuf: Post, json: PostJSON },
      },
      createPost: {
        name: "createPost",
        handler: service.createPost,
        input: { protobuf: CreatePostDto, json: CreatePostDtoJSON },
        output: { protobuf: Post, json: PostJSON },
      },
      updatePost: {
        name: "updatePost",
        handler: service.updatePost,
        input: { protobuf: UpdatePostDto, json: UpdatePostDtoJSON },
        output: { protobuf: Post, json: PostJSON },
      },
      deletePost: {
        name: "deletePost",
        handler: service.deletePost,
        input: { protobuf: PostId, json: PostIdJSON },
        output: {
          protobuf: DeletePostResponseDto,
          json: DeletePostResponseDtoJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const GetPostsResponseDto = {
  /**
   * Serializes GetPostsResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<GetPostsResponseDto>): Uint8Array {
    return GetPostsResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetPostsResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): GetPostsResponseDto {
    return GetPostsResponseDto._readMessage(
      GetPostsResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetPostsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetPostsResponseDto>,
  ): GetPostsResponseDto {
    return {
      posts: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetPostsResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.posts?.length) {
      writer.writeRepeatedMessage(1, msg.posts as any, Post._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetPostsResponseDto,
    reader: protoscript.BinaryReader,
  ): GetPostsResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = Post.initialize();
          reader.readMessage(m, Post._readMessage);
          msg.posts.push(m);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const DeletePostResponseDto = {
  /**
   * Serializes DeletePostResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<DeletePostResponseDto>): Uint8Array {
    return DeletePostResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeletePostResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): DeletePostResponseDto {
    return DeletePostResponseDto._readMessage(
      DeletePostResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeletePostResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeletePostResponseDto>,
  ): DeletePostResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeletePostResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.success) {
      writer.writeBool(1, msg.success);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeletePostResponseDto,
    reader: protoscript.BinaryReader,
  ): DeletePostResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.success = reader.readBool();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const EmptyPost = {
  /**
   * Serializes EmptyPost to protobuf.
   */
  encode: function (_msg?: PartialDeep<EmptyPost>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes EmptyPost from protobuf.
   */
  decode: function (_bytes?: ByteSource): EmptyPost {
    return {};
  },

  /**
   * Initializes EmptyPost with all fields set to their default value.
   */
  initialize: function (msg?: Partial<EmptyPost>): EmptyPost {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<EmptyPost>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: EmptyPost,
    _reader: protoscript.BinaryReader,
  ): EmptyPost {
    return _msg;
  },
};

export const PostId = {
  /**
   * Serializes PostId to protobuf.
   */
  encode: function (msg: PartialDeep<PostId>): Uint8Array {
    return PostId._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PostId from protobuf.
   */
  decode: function (bytes: ByteSource): PostId {
    return PostId._readMessage(
      PostId.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PostId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PostId>): PostId {
    return {
      id: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PostId>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeInt32(1, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PostId,
    reader: protoscript.BinaryReader,
  ): PostId {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readInt32();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const UpdatePostDto = {
  /**
   * Serializes UpdatePostDto to protobuf.
   */
  encode: function (msg: PartialDeep<UpdatePostDto>): Uint8Array {
    return UpdatePostDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdatePostDto from protobuf.
   */
  decode: function (bytes: ByteSource): UpdatePostDto {
    return UpdatePostDto._readMessage(
      UpdatePostDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdatePostDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdatePostDto>): UpdatePostDto {
    return {
      id: 0,
      authorId: 0,
      message: "",
      attachment: "",
      comments: [],
      createdAt: protoscript.Timestamp.initialize(),
      updatedAt: protoscript.Timestamp.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdatePostDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeInt32(1, msg.id);
    }
    if (msg.authorId) {
      writer.writeInt32(2, msg.authorId);
    }
    if (msg.message) {
      writer.writeString(3, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(4, msg.attachment);
    }
    if (msg.comments?.length) {
      writer.writeRepeatedMessage(
        5,
        msg.comments as any,
        CommentDto._writeMessage,
      );
    }
    if (msg.createdAt) {
      writer.writeMessage(
        6,
        msg.createdAt,
        protoscript.Timestamp._writeMessage,
      );
    }
    if (msg.updatedAt) {
      writer.writeMessage(
        7,
        msg.updatedAt,
        protoscript.Timestamp._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdatePostDto,
    reader: protoscript.BinaryReader,
  ): UpdatePostDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readInt32();
          break;
        }
        case 2: {
          msg.authorId = reader.readInt32();
          break;
        }
        case 3: {
          msg.message = reader.readString();
          break;
        }
        case 4: {
          msg.attachment = reader.readString();
          break;
        }
        case 5: {
          const m = CommentDto.initialize();
          reader.readMessage(m, CommentDto._readMessage);
          msg.comments.push(m);
          break;
        }
        case 6: {
          reader.readMessage(msg.createdAt, protoscript.Timestamp._readMessage);
          break;
        }
        case 7: {
          reader.readMessage(msg.updatedAt, protoscript.Timestamp._readMessage);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const CreatePostDto = {
  /**
   * Serializes CreatePostDto to protobuf.
   */
  encode: function (msg: PartialDeep<CreatePostDto>): Uint8Array {
    return CreatePostDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreatePostDto from protobuf.
   */
  decode: function (bytes: ByteSource): CreatePostDto {
    return CreatePostDto._readMessage(
      CreatePostDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreatePostDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreatePostDto>): CreatePostDto {
    return {
      authorId: 0,
      message: "",
      attachment: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreatePostDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.authorId) {
      writer.writeInt32(1, msg.authorId);
    }
    if (msg.message) {
      writer.writeString(2, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(3, msg.attachment);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreatePostDto,
    reader: protoscript.BinaryReader,
  ): CreatePostDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.authorId = reader.readInt32();
          break;
        }
        case 2: {
          msg.message = reader.readString();
          break;
        }
        case 3: {
          msg.attachment = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const Post = {
  /**
   * Serializes Post to protobuf.
   */
  encode: function (msg: PartialDeep<Post>): Uint8Array {
    return Post._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Post from protobuf.
   */
  decode: function (bytes: ByteSource): Post {
    return Post._readMessage(
      Post.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Post with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Post>): Post {
    return {
      id: 0,
      authorId: 0,
      message: "",
      attachment: "",
      comments: [],
      createdAt: protoscript.Timestamp.initialize(),
      updatedAt: protoscript.Timestamp.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Post>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeInt32(1, msg.id);
    }
    if (msg.authorId) {
      writer.writeInt32(2, msg.authorId);
    }
    if (msg.message) {
      writer.writeString(3, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(4, msg.attachment);
    }
    if (msg.comments?.length) {
      writer.writeRepeatedMessage(
        5,
        msg.comments as any,
        CommentDto._writeMessage,
      );
    }
    if (msg.createdAt) {
      writer.writeMessage(
        6,
        msg.createdAt,
        protoscript.Timestamp._writeMessage,
      );
    }
    if (msg.updatedAt) {
      writer.writeMessage(
        7,
        msg.updatedAt,
        protoscript.Timestamp._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Post, reader: protoscript.BinaryReader): Post {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readInt32();
          break;
        }
        case 2: {
          msg.authorId = reader.readInt32();
          break;
        }
        case 3: {
          msg.message = reader.readString();
          break;
        }
        case 4: {
          msg.attachment = reader.readString();
          break;
        }
        case 5: {
          const m = CommentDto.initialize();
          reader.readMessage(m, CommentDto._readMessage);
          msg.comments.push(m);
          break;
        }
        case 6: {
          reader.readMessage(msg.createdAt, protoscript.Timestamp._readMessage);
          break;
        }
        case 7: {
          reader.readMessage(msg.updatedAt, protoscript.Timestamp._readMessage);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const CommentDto = {
  /**
   * Serializes CommentDto to protobuf.
   */
  encode: function (msg: PartialDeep<CommentDto>): Uint8Array {
    return CommentDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CommentDto from protobuf.
   */
  decode: function (bytes: ByteSource): CommentDto {
    return CommentDto._readMessage(
      CommentDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CommentDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CommentDto>): CommentDto {
    return {
      id: 0,
      authorId: 0,
      message: "",
      attachment: "",
      postId: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CommentDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeInt32(1, msg.id);
    }
    if (msg.authorId) {
      writer.writeInt32(2, msg.authorId);
    }
    if (msg.message) {
      writer.writeString(3, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(4, msg.attachment);
    }
    if (msg.postId) {
      writer.writeInt32(5, msg.postId);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CommentDto,
    reader: protoscript.BinaryReader,
  ): CommentDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readInt32();
          break;
        }
        case 2: {
          msg.authorId = reader.readInt32();
          break;
        }
        case 3: {
          msg.message = reader.readString();
          break;
        }
        case 4: {
          msg.attachment = reader.readString();
          break;
        }
        case 5: {
          msg.postId = reader.readInt32();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const GetPostsResponseDtoJSON = {
  /**
   * Serializes GetPostsResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<GetPostsResponseDto>): string {
    return JSON.stringify(GetPostsResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetPostsResponseDto from JSON.
   */
  decode: function (json: string): GetPostsResponseDto {
    return GetPostsResponseDtoJSON._readMessage(
      GetPostsResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetPostsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetPostsResponseDto>,
  ): GetPostsResponseDto {
    return {
      posts: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetPostsResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.posts?.length) {
      json["posts"] = msg.posts.map(PostJSON._writeMessage);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetPostsResponseDto,
    json: any,
  ): GetPostsResponseDto {
    const _posts_ = json["posts"];
    if (_posts_) {
      for (const item of _posts_) {
        const m = PostJSON.initialize();
        PostJSON._readMessage(m, item);
        msg.posts.push(m);
      }
    }
    return msg;
  },
};

export const DeletePostResponseDtoJSON = {
  /**
   * Serializes DeletePostResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<DeletePostResponseDto>): string {
    return JSON.stringify(DeletePostResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeletePostResponseDto from JSON.
   */
  decode: function (json: string): DeletePostResponseDto {
    return DeletePostResponseDtoJSON._readMessage(
      DeletePostResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeletePostResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeletePostResponseDto>,
  ): DeletePostResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeletePostResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.success) {
      json["success"] = msg.success;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeletePostResponseDto,
    json: any,
  ): DeletePostResponseDto {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const EmptyPostJSON = {
  /**
   * Serializes EmptyPost to JSON.
   */
  encode: function (_msg?: PartialDeep<EmptyPost>): string {
    return "{}";
  },

  /**
   * Deserializes EmptyPost from JSON.
   */
  decode: function (_json?: string): EmptyPost {
    return {};
  },

  /**
   * Initializes EmptyPost with all fields set to their default value.
   */
  initialize: function (msg?: Partial<EmptyPost>): EmptyPost {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<EmptyPost>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: EmptyPost, _json: any): EmptyPost {
    return msg;
  },
};

export const PostIdJSON = {
  /**
   * Serializes PostId to JSON.
   */
  encode: function (msg: PartialDeep<PostId>): string {
    return JSON.stringify(PostIdJSON._writeMessage(msg));
  },

  /**
   * Deserializes PostId from JSON.
   */
  decode: function (json: string): PostId {
    return PostIdJSON._readMessage(PostIdJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes PostId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PostId>): PostId {
    return {
      id: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<PostId>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: PostId, json: any): PostId {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = protoscript.parseNumber(_id_);
    }
    return msg;
  },
};

export const UpdatePostDtoJSON = {
  /**
   * Serializes UpdatePostDto to JSON.
   */
  encode: function (msg: PartialDeep<UpdatePostDto>): string {
    return JSON.stringify(UpdatePostDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdatePostDto from JSON.
   */
  decode: function (json: string): UpdatePostDto {
    return UpdatePostDtoJSON._readMessage(
      UpdatePostDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdatePostDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdatePostDto>): UpdatePostDto {
    return {
      id: 0,
      authorId: 0,
      message: "",
      attachment: "",
      comments: [],
      createdAt: protoscript.TimestampJSON.initialize(),
      updatedAt: protoscript.TimestampJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdatePostDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.authorId) {
      json["authorId"] = msg.authorId;
    }
    if (msg.message) {
      json["message"] = msg.message;
    }
    if (msg.attachment) {
      json["attachment"] = msg.attachment;
    }
    if (msg.comments?.length) {
      json["comments"] = msg.comments.map(CommentDtoJSON._writeMessage);
    }
    if (msg.createdAt && msg.createdAt.seconds && msg.createdAt.nanos) {
      json["createdAt"] = protoscript.serializeTimestamp(msg.createdAt);
    }
    if (msg.updatedAt && msg.updatedAt.seconds && msg.updatedAt.nanos) {
      json["updatedAt"] = protoscript.serializeTimestamp(msg.updatedAt);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: UpdatePostDto, json: any): UpdatePostDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = protoscript.parseNumber(_id_);
    }
    const _authorId_ = json["authorId"];
    if (_authorId_) {
      msg.authorId = protoscript.parseNumber(_authorId_);
    }
    const _message_ = json["message"];
    if (_message_) {
      msg.message = _message_;
    }
    const _attachment_ = json["attachment"];
    if (_attachment_) {
      msg.attachment = _attachment_;
    }
    const _comments_ = json["comments"];
    if (_comments_) {
      for (const item of _comments_) {
        const m = CommentDtoJSON.initialize();
        CommentDtoJSON._readMessage(m, item);
        msg.comments.push(m);
      }
    }
    const _createdAt_ = json["createdAt"];
    if (_createdAt_) {
      msg.createdAt = protoscript.parseTimestamp(_createdAt_);
    }
    const _updatedAt_ = json["updatedAt"];
    if (_updatedAt_) {
      msg.updatedAt = protoscript.parseTimestamp(_updatedAt_);
    }
    return msg;
  },
};

export const CreatePostDtoJSON = {
  /**
   * Serializes CreatePostDto to JSON.
   */
  encode: function (msg: PartialDeep<CreatePostDto>): string {
    return JSON.stringify(CreatePostDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreatePostDto from JSON.
   */
  decode: function (json: string): CreatePostDto {
    return CreatePostDtoJSON._readMessage(
      CreatePostDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreatePostDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreatePostDto>): CreatePostDto {
    return {
      authorId: 0,
      message: "",
      attachment: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreatePostDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.authorId) {
      json["authorId"] = msg.authorId;
    }
    if (msg.message) {
      json["message"] = msg.message;
    }
    if (msg.attachment) {
      json["attachment"] = msg.attachment;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CreatePostDto, json: any): CreatePostDto {
    const _authorId_ = json["authorId"];
    if (_authorId_) {
      msg.authorId = protoscript.parseNumber(_authorId_);
    }
    const _message_ = json["message"];
    if (_message_) {
      msg.message = _message_;
    }
    const _attachment_ = json["attachment"];
    if (_attachment_) {
      msg.attachment = _attachment_;
    }
    return msg;
  },
};

export const PostJSON = {
  /**
   * Serializes Post to JSON.
   */
  encode: function (msg: PartialDeep<Post>): string {
    return JSON.stringify(PostJSON._writeMessage(msg));
  },

  /**
   * Deserializes Post from JSON.
   */
  decode: function (json: string): Post {
    return PostJSON._readMessage(PostJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Post with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Post>): Post {
    return {
      id: 0,
      authorId: 0,
      message: "",
      attachment: "",
      comments: [],
      createdAt: protoscript.TimestampJSON.initialize(),
      updatedAt: protoscript.TimestampJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Post>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.authorId) {
      json["authorId"] = msg.authorId;
    }
    if (msg.message) {
      json["message"] = msg.message;
    }
    if (msg.attachment) {
      json["attachment"] = msg.attachment;
    }
    if (msg.comments?.length) {
      json["comments"] = msg.comments.map(CommentDtoJSON._writeMessage);
    }
    if (msg.createdAt && msg.createdAt.seconds && msg.createdAt.nanos) {
      json["createdAt"] = protoscript.serializeTimestamp(msg.createdAt);
    }
    if (msg.updatedAt && msg.updatedAt.seconds && msg.updatedAt.nanos) {
      json["updatedAt"] = protoscript.serializeTimestamp(msg.updatedAt);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Post, json: any): Post {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = protoscript.parseNumber(_id_);
    }
    const _authorId_ = json["authorId"];
    if (_authorId_) {
      msg.authorId = protoscript.parseNumber(_authorId_);
    }
    const _message_ = json["message"];
    if (_message_) {
      msg.message = _message_;
    }
    const _attachment_ = json["attachment"];
    if (_attachment_) {
      msg.attachment = _attachment_;
    }
    const _comments_ = json["comments"];
    if (_comments_) {
      for (const item of _comments_) {
        const m = CommentDtoJSON.initialize();
        CommentDtoJSON._readMessage(m, item);
        msg.comments.push(m);
      }
    }
    const _createdAt_ = json["createdAt"];
    if (_createdAt_) {
      msg.createdAt = protoscript.parseTimestamp(_createdAt_);
    }
    const _updatedAt_ = json["updatedAt"];
    if (_updatedAt_) {
      msg.updatedAt = protoscript.parseTimestamp(_updatedAt_);
    }
    return msg;
  },
};

export const CommentDtoJSON = {
  /**
   * Serializes CommentDto to JSON.
   */
  encode: function (msg: PartialDeep<CommentDto>): string {
    return JSON.stringify(CommentDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CommentDto from JSON.
   */
  decode: function (json: string): CommentDto {
    return CommentDtoJSON._readMessage(
      CommentDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CommentDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CommentDto>): CommentDto {
    return {
      id: 0,
      authorId: 0,
      message: "",
      attachment: "",
      postId: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CommentDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.authorId) {
      json["authorId"] = msg.authorId;
    }
    if (msg.message) {
      json["message"] = msg.message;
    }
    if (msg.attachment) {
      json["attachment"] = msg.attachment;
    }
    if (msg.postId) {
      json["postId"] = msg.postId;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CommentDto, json: any): CommentDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = protoscript.parseNumber(_id_);
    }
    const _authorId_ = json["authorId"];
    if (_authorId_) {
      msg.authorId = protoscript.parseNumber(_authorId_);
    }
    const _message_ = json["message"];
    if (_message_) {
      msg.message = _message_;
    }
    const _attachment_ = json["attachment"];
    if (_attachment_) {
      msg.attachment = _attachment_;
    }
    const _postId_ = json["postId"];
    if (_postId_) {
      msg.postId = protoscript.parseNumber(_postId_);
    }
    return msg;
  },
};
