import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Post } from './entity/post.entity.ts';
import { Comment } from './entity/comment.entity.ts';
import { SavedPost } from './entity/saved-post.entity.ts';
import { Notification } from './entity/notification.entity.ts';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'root',
  password: 'root',
  database: 'post',
  synchronize: true,
  logging: true,
  entities: [Comment, Post, SavedPost, Notification],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};