import React from 'react';
import { TodoIcon } from './';

const CompleteIcon = ({ completed, onComplete }) => {
    return (
       <TodoIcon
       type="check"
       color={completed ? '#4caf50' : '#4caf50'}
       onClick={onComplete}
       />
    );
};

export { CompleteIcon };