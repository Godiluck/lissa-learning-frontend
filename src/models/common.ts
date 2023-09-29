export enum snackbarTypes {
    default = "default",
    success = "success",
    error = "error",
    warning = "warning",
    info = "info",
}

export enum direction {
    ASC = "ASC",
    DESC = "DESC",
}

export interface IReviewItem {
    name: string;
    age: string;
    image: string;
    company: string;
    review: string;
}