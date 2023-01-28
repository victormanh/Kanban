export interface IColumn {
    name: string;
    tasks: ITask[];
}

export interface ITask{
    taskName: string;
    taskDescription: string;
}