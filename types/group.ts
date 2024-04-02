export interface Group {
    id: number;
    created_at: string;
    name: string;
}

export interface GroupCreate {
    name: string;
}

export interface GroupDelete {
    id: number;
}