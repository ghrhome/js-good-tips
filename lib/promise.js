'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by whobird on 2018/10/15.
 */

var random = function random() {
    console.trace('promise-----');
    return Promise.resolve(Math.random());
};

'Bad';

/*const sumRandomAsyncNums=() =>{
    let first;
    let second;
    let third;

    return random().then(v=>{

        first=v;
        return random();

    }).then( v=>{

        second=v;
        return random();

    }).then( v=>{

        third=v;
        console.log(v)
        return first+second+third;
    }).then(v=>{

        console.log(`Result is: `+v)

    })
}*/

'good';

var sumRandomAsyncNums = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var first, second, third;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return random();

                    case 2:
                        first = _context.sent;
                        _context.next = 5;
                        return random();

                    case 5:
                        second = _context.sent;
                        _context.next = 8;
                        return random();

                    case 8:
                        third = _context.sent;


                        console.log('result is: ' + (first + second + third));

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function sumRandomAsyncNums() {
        return _ref.apply(this, arguments);
    };
}();

sumRandomAsyncNums();
