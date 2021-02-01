```javascript
class Todo {
    constructor() {
        this.list = [
            {
                completed: false,
                text: 'Nupirkti pieno',
            },
        ];
    }

    add() {}
}

const darbai = new Todo();

darbai.add('Nupirkti pieno');

darbai.print(); // spausdina absoliuciai visus darbus, pateikimas: `index) text (completed)`
darbai.printOnlyCompleted();
darbai.printOnlyNotCompleted();

darbai.edit(0, 'Nupirkti pieno ir kavos'); // esamame sarase pakoreguojame nurodyta darba pagal duota ID (sutampa su array index)

darbai.delete(0); // istriname negriztamai darba, pagal array index

darbai.completed(0); // nurodom array index
```
