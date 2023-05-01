export const defaultYaml =
    'initial_state: start_message\n' +
    'states:\n' +
    '   start_message:\n' +
    '      name: start_message\n' +
    '      text: "Привет! Я твой личный бот-ассистент. Что ты хочешь сделать?"\n' +
    '      actions:\n' +
    '        - text: Отправить сообщение\n' +
    '          next_block: message_input\n' +
    '          type: button\n' +
    '      alert: "Зачем тебе бот, если ты не знаешь, что делать?"\n' +
    '   message_input:\n' +
    '      name: message_input\n' +
    '      text: Введите ваше сообщение\n' +
    '      actions:\n' +
    '        - next_block: message_sent\n' +
    '          type: text\n' +
    '        - text: Назад\n' +
    '          next_block: start_message\n' +
    '          type: button\n' +
    '   message_sent:\n' +
    '      name: message_sent\n' +
    '      text: Сообщение отправлено\n' +
    '      actions:\n' +
    '        - text: Отправить заново\n' +
    '          next_block: message_input\n' +
    '          type: button\n' +
    '        - text: В главное меню\n' +
    '          next_block: start_message\n' +
    '          type: button\n'
