'use strict';

const moment = require('moment');

module.exports = [
    {
        type: 'input',
        name: 'complete_action',
        message: 'What did you do to complete this task?',
        validate: require('../validators/required')
    },
    {
        type: 'list',
        name: 'task_feeling',
        message: 'How did you feel while doing this task?',
        choices: ['Stressed', 'Neutral', 'In Flow'],
        default: 'Neutral'
    },
    {
        type: 'input',
        name: 'actual_duration',
        message: 'How many minutes did this task take to complete?',
        validate: require('../validators/positive_number'),
        filter: Number
    },
    {
        type: 'confirm',
        name: 'is_documented',
        message: 'Did you document the results of this task?'
    },
    {
        type: 'input',
        name: 'documentation_link',
        message: 'What is the link to this documentation?',
        when: answers => answers.is_documented,
        validate: require('../validators/required')
    },
    {
        type: 'confirm',
        name: 'should_follow_up',
        message: 'Do you need to follow up and do something else after this?'
    }
];