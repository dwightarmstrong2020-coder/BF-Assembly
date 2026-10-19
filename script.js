//*0x20 0x40 0x60 0x80 0xA0 0xC0 0xE0 0x100
function convert() {
    debugger;
    const code = document.getElementById('bf').value;
    const asm = document.getElementById('bfasm');
    for (const char of code) {
        switch (char) {
            case '+':
                asm.value += '20 ';
                console.log(asm.value); break;;
            case '-':
                asm.value += '40 ';
                console.log(asm.value); break;;
            case '<':
                asm.value += '60 ';
                console.log(asm.value); break;;
            case '>':
                asm.value += '80 ';
                console.log(asm.value); break;;
            case '[':
                asm.value += 'A0 ';
                console.log(asm.value); break;;
            case ']':
                asm.value += 'C0 ';
                console.log(asm.value); break;
            case '.':
                asm.value += 'E0 ';
                console.log(asm.value); break;
            case ',':
                asm.value += '100 ';
                console.log(asm.value); break;
            default:
                asm.value += '00 ';
                console.log(asm.value); break;
        }
    }
}

document.getElementById('convert').addEventListener("click", () => {
    console.log("Clicked")
    convert();
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('bfasm').value = '';
});
document.getElementById('copy').addEventListener("click", () => listener());

async function listener() {
    try {
        await navigator.clipboard.writeText(document.getElementById('bfasm').value);
    } catch (error) {
        console.error('I found this', error.message);
    }
}