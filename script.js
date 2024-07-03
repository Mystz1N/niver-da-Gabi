document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique aos botões de play
    const listaMusicas = document.getElementById('lista-musicas');
    listaMusicas.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-play')) {
            const audioSrc = event.target.getAttribute('data-src');
            if (audioSrc) {
                // Verificar se já há um áudio tocando e pará-lo
                const audios = document.getElementsByTagName('audio');
                for (let i = 0; i < audios.length; i++) {
                    audios[i].pause();
                }

                // Criar novo elemento de áudio e adicioná-lo ao DOM
                const audio = new Audio(audioSrc);
                audio.play();
                document.body.appendChild(audio); // Adicionar ao DOM
            }
        }
    });

    // Adicionar evento de clique para expandir imagens
    const expandirLinks = document.querySelectorAll('.expandir-imagem');
    expandirLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const imagemSrc = link.getAttribute('data-imagem');
            document.getElementById('imagem-expandida').src = 'imagens/' + imagemSrc;
            $('#modal-imagem').modal('show'); // Mostra o modal
        });
    });
});
