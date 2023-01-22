/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** columns and relationships of "article" */
export type Article = {
  __typename?: 'Article';
  authorId: Scalars['String'];
  caption: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  fileId?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "article" */
export type ArticleAggregate = {
  __typename?: 'ArticleAggregate';
  aggregate?: Maybe<ArticleAggregateFields>;
  nodes: Array<Article>;
};

/** aggregate fields of "article" */
export type ArticleAggregateFields = {
  __typename?: 'ArticleAggregateFields';
  avg?: Maybe<ArticleAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ArticleMaxFields>;
  min?: Maybe<ArticleMinFields>;
  stddev?: Maybe<ArticleStddevFields>;
  stddevPop?: Maybe<ArticleStddev_PopFields>;
  stddevSamp?: Maybe<ArticleStddev_SampFields>;
  sum?: Maybe<ArticleSumFields>;
  varPop?: Maybe<ArticleVar_PopFields>;
  varSamp?: Maybe<ArticleVar_SampFields>;
  variance?: Maybe<ArticleVarianceFields>;
};


/** aggregate fields of "article" */
export type ArticleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ArticleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type ArticleAvgFields = {
  __typename?: 'ArticleAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "article". All fields are combined with a logical 'AND'. */
export type ArticleBoolExp = {
  _and?: InputMaybe<Array<ArticleBoolExp>>;
  _not?: InputMaybe<ArticleBoolExp>;
  _or?: InputMaybe<Array<ArticleBoolExp>>;
  authorId?: InputMaybe<StringComparisonExp>;
  caption?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  fileId?: InputMaybe<StringComparisonExp>;
  githubUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "article" */
export enum ArticleConstraint {
  /** unique or primary key constraint on columns "id" */
  ArticlePkey = 'article_pkey'
}

/** input type for incrementing numeric columns in table "article" */
export type ArticleIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "article" */
export type ArticleInsertInput = {
  authorId?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileId?: InputMaybe<Scalars['String']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ArticleMaxFields = {
  __typename?: 'ArticleMaxFields';
  authorId?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileId?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ArticleMinFields = {
  __typename?: 'ArticleMinFields';
  authorId?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileId?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "article" */
export type ArticleMutationResponse = {
  __typename?: 'ArticleMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Article>;
};

/** on_conflict condition type for table "article" */
export type ArticleOnConflict = {
  constraint: ArticleConstraint;
  update_columns?: Array<ArticleUpdateColumn>;
  where?: InputMaybe<ArticleBoolExp>;
};

/** Ordering options when selecting data from "article". */
export type ArticleOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  caption?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  githubUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: article */
export type ArticlePkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "article" */
export enum ArticleSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  GithubUrl = 'githubUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "article" */
export type ArticleSetInput = {
  authorId?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileId?: InputMaybe<Scalars['String']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ArticleStddevFields = {
  __typename?: 'ArticleStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type ArticleStddev_PopFields = {
  __typename?: 'ArticleStddev_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type ArticleStddev_SampFields = {
  __typename?: 'ArticleStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "article" */
export type ArticleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ArticleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ArticleStreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileId?: InputMaybe<Scalars['String']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type ArticleSumFields = {
  __typename?: 'ArticleSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "article" */
export enum ArticleUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  GithubUrl = 'githubUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

export type ArticleUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ArticleIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ArticleSetInput>;
  /** filter the rows which have to be updated */
  where: ArticleBoolExp;
};

/** aggregate var_pop on columns */
export type ArticleVar_PopFields = {
  __typename?: 'ArticleVar_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type ArticleVar_SampFields = {
  __typename?: 'ArticleVar_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type ArticleVarianceFields = {
  __typename?: 'ArticleVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "image" */
export type Image = {
  __typename?: 'Image';
  articleId: Scalars['String'];
  fileId: Scalars['String'];
  id: Scalars['Int'];
};

/** aggregated selection of "image" */
export type ImageAggregate = {
  __typename?: 'ImageAggregate';
  aggregate?: Maybe<ImageAggregateFields>;
  nodes: Array<Image>;
};

/** aggregate fields of "image" */
export type ImageAggregateFields = {
  __typename?: 'ImageAggregateFields';
  avg?: Maybe<ImageAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ImageMaxFields>;
  min?: Maybe<ImageMinFields>;
  stddev?: Maybe<ImageStddevFields>;
  stddevPop?: Maybe<ImageStddev_PopFields>;
  stddevSamp?: Maybe<ImageStddev_SampFields>;
  sum?: Maybe<ImageSumFields>;
  varPop?: Maybe<ImageVar_PopFields>;
  varSamp?: Maybe<ImageVar_SampFields>;
  variance?: Maybe<ImageVarianceFields>;
};


/** aggregate fields of "image" */
export type ImageAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ImageSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type ImageAvgFields = {
  __typename?: 'ImageAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "image". All fields are combined with a logical 'AND'. */
export type ImageBoolExp = {
  _and?: InputMaybe<Array<ImageBoolExp>>;
  _not?: InputMaybe<ImageBoolExp>;
  _or?: InputMaybe<Array<ImageBoolExp>>;
  articleId?: InputMaybe<StringComparisonExp>;
  fileId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "image" */
export enum ImageConstraint {
  /** unique or primary key constraint on columns "id" */
  ImagePkey = 'image_pkey'
}

/** input type for incrementing numeric columns in table "image" */
export type ImageIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "image" */
export type ImageInsertInput = {
  articleId?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type ImageMaxFields = {
  __typename?: 'ImageMaxFields';
  articleId?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type ImageMinFields = {
  __typename?: 'ImageMinFields';
  articleId?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "image" */
export type ImageMutationResponse = {
  __typename?: 'ImageMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Image>;
};

/** on_conflict condition type for table "image" */
export type ImageOnConflict = {
  constraint: ImageConstraint;
  update_columns?: Array<ImageUpdateColumn>;
  where?: InputMaybe<ImageBoolExp>;
};

/** Ordering options when selecting data from "image". */
export type ImageOrderBy = {
  articleId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: image */
export type ImagePkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "image" */
export enum ImageSelectColumn {
  /** column name */
  ArticleId = 'articleId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "image" */
export type ImageSetInput = {
  articleId?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type ImageStddevFields = {
  __typename?: 'ImageStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type ImageStddev_PopFields = {
  __typename?: 'ImageStddev_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type ImageStddev_SampFields = {
  __typename?: 'ImageStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "image" */
export type ImageStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ImageStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ImageStreamCursorValueInput = {
  articleId?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type ImageSumFields = {
  __typename?: 'ImageSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "image" */
export enum ImageUpdateColumn {
  /** column name */
  ArticleId = 'articleId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id'
}

export type ImageUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ImageIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ImageSetInput>;
  /** filter the rows which have to be updated */
  where: ImageBoolExp;
};

/** aggregate var_pop on columns */
export type ImageVar_PopFields = {
  __typename?: 'ImageVar_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type ImageVar_SampFields = {
  __typename?: 'ImageVar_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type ImageVarianceFields = {
  __typename?: 'ImageVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "userProfile" */
export type UserProfile = {
  __typename?: 'UserProfile';
  age: Scalars['String'];
  career: Scalars['String'];
  introduction: Scalars['String'];
  language: Scalars['String'];
  occupation: Scalars['String'];
  userId: Scalars['String'];
};

/** aggregated selection of "userProfile" */
export type UserProfileAggregate = {
  __typename?: 'UserProfileAggregate';
  aggregate?: Maybe<UserProfileAggregateFields>;
  nodes: Array<UserProfile>;
};

/** aggregate fields of "userProfile" */
export type UserProfileAggregateFields = {
  __typename?: 'UserProfileAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserProfileMaxFields>;
  min?: Maybe<UserProfileMinFields>;
};


/** aggregate fields of "userProfile" */
export type UserProfileAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserProfileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "userProfile". All fields are combined with a logical 'AND'. */
export type UserProfileBoolExp = {
  _and?: InputMaybe<Array<UserProfileBoolExp>>;
  _not?: InputMaybe<UserProfileBoolExp>;
  _or?: InputMaybe<Array<UserProfileBoolExp>>;
  age?: InputMaybe<StringComparisonExp>;
  career?: InputMaybe<StringComparisonExp>;
  introduction?: InputMaybe<StringComparisonExp>;
  language?: InputMaybe<StringComparisonExp>;
  occupation?: InputMaybe<StringComparisonExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "userProfile" */
export enum UserProfileConstraint {
  /** unique or primary key constraint on columns "userId" */
  UserProfilePkey = 'userProfile_pkey'
}

/** input type for inserting data into table "userProfile" */
export type UserProfileInsertInput = {
  age?: InputMaybe<Scalars['String']>;
  career?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UserProfileMaxFields = {
  __typename?: 'UserProfileMaxFields';
  age?: Maybe<Scalars['String']>;
  career?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserProfileMinFields = {
  __typename?: 'UserProfileMinFields';
  age?: Maybe<Scalars['String']>;
  career?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "userProfile" */
export type UserProfileMutationResponse = {
  __typename?: 'UserProfileMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserProfile>;
};

/** on_conflict condition type for table "userProfile" */
export type UserProfileOnConflict = {
  constraint: UserProfileConstraint;
  update_columns?: Array<UserProfileUpdateColumn>;
  where?: InputMaybe<UserProfileBoolExp>;
};

/** Ordering options when selecting data from "userProfile". */
export type UserProfileOrderBy = {
  age?: InputMaybe<OrderBy>;
  career?: InputMaybe<OrderBy>;
  introduction?: InputMaybe<OrderBy>;
  language?: InputMaybe<OrderBy>;
  occupation?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: userProfile */
export type UserProfilePkColumnsInput = {
  userId: Scalars['String'];
};

/** select columns of table "userProfile" */
export enum UserProfileSelectColumn {
  /** column name */
  Age = 'age',
  /** column name */
  Career = 'career',
  /** column name */
  Introduction = 'introduction',
  /** column name */
  Language = 'language',
  /** column name */
  Occupation = 'occupation',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "userProfile" */
export type UserProfileSetInput = {
  age?: InputMaybe<Scalars['String']>;
  career?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "userProfile" */
export type UserProfileStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserProfileStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserProfileStreamCursorValueInput = {
  age?: InputMaybe<Scalars['String']>;
  career?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "userProfile" */
export enum UserProfileUpdateColumn {
  /** column name */
  Age = 'age',
  /** column name */
  Career = 'career',
  /** column name */
  Introduction = 'introduction',
  /** column name */
  Language = 'language',
  /** column name */
  Occupation = 'occupation',
  /** column name */
  UserId = 'userId'
}

export type UserProfileUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserProfileSetInput>;
  /** filter the rows which have to be updated */
  where: UserProfileBoolExp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  email: Scalars['String'];
  id: Scalars['String'];
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "article" */
  deleteArticle?: Maybe<ArticleMutationResponse>;
  /** delete single row from the table: "article" */
  deleteArticleByPk?: Maybe<Article>;
  /** delete data from the table: "image" */
  deleteImage?: Maybe<ImageMutationResponse>;
  /** delete single row from the table: "image" */
  deleteImageByPk?: Maybe<Image>;
  /** delete data from the table: "userProfile" */
  deleteUserProfile?: Maybe<UserProfileMutationResponse>;
  /** delete single row from the table: "userProfile" */
  deleteUserProfileByPk?: Maybe<UserProfile>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** insert data into the table: "article" */
  insertArticle?: Maybe<ArticleMutationResponse>;
  /** insert a single row into the table: "article" */
  insertArticleOne?: Maybe<Article>;
  /** insert data into the table: "image" */
  insertImage?: Maybe<ImageMutationResponse>;
  /** insert a single row into the table: "image" */
  insertImageOne?: Maybe<Image>;
  /** insert data into the table: "userProfile" */
  insertUserProfile?: Maybe<UserProfileMutationResponse>;
  /** insert a single row into the table: "userProfile" */
  insertUserProfileOne?: Maybe<UserProfile>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** update data of the table: "article" */
  updateArticle?: Maybe<ArticleMutationResponse>;
  /** update single row of the table: "article" */
  updateArticleByPk?: Maybe<Article>;
  /** update multiples rows of table: "article" */
  updateArticleMany?: Maybe<Array<Maybe<ArticleMutationResponse>>>;
  /** update data of the table: "image" */
  updateImage?: Maybe<ImageMutationResponse>;
  /** update single row of the table: "image" */
  updateImageByPk?: Maybe<Image>;
  /** update multiples rows of table: "image" */
  updateImageMany?: Maybe<Array<Maybe<ImageMutationResponse>>>;
  /** update data of the table: "userProfile" */
  updateUserProfile?: Maybe<UserProfileMutationResponse>;
  /** update single row of the table: "userProfile" */
  updateUserProfileByPk?: Maybe<UserProfile>;
  /** update multiples rows of table: "userProfile" */
  updateUserProfileMany?: Maybe<Array<Maybe<UserProfileMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteArticleArgs = {
  where: ArticleBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteArticleByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteImageArgs = {
  where: ImageBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteImageByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUserProfileArgs = {
  where: UserProfileBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserProfileByPkArgs = {
  userId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUsersByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertArticleArgs = {
  objects: Array<ArticleInsertInput>;
  onConflict?: InputMaybe<ArticleOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertArticleOneArgs = {
  object: ArticleInsertInput;
  onConflict?: InputMaybe<ArticleOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertImageArgs = {
  objects: Array<ImageInsertInput>;
  onConflict?: InputMaybe<ImageOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertImageOneArgs = {
  object: ImageInsertInput;
  onConflict?: InputMaybe<ImageOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserProfileArgs = {
  objects: Array<UserProfileInsertInput>;
  onConflict?: InputMaybe<UserProfileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserProfileOneArgs = {
  object: UserProfileInsertInput;
  onConflict?: InputMaybe<UserProfileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateArticleArgs = {
  _inc?: InputMaybe<ArticleIncInput>;
  _set?: InputMaybe<ArticleSetInput>;
  where: ArticleBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateArticleByPkArgs = {
  _inc?: InputMaybe<ArticleIncInput>;
  _set?: InputMaybe<ArticleSetInput>;
  pk_columns: ArticlePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateArticleManyArgs = {
  updates: Array<ArticleUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateImageArgs = {
  _inc?: InputMaybe<ImageIncInput>;
  _set?: InputMaybe<ImageSetInput>;
  where: ImageBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateImageByPkArgs = {
  _inc?: InputMaybe<ImageIncInput>;
  _set?: InputMaybe<ImageSetInput>;
  pk_columns: ImagePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateImageManyArgs = {
  updates: Array<ImageUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserProfileArgs = {
  _set?: InputMaybe<UserProfileSetInput>;
  where: UserProfileBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserProfileByPkArgs = {
  _set?: InputMaybe<UserProfileSetInput>;
  pk_columns: UserProfilePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserProfileManyArgs = {
  updates: Array<UserProfileUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "article" */
  article: Array<Article>;
  /** fetch aggregated fields from the table: "article" */
  articleAggregate: ArticleAggregate;
  /** fetch data from the table: "article" using primary key columns */
  articleByPk?: Maybe<Article>;
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch aggregated fields from the table: "image" */
  imageAggregate: ImageAggregate;
  /** fetch data from the table: "image" using primary key columns */
  imageByPk?: Maybe<Image>;
  /** fetch data from the table: "userProfile" */
  userProfile: Array<UserProfile>;
  /** fetch aggregated fields from the table: "userProfile" */
  userProfileAggregate: UserProfileAggregate;
  /** fetch data from the table: "userProfile" using primary key columns */
  userProfileByPk?: Maybe<UserProfile>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
};


export type Query_RootArticleArgs = {
  distinctOn?: InputMaybe<Array<ArticleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ArticleOrderBy>>;
  where?: InputMaybe<ArticleBoolExp>;
};


export type Query_RootArticleAggregateArgs = {
  distinctOn?: InputMaybe<Array<ArticleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ArticleOrderBy>>;
  where?: InputMaybe<ArticleBoolExp>;
};


export type Query_RootArticleByPkArgs = {
  id: Scalars['Int'];
};


export type Query_RootImageArgs = {
  distinctOn?: InputMaybe<Array<ImageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ImageOrderBy>>;
  where?: InputMaybe<ImageBoolExp>;
};


export type Query_RootImageAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ImageOrderBy>>;
  where?: InputMaybe<ImageBoolExp>;
};


export type Query_RootImageByPkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserProfileArgs = {
  distinctOn?: InputMaybe<Array<UserProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserProfileOrderBy>>;
  where?: InputMaybe<UserProfileBoolExp>;
};


export type Query_RootUserProfileAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserProfileOrderBy>>;
  where?: InputMaybe<UserProfileBoolExp>;
};


export type Query_RootUserProfileByPkArgs = {
  userId: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersByPkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "article" */
  article: Array<Article>;
  /** fetch aggregated fields from the table: "article" */
  articleAggregate: ArticleAggregate;
  /** fetch data from the table: "article" using primary key columns */
  articleByPk?: Maybe<Article>;
  /** fetch data from the table in a streaming manner: "article" */
  articleStream: Array<Article>;
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch aggregated fields from the table: "image" */
  imageAggregate: ImageAggregate;
  /** fetch data from the table: "image" using primary key columns */
  imageByPk?: Maybe<Image>;
  /** fetch data from the table in a streaming manner: "image" */
  imageStream: Array<Image>;
  /** fetch data from the table: "userProfile" */
  userProfile: Array<UserProfile>;
  /** fetch aggregated fields from the table: "userProfile" */
  userProfileAggregate: UserProfileAggregate;
  /** fetch data from the table: "userProfile" using primary key columns */
  userProfileByPk?: Maybe<UserProfile>;
  /** fetch data from the table in a streaming manner: "userProfile" */
  userProfileStream: Array<UserProfile>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
};


export type Subscription_RootArticleArgs = {
  distinctOn?: InputMaybe<Array<ArticleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ArticleOrderBy>>;
  where?: InputMaybe<ArticleBoolExp>;
};


export type Subscription_RootArticleAggregateArgs = {
  distinctOn?: InputMaybe<Array<ArticleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ArticleOrderBy>>;
  where?: InputMaybe<ArticleBoolExp>;
};


export type Subscription_RootArticleByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootArticleStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ArticleStreamCursorInput>>;
  where?: InputMaybe<ArticleBoolExp>;
};


export type Subscription_RootImageArgs = {
  distinctOn?: InputMaybe<Array<ImageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ImageOrderBy>>;
  where?: InputMaybe<ImageBoolExp>;
};


export type Subscription_RootImageAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ImageOrderBy>>;
  where?: InputMaybe<ImageBoolExp>;
};


export type Subscription_RootImageByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootImageStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ImageStreamCursorInput>>;
  where?: InputMaybe<ImageBoolExp>;
};


export type Subscription_RootUserProfileArgs = {
  distinctOn?: InputMaybe<Array<UserProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserProfileOrderBy>>;
  where?: InputMaybe<UserProfileBoolExp>;
};


export type Subscription_RootUserProfileAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserProfileOrderBy>>;
  where?: InputMaybe<UserProfileBoolExp>;
};


export type Subscription_RootUserProfileByPkArgs = {
  userId: Scalars['String'];
};


export type Subscription_RootUserProfileStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<UserProfileStreamCursorInput>>;
  where?: InputMaybe<UserProfileBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type UploadArticleMutationVariables = Exact<{
  title: Scalars['String'];
  caption: Scalars['String'];
  authorId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  githubUrl: Scalars['String'];
  fileId: Scalars['String'];
}>;


export type UploadArticleMutation = { __typename?: 'mutation_root', insertArticle?: { __typename?: 'ArticleMutationResponse', returning: Array<{ __typename?: 'Article', id: number }> } | null };

export type TestQueryVariables = Exact<{
  _ilike: Scalars['String'];
}>;


export type TestQuery = { __typename?: 'query_root', article: Array<{ __typename?: 'Article', title: string, githubUrl?: string | null, fileId?: string | null, createdAt: any, caption: string, authorId: string }> };

export type GetPortFolioByIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetPortFolioByIdQuery = { __typename?: 'query_root', article: Array<{ __typename?: 'Article', fileId?: string | null, githubUrl?: string | null, title: string, createdAt: any, id: number }> };


export const UploadArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"caption"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"githubUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"caption"},"value":{"kind":"Variable","name":{"kind":"Name","value":"caption"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"githubUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"githubUrl"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UploadArticleMutation, UploadArticleMutationVariables>;
export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"test"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_ilike"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_ilike"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"githubUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fileId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;
export const GetPortFolioByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPortFolioById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileId"}},{"kind":"Field","name":{"kind":"Name","value":"githubUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetPortFolioByIdQuery, GetPortFolioByIdQueryVariables>;