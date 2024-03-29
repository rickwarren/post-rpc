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
  posts: PostDto[];
}

export interface DeletePostResponseDto {
  success: boolean;
}

export interface EmptyPost {}

export interface LocationId {
  id: string;
}

export interface PostId {
  id: string;
}

export interface UpdatePostDto {
  id: string;
  authorId: string;
  locationId: string;
  message: string;
  attachment: string;
  comments: CommDto[];
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostDto {
  authorId: string;
  locationId: string;
  message: string;
  attachment: string;
}

export interface PostDto {
  id: string;
  authorId: string;
  locationId: string;
  message: string;
  attachment: string;
  comments: CommDto[];
  createdAt: string;
  updatedAt: string;
}

export interface CommDto {
  id: string;
  authorId: string;
  message: string;
  attachment: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

//========================================//
//       PostProto Protobuf Client        //
//========================================//

export async function getPosts(
  locationId: LocationId,
  config?: ClientConfiguration,
): Promise<GetPostsResponseDto> {
  const response = await PBrequest(
    "/PostProto/getPosts",
    LocationId.encode(locationId),
    config,
  );
  return GetPostsResponseDto.decode(response);
}

export async function getAllPosts(
  emptyPost: EmptyPost,
  config?: ClientConfiguration,
): Promise<GetPostsResponseDto> {
  const response = await PBrequest(
    "/PostProto/getAllPosts",
    EmptyPost.encode(emptyPost),
    config,
  );
  return GetPostsResponseDto.decode(response);
}

export async function getPost(
  postId: PostId,
  config?: ClientConfiguration,
): Promise<PostDto> {
  const response = await PBrequest(
    "/PostProto/getPost",
    PostId.encode(postId),
    config,
  );
  return PostDto.decode(response);
}

export async function createPost(
  createPostDto: CreatePostDto,
  config?: ClientConfiguration,
): Promise<PostDto> {
  const response = await PBrequest(
    "/PostProto/createPost",
    CreatePostDto.encode(createPostDto),
    config,
  );
  return PostDto.decode(response);
}

export async function updatePost(
  updatePostDto: UpdatePostDto,
  config?: ClientConfiguration,
): Promise<PostDto> {
  const response = await PBrequest(
    "/PostProto/updatePost",
    UpdatePostDto.encode(updatePostDto),
    config,
  );
  return PostDto.decode(response);
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
  locationId: LocationId,
  config?: ClientConfiguration,
): Promise<GetPostsResponseDto> {
  const response = await JSONrequest(
    "/PostProto/getPosts",
    LocationIdJSON.encode(locationId),
    config,
  );
  return GetPostsResponseDtoJSON.decode(response);
}

export async function getAllPostsJSON(
  emptyPost: EmptyPost,
  config?: ClientConfiguration,
): Promise<GetPostsResponseDto> {
  const response = await JSONrequest(
    "/PostProto/getAllPosts",
    EmptyPostJSON.encode(emptyPost),
    config,
  );
  return GetPostsResponseDtoJSON.decode(response);
}

export async function getPostJSON(
  postId: PostId,
  config?: ClientConfiguration,
): Promise<PostDto> {
  const response = await JSONrequest(
    "/PostProto/getPost",
    PostIdJSON.encode(postId),
    config,
  );
  return PostDtoJSON.decode(response);
}

export async function createPostJSON(
  createPostDto: CreatePostDto,
  config?: ClientConfiguration,
): Promise<PostDto> {
  const response = await JSONrequest(
    "/PostProto/createPost",
    CreatePostDtoJSON.encode(createPostDto),
    config,
  );
  return PostDtoJSON.decode(response);
}

export async function updatePostJSON(
  updatePostDto: UpdatePostDto,
  config?: ClientConfiguration,
): Promise<PostDto> {
  const response = await JSONrequest(
    "/PostProto/updatePost",
    UpdatePostDtoJSON.encode(updatePostDto),
    config,
  );
  return PostDtoJSON.decode(response);
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
    locationId: LocationId,
    context: Context,
  ) => Promise<GetPostsResponseDto> | GetPostsResponseDto;
  getAllPosts: (
    emptyPost: EmptyPost,
    context: Context,
  ) => Promise<GetPostsResponseDto> | GetPostsResponseDto;
  getPost: (postId: PostId, context: Context) => Promise<PostDto> | PostDto;
  createPost: (
    createPostDto: CreatePostDto,
    context: Context,
  ) => Promise<PostDto> | PostDto;
  updatePost: (
    updatePostDto: UpdatePostDto,
    context: Context,
  ) => Promise<PostDto> | PostDto;
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
        input: { protobuf: LocationId, json: LocationIdJSON },
        output: {
          protobuf: GetPostsResponseDto,
          json: GetPostsResponseDtoJSON,
        },
      },
      getAllPosts: {
        name: "getAllPosts",
        handler: service.getAllPosts,
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
        output: { protobuf: PostDto, json: PostDtoJSON },
      },
      createPost: {
        name: "createPost",
        handler: service.createPost,
        input: { protobuf: CreatePostDto, json: CreatePostDtoJSON },
        output: { protobuf: PostDto, json: PostDtoJSON },
      },
      updatePost: {
        name: "updatePost",
        handler: service.updatePost,
        input: { protobuf: UpdatePostDto, json: UpdatePostDtoJSON },
        output: { protobuf: PostDto, json: PostDtoJSON },
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
      writer.writeRepeatedMessage(1, msg.posts as any, PostDto._writeMessage);
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
          const m = PostDto.initialize();
          reader.readMessage(m, PostDto._readMessage);
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

export const LocationId = {
  /**
   * Serializes LocationId to protobuf.
   */
  encode: function (msg: PartialDeep<LocationId>): Uint8Array {
    return LocationId._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes LocationId from protobuf.
   */
  decode: function (bytes: ByteSource): LocationId {
    return LocationId._readMessage(
      LocationId.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes LocationId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<LocationId>): LocationId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<LocationId>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: LocationId,
    reader: protoscript.BinaryReader,
  ): LocationId {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
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
      id: "",
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
      writer.writeString(1, msg.id);
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
          msg.id = reader.readString();
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
      id: "",
      authorId: "",
      locationId: "",
      message: "",
      attachment: "",
      comments: [],
      createdAt: "",
      updatedAt: "",
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
      writer.writeString(1, msg.id);
    }
    if (msg.authorId) {
      writer.writeString(2, msg.authorId);
    }
    if (msg.locationId) {
      writer.writeString(3, msg.locationId);
    }
    if (msg.message) {
      writer.writeString(4, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(5, msg.attachment);
    }
    if (msg.comments?.length) {
      writer.writeRepeatedMessage(
        6,
        msg.comments as any,
        CommDto._writeMessage,
      );
    }
    if (msg.createdAt) {
      writer.writeString(7, msg.createdAt);
    }
    if (msg.updatedAt) {
      writer.writeString(8, msg.updatedAt);
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
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.authorId = reader.readString();
          break;
        }
        case 3: {
          msg.locationId = reader.readString();
          break;
        }
        case 4: {
          msg.message = reader.readString();
          break;
        }
        case 5: {
          msg.attachment = reader.readString();
          break;
        }
        case 6: {
          const m = CommDto.initialize();
          reader.readMessage(m, CommDto._readMessage);
          msg.comments.push(m);
          break;
        }
        case 7: {
          msg.createdAt = reader.readString();
          break;
        }
        case 8: {
          msg.updatedAt = reader.readString();
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
      authorId: "",
      locationId: "",
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
      writer.writeString(1, msg.authorId);
    }
    if (msg.locationId) {
      writer.writeString(2, msg.locationId);
    }
    if (msg.message) {
      writer.writeString(3, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(4, msg.attachment);
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
          msg.authorId = reader.readString();
          break;
        }
        case 2: {
          msg.locationId = reader.readString();
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
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const PostDto = {
  /**
   * Serializes PostDto to protobuf.
   */
  encode: function (msg: PartialDeep<PostDto>): Uint8Array {
    return PostDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PostDto from protobuf.
   */
  decode: function (bytes: ByteSource): PostDto {
    return PostDto._readMessage(
      PostDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PostDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PostDto>): PostDto {
    return {
      id: "",
      authorId: "",
      locationId: "",
      message: "",
      attachment: "",
      comments: [],
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PostDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.authorId) {
      writer.writeString(2, msg.authorId);
    }
    if (msg.locationId) {
      writer.writeString(3, msg.locationId);
    }
    if (msg.message) {
      writer.writeString(4, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(5, msg.attachment);
    }
    if (msg.comments?.length) {
      writer.writeRepeatedMessage(
        6,
        msg.comments as any,
        CommDto._writeMessage,
      );
    }
    if (msg.createdAt) {
      writer.writeString(7, msg.createdAt);
    }
    if (msg.updatedAt) {
      writer.writeString(8, msg.updatedAt);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PostDto,
    reader: protoscript.BinaryReader,
  ): PostDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.authorId = reader.readString();
          break;
        }
        case 3: {
          msg.locationId = reader.readString();
          break;
        }
        case 4: {
          msg.message = reader.readString();
          break;
        }
        case 5: {
          msg.attachment = reader.readString();
          break;
        }
        case 6: {
          const m = CommDto.initialize();
          reader.readMessage(m, CommDto._readMessage);
          msg.comments.push(m);
          break;
        }
        case 7: {
          msg.createdAt = reader.readString();
          break;
        }
        case 8: {
          msg.updatedAt = reader.readString();
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

export const CommDto = {
  /**
   * Serializes CommDto to protobuf.
   */
  encode: function (msg: PartialDeep<CommDto>): Uint8Array {
    return CommDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CommDto from protobuf.
   */
  decode: function (bytes: ByteSource): CommDto {
    return CommDto._readMessage(
      CommDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CommDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CommDto>): CommDto {
    return {
      id: "",
      authorId: "",
      message: "",
      attachment: "",
      postId: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CommDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.authorId) {
      writer.writeString(2, msg.authorId);
    }
    if (msg.message) {
      writer.writeString(4, msg.message);
    }
    if (msg.attachment) {
      writer.writeString(5, msg.attachment);
    }
    if (msg.postId) {
      writer.writeString(6, msg.postId);
    }
    if (msg.createdAt) {
      writer.writeString(7, msg.createdAt);
    }
    if (msg.updatedAt) {
      writer.writeString(8, msg.updatedAt);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CommDto,
    reader: protoscript.BinaryReader,
  ): CommDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.authorId = reader.readString();
          break;
        }
        case 4: {
          msg.message = reader.readString();
          break;
        }
        case 5: {
          msg.attachment = reader.readString();
          break;
        }
        case 6: {
          msg.postId = reader.readString();
          break;
        }
        case 7: {
          msg.createdAt = reader.readString();
          break;
        }
        case 8: {
          msg.updatedAt = reader.readString();
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
      json["posts"] = msg.posts.map(PostDtoJSON._writeMessage);
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
        const m = PostDtoJSON.initialize();
        PostDtoJSON._readMessage(m, item);
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

export const LocationIdJSON = {
  /**
   * Serializes LocationId to JSON.
   */
  encode: function (msg: PartialDeep<LocationId>): string {
    return JSON.stringify(LocationIdJSON._writeMessage(msg));
  },

  /**
   * Deserializes LocationId from JSON.
   */
  decode: function (json: string): LocationId {
    return LocationIdJSON._readMessage(
      LocationIdJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes LocationId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<LocationId>): LocationId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<LocationId>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: LocationId, json: any): LocationId {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
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
      id: "",
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
      msg.id = _id_;
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
      id: "",
      authorId: "",
      locationId: "",
      message: "",
      attachment: "",
      comments: [],
      createdAt: "",
      updatedAt: "",
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
    if (msg.locationId) {
      json["locationId"] = msg.locationId;
    }
    if (msg.message) {
      json["message"] = msg.message;
    }
    if (msg.attachment) {
      json["attachment"] = msg.attachment;
    }
    if (msg.comments?.length) {
      json["comments"] = msg.comments.map(CommDtoJSON._writeMessage);
    }
    if (msg.createdAt) {
      json["createdAt"] = msg.createdAt;
    }
    if (msg.updatedAt) {
      json["updatedAt"] = msg.updatedAt;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: UpdatePostDto, json: any): UpdatePostDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _authorId_ = json["authorId"];
    if (_authorId_) {
      msg.authorId = _authorId_;
    }
    const _locationId_ = json["locationId"];
    if (_locationId_) {
      msg.locationId = _locationId_;
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
        const m = CommDtoJSON.initialize();
        CommDtoJSON._readMessage(m, item);
        msg.comments.push(m);
      }
    }
    const _createdAt_ = json["createdAt"];
    if (_createdAt_) {
      msg.createdAt = _createdAt_;
    }
    const _updatedAt_ = json["updatedAt"];
    if (_updatedAt_) {
      msg.updatedAt = _updatedAt_;
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
      authorId: "",
      locationId: "",
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
    if (msg.locationId) {
      json["locationId"] = msg.locationId;
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
      msg.authorId = _authorId_;
    }
    const _locationId_ = json["locationId"];
    if (_locationId_) {
      msg.locationId = _locationId_;
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

export const PostDtoJSON = {
  /**
   * Serializes PostDto to JSON.
   */
  encode: function (msg: PartialDeep<PostDto>): string {
    return JSON.stringify(PostDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes PostDto from JSON.
   */
  decode: function (json: string): PostDto {
    return PostDtoJSON._readMessage(PostDtoJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes PostDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PostDto>): PostDto {
    return {
      id: "",
      authorId: "",
      locationId: "",
      message: "",
      attachment: "",
      comments: [],
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<PostDto>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.authorId) {
      json["authorId"] = msg.authorId;
    }
    if (msg.locationId) {
      json["locationId"] = msg.locationId;
    }
    if (msg.message) {
      json["message"] = msg.message;
    }
    if (msg.attachment) {
      json["attachment"] = msg.attachment;
    }
    if (msg.comments?.length) {
      json["comments"] = msg.comments.map(CommDtoJSON._writeMessage);
    }
    if (msg.createdAt) {
      json["createdAt"] = msg.createdAt;
    }
    if (msg.updatedAt) {
      json["updatedAt"] = msg.updatedAt;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: PostDto, json: any): PostDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _authorId_ = json["authorId"];
    if (_authorId_) {
      msg.authorId = _authorId_;
    }
    const _locationId_ = json["locationId"];
    if (_locationId_) {
      msg.locationId = _locationId_;
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
        const m = CommDtoJSON.initialize();
        CommDtoJSON._readMessage(m, item);
        msg.comments.push(m);
      }
    }
    const _createdAt_ = json["createdAt"];
    if (_createdAt_) {
      msg.createdAt = _createdAt_;
    }
    const _updatedAt_ = json["updatedAt"];
    if (_updatedAt_) {
      msg.updatedAt = _updatedAt_;
    }
    return msg;
  },
};

export const CommDtoJSON = {
  /**
   * Serializes CommDto to JSON.
   */
  encode: function (msg: PartialDeep<CommDto>): string {
    return JSON.stringify(CommDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CommDto from JSON.
   */
  decode: function (json: string): CommDto {
    return CommDtoJSON._readMessage(CommDtoJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes CommDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CommDto>): CommDto {
    return {
      id: "",
      authorId: "",
      message: "",
      attachment: "",
      postId: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<CommDto>): Record<string, unknown> {
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
    if (msg.createdAt) {
      json["createdAt"] = msg.createdAt;
    }
    if (msg.updatedAt) {
      json["updatedAt"] = msg.updatedAt;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CommDto, json: any): CommDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _authorId_ = json["authorId"];
    if (_authorId_) {
      msg.authorId = _authorId_;
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
      msg.postId = _postId_;
    }
    const _createdAt_ = json["createdAt"];
    if (_createdAt_) {
      msg.createdAt = _createdAt_;
    }
    const _updatedAt_ = json["updatedAt"];
    if (_updatedAt_) {
      msg.updatedAt = _updatedAt_;
    }
    return msg;
  },
};
