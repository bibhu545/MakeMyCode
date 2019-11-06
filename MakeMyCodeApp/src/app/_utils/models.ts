export class DropdownModel{
    value: number;
    text: string;
}

export class CreatePostModel{
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
    constructor(){
        this.postId = 0;
        this.title = null;
        this.summary = null;
        this.body = null;
        this.featuredImage = null;
        this.authorName = null;
        this.userId = 0;
        this.isActive = 0;
        this.isApproved = 0;
        this.createdOn = null;
        this.lastUpdatedOn = null;
    }
}