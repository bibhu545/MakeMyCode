export class DropdownModel {
    value: number;
    text: string;
}

export class CreatePostModel {
    postId: number;
    title: string;
    summary: string;
    body: string;
    featuredImage: string;
    authorName: String;
    userId: number;
    isActive: number;
    isApproved: number;
    createdOn: Date;
    lastUpdatedOn: Date;
}

export class UserLoginModel {
    email: string;
    password: string;
}

export class UserSignupModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}