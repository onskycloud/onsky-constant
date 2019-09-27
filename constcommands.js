/*
Copyright (c) 2011, OnSky Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/* Value of onsky action sent to callee function */
const ONSKYACTION_VAL = {
    turn_on_light: 1,
    turn_off_light: 2,
    open_door: 3,
    close_door: 4,
    dim_brightness_up: 5,
    dim_brightness_down: 6,
    change_color: 7,
    turn_on_away_sec: 8,
    turn_on_home_sec: 9,
    turn_off_sec: 10,
    turn_on_safety: 11,
    turn_off_safety: 12,
    sos_command: 13,
    none: 'none'
}

/* Text Length corresponding to each action in Vi */
const VIACTION_LEN = {
    light_door_action: 1,
    color_action: 2,
    dim_action: 3,
    security_on_action: 7,
    security_off_action: 5,
    safety_action: 4,
    sos_action: 2
}

/* Action Object will be:
 * name_action: {
 *   rawtxt: array or single element of raw text,
 *   value: array of single element of action value sent to callee function
 *   textlen: possible text length of raw text
 * }
 */
const VIACTION_OBJ = {
    turn_away_sec_on: {
        rawtxt: ['bật chế độ an ninh đi xa', 'bật chế độ an ninh',
                 'bật an ninh đi xa', 'bật an ninh'],
        value: [ ONSKYACTION_VAL.turn_on_away_sec ],
        textlen_max: VIACTION_LEN.security_on_action,
        textlen_min: 3
    },
    turn_home_sec_on: {
        rawtxt: ['bật chế độ an ninh ở nhà', 'bật an ninh ở nhà'],
        value: [ ONSKYACTION_VAL.turn_on_home_sec ],
        textlen_max: VIACTION_LEN.security_on_action,
        textlen_min: 4
    },
    turn_sec_off: {
        rawtxt: [ 'tắt chế độ an ninh', 'tắt an ninh'],
        value: [ ONSKYACTION_VAL.turn_off_sec ],
        textlen_max: VIACTION_LEN.security_off_action,
        textlen_min: 3
    },
    turn_safety_on: {
        rawtxt: ['bật chế độ an toàn', 'bật an toàn'],
        value: [ ONSKYACTION_VAL.turn_on_safety ],
        textlen_max: VIACTION_LEN.safety_action,
        textlen_min: 3
    },
    turn_safety_off: {
        rawtxt: ['tắt chế độ an toàn', 'tắt an toàn'],
        value: [ ONSKYACTION_VAL.turn_off_safety ],
        textlen_max: VIACTION_LEN.safety_action,
        textlen_min: 3
    },
    dim_up: {
        rawtxt: ['tăng ánh sáng', 'tăng độ sáng'],
        value: [ ONSKYACTION_VAL.dim_brightness_up ],
        textlen_max: VIACTION_LEN.dim_action,
        textlen_min: 3
    },
    dim_down: {
        rawtxt: ['giảm ánh sáng', 'giảm độ sáng'],
        value: [ ONSKYACTION_VAL.dim_brightness_up ],
        textlen_max: VIACTION_LEN.dim_action,
        textlen_min: 3
    },
    change_color: {
        rawtxt: ['đổi màu', 'thay màu'],
        value: [ ONSKYACTION_VAL.change_color ],
        textlen_max: VIACTION_LEN.color_action,
        textlen_min: 2
    },
    sos: {
        rawtxt: ['cứu tôi', 'sos', 'cấp cứu'],
        value: [ ONSKYACTION_VAL.sos_command ],
        textlen_max: VIACTION_LEN.sos_action,
        textlen_min: 1
    },
    turn_on: {
        rawtxt: ['bật', 'mở'],
        value: [ONSKYACTION_VAL.turn_on_light, ONSKYACTION_VAL.open_door],
        textlen_max: VIACTION_LEN.light_door_action,
        textlen_min: 1
    },
    turn_off: {
        rawtxt: ['tắt', 'đóng'],
        value: [ONSKYACTION_VAL.turn_off_light, ONSKYACTION_VAL.close_door],
        textlen_max: VIACTION_LEN.light_door_action,
        textlen_min: 1
    },
    none: 'none'
}

