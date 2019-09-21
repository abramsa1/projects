let textInput = document.querySelector('#pass');
const key = {
    a: '1',
    b: '2',
    h: 't',
    ' ': 'y',
    e: 'u',
    l: 'i',
    o: 'p',
    c: 'j',
    k: 'w',
    s: ',',
    z: 'x',
    q: '5',
    r: '9',
    m: '-',
    g: '7' 
};
document.querySelector('#pass').oninput = () => {
    let str = textInput.value;
    let str2 = '';
    let find = str.length - 1;
    if (key[str[find]])
        str2 = key[str[find]];
    else
        str2 = str[find];   
    document.querySelector('#out').textContent += str2;
}
