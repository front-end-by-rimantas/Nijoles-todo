import { Todo } from './components/Todo.js';

const darbai = new Todo();

darbai.add('Nupirkti pieno');
darbai.add('Paziureti pro langa');
darbai.add('Pamaitinti voviere 🐿🥜');
darbai.edit(0, 'Nupirkti pieno ir kavos');
darbai.completed(1);
// darbai.delete(1);
darbai.print();

darbai.printOnlyCompleted();
darbai.printOnlyNotCompleted();