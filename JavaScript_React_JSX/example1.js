let cat = {name: 'Барсик'}
function changeName(value){
    this.name = value
}
const changeNameCat = changeName.bind(cat);
changeNameCat('Барс');