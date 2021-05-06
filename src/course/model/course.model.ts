export class Course {
    readonly id: string;
    readonly name: string;
    readonly code: string;
    readonly userId: string;

    constructor(id: string, name:string, code: string, userId: string) {
        this.id = id,
        this.name = name,
        this.code = code,
        this.userId = userId
    }
}