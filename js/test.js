
const user = {
    capsune: false
};
const button = document.getElementById('save');
const input = document.getElementById('response');

input.checked = user.capsune;

button.addEventListener('click', function(){

    user.capsune = input.checked;

    if (user.capsune == true) {
        console.log("ii plac")
        console.log('hahhah')

    } else {
        console.log('nui plac')
    }

});