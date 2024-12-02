    interface IUser {
        id: number;
        firstName: string;
        lastName: string;
        image: string;
        posts: IPost[]
    }
    
    interface IPost {
        id: number;
        userId: number;
        title: string;
        body: string;
        tags: string[];
        reactions: {
            likes: number;
            dislikes: number;
        };
    }