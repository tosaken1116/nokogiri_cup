/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n        mutation uploadArticle(\n            $title: String!\n            $caption: String!\n            $authorId: String!\n            $createdAt: timestamptz!\n            $githubUrl: String!\n            $fileId: String!\n        ) {\n            insertArticle(\n                objects: {\n                    title: $title\n                    caption: $caption\n                    authorId: $authorId\n                    createdAt: $createdAt\n                    githubUrl: $githubUrl\n                    fileId: $fileId\n                }\n            ) {\n                returning {\n                    id\n                }\n            }\n        }\n    ": types.UploadArticleDocument,
    "\n    query test($_ilike: String!) {\n        article(where: { title: { _ilike: $_ilike } }, limit: 10) {\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n        }\n    }\n": types.TestDocument,
    "\n    query getPortFolioById($userId: String!) {\n        article(where: { authorId: { _eq: $userId } }) {\n            fileId\n            githubUrl\n            title\n            createdAt\n            id\n        }\n    }\n": types.GetPortFolioByIdDocument,
    "\n    query getArticleById($articleId: uuid!) {\n        article(where: { articleId: { _eq: $articleId } }, limit: 1) {\n            authorId\n            caption\n            createdAt\n            fileId\n            githubUrl\n            id\n            title\n        }\n    }\n": types.GetArticleByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation uploadArticle(\n            $title: String!\n            $caption: String!\n            $authorId: String!\n            $createdAt: timestamptz!\n            $githubUrl: String!\n            $fileId: String!\n        ) {\n            insertArticle(\n                objects: {\n                    title: $title\n                    caption: $caption\n                    authorId: $authorId\n                    createdAt: $createdAt\n                    githubUrl: $githubUrl\n                    fileId: $fileId\n                }\n            ) {\n                returning {\n                    id\n                }\n            }\n        }\n    "): (typeof documents)["\n        mutation uploadArticle(\n            $title: String!\n            $caption: String!\n            $authorId: String!\n            $createdAt: timestamptz!\n            $githubUrl: String!\n            $fileId: String!\n        ) {\n            insertArticle(\n                objects: {\n                    title: $title\n                    caption: $caption\n                    authorId: $authorId\n                    createdAt: $createdAt\n                    githubUrl: $githubUrl\n                    fileId: $fileId\n                }\n            ) {\n                returning {\n                    id\n                }\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query test($_ilike: String!) {\n        article(where: { title: { _ilike: $_ilike } }, limit: 10) {\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n        }\n    }\n"): (typeof documents)["\n    query test($_ilike: String!) {\n        article(where: { title: { _ilike: $_ilike } }, limit: 10) {\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPortFolioById($userId: String!) {\n        article(where: { authorId: { _eq: $userId } }) {\n            fileId\n            githubUrl\n            title\n            createdAt\n            id\n        }\n    }\n"): (typeof documents)["\n    query getPortFolioById($userId: String!) {\n        article(where: { authorId: { _eq: $userId } }) {\n            fileId\n            githubUrl\n            title\n            createdAt\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getArticleById($articleId: uuid!) {\n        article(where: { articleId: { _eq: $articleId } }, limit: 1) {\n            authorId\n            caption\n            createdAt\n            fileId\n            githubUrl\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    query getArticleById($articleId: uuid!) {\n        article(where: { articleId: { _eq: $articleId } }, limit: 1) {\n            authorId\n            caption\n            createdAt\n            fileId\n            githubUrl\n            id\n            title\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;