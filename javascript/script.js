let main = document.querySelector('main');
let dv_autoComplete = document.getElementById('dv-auto-complete-cep');
let dv_buscarDados = document.getElementById('dv-buscar-dados-cep');
let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item)=>{
    item.addEventListener('click', ()=>{
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('ativo');
        }
        item.classList.add('ativo')

        if(item.id == 'auto-complete-cep'){
            dv_autoComplete.classList.remove('desabilitar')
            dv_buscarDados.classList.add('desabilitar')

        }else if(item.id == 'buscar-cep'){
            dv_buscarDados.classList.remove('desabilitar')
            dv_autoComplete.classList.add('desabilitar')

        }
    });
});