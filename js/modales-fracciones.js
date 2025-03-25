document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top of the page, ensuring header and navigation are visible
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    // Scroll to the top section for a calm, focused experience
    const topSection = document.getElementById('teoria-fracciones');
    const herramientasSection = document.getElementById('herramientas-interactivas');
    
    if (topSection) {
        // Hide the interactive tools section by default
        if (herramientasSection) {
            herramientasSection.style.display = 'none';
        }
    }

    // Modal content for each section
    const contenidosModales = {
        'significado-fraccion': `
            <div class="modal-header">
                <h2>🔢 Significado de una Fracción</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Definición</h3>
                <p>Una fracción representa una parte de un todo dividido en partes iguales:</p>
                <ul>
                    <li><strong>Numerador (a):</strong> Partes que se toman</li>
                    <li><strong>Denominador (b):</strong> Total de partes en que se divide la unidad</li>
                </ul>
                
                <h3>Interpretaciones</h3>
                <ol>
                    <li><strong>Parte de una unidad:</strong> 
                        3/4 de una tarta = 3 de 4 partes iguales</li>
                    <li><strong>Como operador:</strong> 
                        2/5 de 20 = (2 × 20) ÷ 5 = 8</li>
                    <li><strong>Como división:</strong> 
                        7/2 = 7 ÷ 2 = 3.5</li>
                </ol>
            </div>
        `,
        'fracciones-equivalentes': `
            <div class="modal-header">
                <h2>🔄 Fracciones Equivalentes</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>¿Qué son?</h3>
                <p>Fracciones que representan la misma cantidad.</p>
                
                <h3>Métodos para obtenerlas</h3>
                <ol>
                    <li><strong>Multiplicación:</strong>
                        1/2 = (1 × 3) / (2 × 3) = 3/6</li>
                    <li><strong>División:</strong>
                        12/16 ÷ 4 = 3/4</li>
                </ol>
                
                <h3>Ejemplo</h3>
                <p>2/4 = 1/2, ambas representan la mitad</p>
            </div>
        `,
        'comparacion-fracciones': `
            <div class="modal-header">
                <h2>⚖️ Comparación de Fracciones</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Casos Comunes</h3>
                <ul>
                    <li><strong>Mismo denominador:</strong> 
                        Compara numeradores
                        3/8 < 5/8</li>
                    <li><strong>Mismo numerador:</strong> 
                        Compara denominadores
                        3/7 > 3/9</li>
                </ul>
                
                <h3>Relación con la Unidad</h3>
                <ul>
                    <li>5/3 > 1 (mayor que la unidad)</li>
                    <li>3/5 < 1 (menor que la unidad)</li>
                </ul>
            </div>
        `,
        'comun-denominador': `
            <div class="modal-header">
                <h2>➗ Reducción a Común Denominador</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>¿Por qué es necesario?</h3>
                <p>Para sumar o restar fracciones con diferente denominador</p>
                
                <h3>Método</h3>
                <p>Usar el mínimo común múltiplo (m.c.m.)</p>
                
                <h3>Ejemplo</h3>
                <p>2/3 + 1/4 = 8/12 + 3/12 = 11/12</p>
            </div>
        `,
        'operaciones-fracciones': `
            <div class="modal-header">
                <h2>🧮 Operaciones con Fracciones</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Suma y Resta</h3>
                <ul>
                    <li>Con mismo denominador: 2/7 + 3/7 = 5/7</li>
                    <li>Distinto denominador: Reducir a común denominador</li>
                </ul>
                
                <h3>Multiplicación</h3>
                <ul>
                    <li>Fracción × Fracción: 2/3 × 5/7 = 10/21</li>
                    <li>Fracción × Entero: 4 × 3/5 = 12/5</li>
                </ul>
                
                <h3>División</h3>
                <p>Multiplicar por la inversa: 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8</p>
            </div>
        `,
        'problemas-fracciones': `
            <div class="modal-header">
                <h2>📝 Resolución de Problemas</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Ejemplos Prácticos</h3>
                <ul>
                    <li><strong>Fracción de una cantidad:</strong>
                        20 euros × 3/4 = 15 euros gastados</li>
                    <li><strong>Fracción de una fracción:</strong>
                        Herencia: 2/5 recibido, 1/2 de lo recibido regalado = 1/5 del total</li>
                </ul>
                
                <h3>Comparación</h3>
                <p>3/5 de 60 vs 2/3 de 45:
                    3/5 × 60 = 36
                    2/3 × 45 = 30
                    Gana 3/5 de 60</p>
            </div>
        `
    };

    // Add click event to modal triggers
    const modalTriggers = document.querySelectorAll('.abrir-modal');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.closest('.tarjeta').dataset.modal;
            const modalOverlay = document.getElementById(`modal-${modalId}`);
            const modalContent = modalOverlay.querySelector('.modal-contenido');
            
            // Set modal content
            modalContent.innerHTML = contenidosModales[modalId];
            
            // Show modal
            modalOverlay.style.display = 'flex';
            
            // Close modal button
            const closeButton = modalContent.querySelector('.btn-cerrar-modal');
            closeButton.addEventListener('click', () => {
                modalOverlay.style.display = 'none';
            });
        });
    });

    // Add event listeners to close modals when clicking outside
    document.querySelectorAll('.modal-overlay').forEach(modalOverlay => {
        modalOverlay.addEventListener('click', (event) => {
            // Close modal only if clicking directly on the overlay
            if (event.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    });

    // Optional: Add a button to show/hide interactive tools
    const toggleToolsBtn = document.createElement('button');
    toggleToolsBtn.textContent = 'Mostrar Herramienta Interactiva';
    toggleToolsBtn.classList.add('btn', 'btn-verde');  
    toggleToolsBtn.style.marginTop = '20px';
    toggleToolsBtn.style.display = 'inline-block';
    toggleToolsBtn.style.width = 'auto';
    toggleToolsBtn.style.padding = '10px 15px';  
    toggleToolsBtn.style.fontSize = '16px';  
    toggleToolsBtn.style.boxSizing = 'border-box';
    
    toggleToolsBtn.addEventListener('click', () => {
        if (herramientasSection.style.display === 'none') {
            herramientasSection.style.display = 'block';
            toggleToolsBtn.textContent = 'Ocultar Herramienta Interactiva';
            herramientasSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            herramientasSection.style.display = 'none';
            toggleToolsBtn.textContent = 'Mostrar Herramienta Interactiva';
            topSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Add the toggle button after the top section
    if (topSection) {
        topSection.appendChild(toggleToolsBtn);
    }
});
