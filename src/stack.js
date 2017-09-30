/**
 * The stack is a core funcatron concept whereby stacks of 
 * functions can be composed together as well as nested 
 * to form an asynchronous request/response pipelines
 * 
 * Stack is a higher-order function in the request/response pipeline.
 * 
 * The stack reduces an array set of functions down to a single function,
 * that can be called asynchronously, only calling the subsequent
 * call in the pipe when `next` is called.
 */
module.exports = (...fns) => ({req: oreq, res: ores, next: onext}) => (fns.reduceRight((fnext, fn) => {

    // use a generic variable name `y` for return value from pipeline
    // in order to allow a stack to call `next` without passing {req, res}
    // through each next call.
    return y => {

        // Destructure `y` if passed to retrieve req/res
        const { req, res } = (y || {});

        // Next has been triggered, or this is the first method in the pipeline,
        // call the method:
        fn.call(null,

            // if the subsequent method in the pipeline exists (`fnext`)
            (fnext ? {req: (req || oreq), res: (res || ores), next: fnext}

                // no `fnext` exists, attempt to use the original next `onext` = the next method in the parent stack
                : (onext) ? {req: (req || oreq), res: (res || ores), next: onext}

                   // no `fnext` or `onext` exists, so simply pass `req`/`res`.
                   // this shoudl be the end of the (nested) stack
                   : { req: (req || oreq), res: (res || ores) }
            )
        )
    }
}, null))

// Call the first method in the stack with the first req/res object
.call(null, {req: oreq, res: ores })