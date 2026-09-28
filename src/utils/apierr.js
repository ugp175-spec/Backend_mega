class ApiError extends Error {
    constructor(statusCode,
        message = "sommthing went wrong",
        error = [],
        statck = "")
        {

            super(message)
            this.statusCode = statusCode
            this.error = error
            this.statck = statck
            this.data = null
            this.message = message
            this.success = false

            if(statck)
            {
                this.stack = statck
            }else
            {
                Error.captureStackTrace(this,this.constructor)
            }
        }

    }

export{ApiError}