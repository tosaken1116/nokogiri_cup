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
    "\n    mutation uploadArticle(\n        $title: String!\n        $caption: String!\n        $authorId: String!\n        $createdAt: timestamptz!\n        $githubUrl: String!\n        $fileId: String!\n    ) {\n        insertArticle(\n            objects: {\n                title: $title\n                caption: $caption\n                authorId: $authorId\n                createdAt: $createdAt\n                githubUrl: $githubUrl\n                fileId: $fileId\n            }\n        ) {\n            returning {\n                id\n            }\n        }\n    }\n": types.UploadArticleDocument,
    "\n    query getSearchResult($_ilike: String!) {\n        article(where: { title: { _ilike: $_ilike } }, limit: 10) {\n            articleId\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n": types.GetSearchResultDocument,
    "\n    query getHomeArticle {\n        article(limit: 10, orderBy: { id: DESC }) {\n            articleId\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n": types.GetHomeArticleDocument,
    "\n    query getArticleById($articleId: uuid!) {\n        article(where: { articleId: { _eq: $articleId } }, limit: 1) {\n            authorId\n            caption\n            createdAt\n            fileId\n            githubUrl\n            id\n            title\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n": types.GetArticleByIdDocument,
    "\n    query getUserStatus($userId: String!) {\n        users(where: { id: { _eq: $userId } }) {\n            email\n            userName\n            iconPath\n        }\n    }\n": types.GetUserStatusDocument,
    "\n    mutation updateUserProfile(\n        $id: String!\n        $age: String\n        $job: String\n        $language: String\n        $selfIntroduction: String\n        $userName: String\n        $developmentAge: String\n        $twitterUrl: String\n        $customUrl: String\n    ) {\n        updateUsersByPk(\n            pk_columns: { id: $id }\n            _set: {\n                age: $age\n                job: $job\n                language: $language\n                selfIntroduction: $selfIntroduction\n                userName: $userName\n                developmentAge: $developmentAge\n                twitterUrl: $twitterUrl\n                customUrl: $customUrl\n            }\n        ) {\n            email\n        }\n    }\n": types.UpdateUserProfileDocument,
    "\n    query getUserProfileById($userId: String!) {\n        usersByPk(id: $userId) {\n            age\n            iconPath\n            job\n            language\n            selfIntroduction\n            userName\n            developmentAge\n            githubUrl\n            twitterUrl\n            customUrl\n        }\n    }\n": types.GetUserProfileByIdDocument,
    "\n    query getUserPopoverProps($userId: String!) {\n        usersByPk(id: $userId) {\n            userName\n            iconPath\n            developmentAge\n            job\n            language\n        }\n    }\n": types.GetUserPopoverPropsDocument,
    "\n    query getPortFolioById($userId: String!) {\n        article(where: { authorId: { _eq: $userId } }) {\n            fileId\n            githubUrl\n            title\n            createdAt\n            articleId\n        }\n    }\n": types.GetPortFolioByIdDocument,
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
export function graphql(source: "\n    mutation uploadArticle(\n        $title: String!\n        $caption: String!\n        $authorId: String!\n        $createdAt: timestamptz!\n        $githubUrl: String!\n        $fileId: String!\n    ) {\n        insertArticle(\n            objects: {\n                title: $title\n                caption: $caption\n                authorId: $authorId\n                createdAt: $createdAt\n                githubUrl: $githubUrl\n                fileId: $fileId\n            }\n        ) {\n            returning {\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation uploadArticle(\n        $title: String!\n        $caption: String!\n        $authorId: String!\n        $createdAt: timestamptz!\n        $githubUrl: String!\n        $fileId: String!\n    ) {\n        insertArticle(\n            objects: {\n                title: $title\n                caption: $caption\n                authorId: $authorId\n                createdAt: $createdAt\n                githubUrl: $githubUrl\n                fileId: $fileId\n            }\n        ) {\n            returning {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getSearchResult($_ilike: String!) {\n        article(where: { title: { _ilike: $_ilike } }, limit: 10) {\n            articleId\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n"): (typeof documents)["\n    query getSearchResult($_ilike: String!) {\n        article(where: { title: { _ilike: $_ilike } }, limit: 10) {\n            articleId\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getHomeArticle {\n        article(limit: 10, orderBy: { id: DESC }) {\n            articleId\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n"): (typeof documents)["\n    query getHomeArticle {\n        article(limit: 10, orderBy: { id: DESC }) {\n            articleId\n            title\n            githubUrl\n            fileId\n            createdAt\n            caption\n            authorId\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getArticleById($articleId: uuid!) {\n        article(where: { articleId: { _eq: $articleId } }, limit: 1) {\n            authorId\n            caption\n            createdAt\n            fileId\n            githubUrl\n            id\n            title\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n"): (typeof documents)["\n    query getArticleById($articleId: uuid!) {\n        article(where: { articleId: { _eq: $articleId } }, limit: 1) {\n            authorId\n            caption\n            createdAt\n            fileId\n            githubUrl\n            id\n            title\n            user {\n                userName\n                iconPath\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserStatus($userId: String!) {\n        users(where: { id: { _eq: $userId } }) {\n            email\n            userName\n            iconPath\n        }\n    }\n"): (typeof documents)["\n    query getUserStatus($userId: String!) {\n        users(where: { id: { _eq: $userId } }) {\n            email\n            userName\n            iconPath\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateUserProfile(\n        $id: String!\n        $age: String\n        $job: String\n        $language: String\n        $selfIntroduction: String\n        $userName: String\n        $developmentAge: String\n        $twitterUrl: String\n        $customUrl: String\n    ) {\n        updateUsersByPk(\n            pk_columns: { id: $id }\n            _set: {\n                age: $age\n                job: $job\n                language: $language\n                selfIntroduction: $selfIntroduction\n                userName: $userName\n                developmentAge: $developmentAge\n                twitterUrl: $twitterUrl\n                customUrl: $customUrl\n            }\n        ) {\n            email\n        }\n    }\n"): (typeof documents)["\n    mutation updateUserProfile(\n        $id: String!\n        $age: String\n        $job: String\n        $language: String\n        $selfIntroduction: String\n        $userName: String\n        $developmentAge: String\n        $twitterUrl: String\n        $customUrl: String\n    ) {\n        updateUsersByPk(\n            pk_columns: { id: $id }\n            _set: {\n                age: $age\n                job: $job\n                language: $language\n                selfIntroduction: $selfIntroduction\n                userName: $userName\n                developmentAge: $developmentAge\n                twitterUrl: $twitterUrl\n                customUrl: $customUrl\n            }\n        ) {\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserProfileById($userId: String!) {\n        usersByPk(id: $userId) {\n            age\n            iconPath\n            job\n            language\n            selfIntroduction\n            userName\n            developmentAge\n            githubUrl\n            twitterUrl\n            customUrl\n        }\n    }\n"): (typeof documents)["\n    query getUserProfileById($userId: String!) {\n        usersByPk(id: $userId) {\n            age\n            iconPath\n            job\n            language\n            selfIntroduction\n            userName\n            developmentAge\n            githubUrl\n            twitterUrl\n            customUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserPopoverProps($userId: String!) {\n        usersByPk(id: $userId) {\n            userName\n            iconPath\n            developmentAge\n            job\n            language\n        }\n    }\n"): (typeof documents)["\n    query getUserPopoverProps($userId: String!) {\n        usersByPk(id: $userId) {\n            userName\n            iconPath\n            developmentAge\n            job\n            language\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPortFolioById($userId: String!) {\n        article(where: { authorId: { _eq: $userId } }) {\n            fileId\n            githubUrl\n            title\n            createdAt\n            articleId\n        }\n    }\n"): (typeof documents)["\n    query getPortFolioById($userId: String!) {\n        article(where: { authorId: { _eq: $userId } }) {\n            fileId\n            githubUrl\n            title\n            createdAt\n            articleId\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;