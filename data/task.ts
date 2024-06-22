export type Status = 'todo' |'in progress'| 'done'

export type Priority = 'low' | 'medium' | 'high'

export type Task = {
    id: number,
    title: string,
    status: Status,
    priority: Priority,
    timestamp: number
}

export const statuses: Status[] = ['todo', 'in progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']

export const tasks: Array<Task> = [
    {
        id: 1,
        title: "Do the dishes",
        status: "done",
        priority: 'low',
        timestamp: 10000000
    },
    {
        id: 2,
        title: "Shop the groceries",
        status: "todo",
        priority: 'high',
        timestamp: 10000000
    },
    {
        id: 3,
        title: "Clean the house",
        status: "in progress",
        priority: 'medium',
        timestamp: 10000000
    },
     {
        id: 4,
        title: "Trim the trees",
        status: "in progress",
        priority: 'low',
        timestamp: 10000000
    },
]