declare module'*.scss' {
    const content: {[key: string]: any}
    export = content
}

declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.jph" {
    const content: any;
    export default content;
}