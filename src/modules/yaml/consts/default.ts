export const defaultYaml = 'initial_state: start_message\n' +
    'states:\n' +
    '  - name: start_message\n' +
    '    text: Привет я бот\n' +
    '    buttons:\n' +
    '      - text: First button\n' +
    '        next_block: first_block\n' +
    '      - text: Second button\n' +
    '        next_block: second_block\n' +
    '      - text: Third button\n' +
    '        next_block: third_block\n' +
    '  - name: first_block\n' +
    '    text: Ты нажал на 1 кнопку\n' +
    '    buttons:\n' +
    '      - text: First button\n' +
    '        next_block: first_block\n' +
    '      - text: Second button\n' +
    '        next_block: second_block\n' +
    '      - text: Back\n' +
    '        next_block: start_message\n' +
    '  - name: second_block\n' +
    '    text: Ты нажал на 2 кнопку\n' +
    '    img: imgur.com/some.png\n' +
    '  - name: third_block\n' +
    '    text: Ты нажал на 3 кнопку\n' +
    '    alert: зачем так?'

