import React, { createContext } from 'react';

todoEdit = {
    id: '',
    title: '',
    description: ''
}
const TodoEditContext = createContext(todoEdit);