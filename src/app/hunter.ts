export interface Hunter {
    id: string;
    name: string;
    description?: string;
    characterization?: string;
    instructions?: string;
    look_group1?: string[];
    look_group2?: string[];
    look_group3?: string[];
    rating_options?: Ratings[];

    // Chosen
    fate?: {
        how_you_found_out: string[];
        heroic: string[];
        doom: string[];
    }
}

export interface Ratings {
    charm: number;
    cool: number;
    sharp: number;
    tough: number;
    weird: number;
}