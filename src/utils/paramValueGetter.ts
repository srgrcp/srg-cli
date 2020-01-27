export class ParamValueGetter {
    private param: string
    private value: string | undefined
    private required: boolean
    private paramList: string[]

    constructor(
            param: string,
            value: string | undefined,
            required: boolean,
            paramList: string[]
        ) {
        this.param = param
        this.value = value
        this.required = required
        this.paramList = paramList
    }

    private sendMissedMessage = () => {
        console.error('Error:'.red, `Missed ${this.param} value.`)
        process.exit(0)
    }

    /**
     * @todo Type validation
     */
    private requiredValidation = <T>(): T | undefined => {
        if (this.required) {
            this.sendMissedMessage()
            return undefined
        } else {
            this.paramList.shift()
            return true as unknown as T
        }
    }

    public GetValue = <T>(): T => {
        if (!this.value) {
            return this.requiredValidation<T>()!
        } else if (!this.value.startsWith('-')){
            this.paramList.splice(0, 2)
            return this.value as unknown as T
        } else {
            return this.requiredValidation<T>()!
        }
    }
}