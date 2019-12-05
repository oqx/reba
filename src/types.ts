import { Arguments } from 'yargs'

export type YargsArgs = Arguments<{
    /*
        Indicates whether default exports are disabled for React component.
    */
    d: boolean
    /*
        Indicates whether default exports are disabled for React component.
    */
    default: boolean
    /*
        Prefix name for monorepo package naming convention (i.e. @babel, @apollo)
    */
    p: string
    /*
        Prefix name for monorepo package naming convention (i.e. @babel, @apollo)
    */
    prefix: string
    /*
        Name of the component. Used to name component dir and file, as well as
        JS var reference.
    */
    name: string
    /*
        Name of the component. Used to name component dir and file, as well as
        JS var reference.
    */
    n: string
    /*
        Indicates whether typescript component should be generated.
    */
    typescript: boolean
    /*
        Indicates whether typescript component should be generated.
    */
    t: boolean
}>

export type Composable = {
    (params: YargsArgs): Promise<YargsArgs>
}

export interface ReplaceAndWriteFileType {
    /*
        Name of the component. Used to name component dir and file, as well as
        JS var reference.
    */
    name: string
    /*
        Indicates whether default exports are disabled for React component.
    */
    default: boolean
    /*
        Path of directory where file should be read from.
    */
    readPath: string
    /*
        Path of directory where file should be written.
    */
    writePath: string
    /*
        Indicates whether typescript component should be generated.
    */
    typescript: boolean
}

export interface ReplaceAndWriteDirType extends Omit<ReplaceAndWriteFileType, 'readPath'> {
    /*
        Directory where fs.readdir should get file list from.
    */
    readDirPath: string
}

export interface TransformerArgs extends ReplaceAndWriteFileType {
    /*
        A utf-8 string of a file's contents.
    */
    data: string
}

export interface ComposableTransformer {
    (params: TransformerArgs): TransformerArgs
}