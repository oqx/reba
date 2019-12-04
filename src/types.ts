import { Arguments } from 'yargs'

export type YargsArgs = Arguments<{
    d: boolean
    default: boolean
    p: string
    prefix: string
    name: string
    n: string
}>

export type Composable = {
    (params: YargsArgs): Promise<YargsArgs>
}
