// tslint:disable:typedef

// Weave default styles variables
export const defaultStyles = {
    border: {
        radius: '10px',
        width: '1px',
    },
    fontSize: '16px',
    project: {}, // Space for user to provide custom variables
};

export type Project = { [key: string]: string | number | boolean | Project };
export type StyleObject = typeof defaultStyles & { project: Project };