/* Text Length corresponding to each action in En */
const ENACTION_LEN = {
    light_action: 2,
    door_action: 1,
    color_action: 2,
    dim_action: 2,
    security_action: 3,
    safety_action: 3,
    sos_action: 2
}

/* Action Object will be:
 * name_action: {
 *   rawtxt: array or single element of raw text,
 *   value: array of single element of action value sent to callee function
 *   textlen: possible text length of raw text
 * }
 */
const ENACTION_OBJ = {
    turn_away_sec_on: {
        rawtxt: ['turn on security', 'turn on away', 'arm security', 'arm away'],
        value: [ ONSKYACTION_VAL.turn_on_away_sec ],
        textlen_max: ENACTION_LEN.security_action,
        textlen_min: 2
    },
    turn_home_sec_on: {
        rawtxt: ['turn on home', 'arm home'],
        value: [ ONSKYACTION_VAL.turn_on_home_sec ],
        textlen_max: ENACTION_LEN.security_action,
        textlen_min: 2
    },
    turn_sec_off: {
        rawtxt: ['turn off security', 'disarm security'],
        value: [ ONSKYACTION_VAL.turn_off_sec ],
        textlen_max: ENACTION_LEN.security_action,
        textlen_min: 2
    },
    turn_safety_on: {
        rawtxt: ['turn on safety', 'enable safety'],
        value: [ ONSKYACTION_VAL.turn_on_safety ],
        textlen_max: ENACTION_LEN.safety_action,
        textlen_min: 2
    },
    turn_safety_off: {
        rawtxt: ['turn off safety', 'disable safety'],
        value: [ ONSKYACTION_VAL.turn_off_safety ],
        textlen_max: ENACTION_LEN.safety_action,
        textlen_min: 2
    },
    turn_on: {
        rawtxt: 'turn on',
        value: [ ONSKYACTION_VAL.turn_on_light ],
        textlen_max: ENACTION_LEN.light_action,
        textlen_min: 2
    },
    turn_off: {
        rawtxt: 'turn off',
        value: [ ONSKYACTION_VAL.turn_off_light ],
        textlen_max: ENACTION_LEN.light_action,
        textlen_min: 2
    },
    change_color: {
        rawtxt: 'change color',
        value: [ ONSKYACTION_VAL.change_color ],
        textlen_max: ENACTION_LEN.color_action,
        textlen_min: 2
    },
    dim_up: {
        rawtxt: 'dim up',
        value: [ ONSKYACTION_VAL.dim_brightness_up ],
        textlen_max: ENACTION_LEN.dim_action,
        textlen_min: 2
    },
    dim_down: {
        rawtxt: 'dim down',
        value: [ ONSKYACTION_VAL.dim_brightness_down ],
        textlen_max: ENACTION_LEN.dim_action,
        textlen_min: 2
    },
    sos: {
        rawtxt: ['save me', 'sos', 'emergency'],
        value: [ ONSKYACTION_VAL.sos_command ],
        textlen_max: ENACTION_LEN.sos_action,
        textlen_min: 1
    },
    open_door: {
        rawtxt: 'open',
        value: [ ONSKYACTION_VAL.open_door ],
        textlen_max: ENACTION_LEN.door_action,
        textlen_min: 1
    },
    close_door: {
        rawtxt: 'close',
        value: [ ONSKYACTION_VAL.close_door ],
        textlen_max: ENACTION_LEN.door_action,
        textlen_min: 1
    },
    none: 'none'
}

const MISC_WORD = {
    mode: 'chế độ',
    none: 'none'
}

const ONSKYERRCODE = {
    missing_input: "Missing Input",
    not_string_input: "Input Not String",
    wrong_action: "Invalid Action",
    text_not_long: "Text Not Long Enough",
    no_device_found: "No Device Found"
}

/* Unicode value for ` ' ~ ? . */
const VIMARKS = ['\u0300', '\u0301', '\u0303', '\u0309', '\u0323' ]

module.exports = {
  ONSKYACTION_VAL,
  ENACTION_LEN,
  ENACTION_OBJ,
  VIACTION_LEN,
  VIACTION_OBJ,
  MISC_WORD,
  ONSKYERRCODE,
  VIMARKS
}