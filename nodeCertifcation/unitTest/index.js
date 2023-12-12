const assert = require('node:assert/strict')
const process = require('node:process')   

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

const error = () => {

    // Generate an AssertionError to compare the error message later:
    const { message } = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual',
    });

    // Verify error output:
    try {
    assert.strictEqual(1, 2);
    } catch (err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
    }
}

const calls = () => {
    const tracker = new assert.CallTracker();

    function func() {}

    // callsfunc() must be called exactly 1 time before tracker.verify().
    const callsfunc = tracker.calls(func, 2);

    callsfunc();

    // Calls tracker.verify() and verifies if all tracker.calls() functions have
    // been called exact times.
    process.on('exit', () => {
    tracker.verify();
    });
}

const getCalls = () => {
    const tracker = new assert.CallTracker();

    function func() {}
    const callsfunc = tracker.calls(func);

    callsfunc(1, 2, 3);

    assert.deepStrictEqual(tracker.getCalls(callsfunc),
                        [{ thisArg: undefined, arguments: [1, 2, 3] }]);
                                       
}

const report = () => {
    const tracker = new assert.CallTracker();

    function func() {}

    // Returns a function that wraps func() that must be called exact times
    // before tracker.verify().
    const callsfunc = tracker.calls(func, 2);

    // Returns an array containing information on callsfunc()
    console.log(tracker.report());

}

const reset = () => {
    const tracker = new assert.CallTracker();

    function func() {}
    const callsfunc = tracker.calls(func);

    callsfunc();
    // Tracker was called once
    assert.strictEqual(tracker.getCalls(callsfunc).length, 1);

    tracker.reset(callsfunc);
    assert.strictEqual(tracker.getCalls(callsfunc).length, 0);
}

reset()