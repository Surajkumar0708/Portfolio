export const typesOfData = (value: any) => {
    return value.split(",").map((name: string) => name.trim().toUpperCase());
};