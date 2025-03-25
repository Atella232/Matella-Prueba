// Configuración de modales para Números Enteros
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Scroll to the top of the page, ensuring header and navigation are visible
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    // Scroll to the top section for a calm, focused experience
    const topSection = document.getElementById('teoria-numeros');
    const herramientasSection = document.getElementById('herramientas-interactivas');
    
    if (topSection) {
        // Hide the interactive tools section by default
        if (herramientasSection) {
            herramientasSection.style.display = 'none';
        }
    }

    // Contenido de los modales
    const contenidosModales = {
        'positivos-negativos': `
            <div class="modal-header">
                <h2>🔹 Números Positivos y Negativos</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Necesidad de Nuevos Números</h3>
                <p>Los números naturales no bastan para representar:</p>
                <ul>
                    <li>Deudas</li>
                    <li>Temperaturas bajo cero</li>
                    <li>Niveles por debajo del suelo</li>
                </ul>

                <h3>Convenciones de Signo</h3>
                <p>Un número sin signo se considera positivo: 3 = +3</p>
                <p>En operaciones, los negativos suelen ir entre paréntesis: 5 + (–2)</p>

                <h3>Situaciones Cotidianas</h3>
                <ul>
                    <li>Temperatura: +8 ºC / –5 ºC</li>
                    <li>Saldo en cuenta: +150 € / –85 €</li>
                    <li>Niveles de edificio: planta baja = 0, primer sótano = –1</li>
                </ul>

                <h3>Representación en Recta Numérica</h3>
                <p>Recta horizontal con 0 en el centro, positivos a la derecha, negativos a la izquierda.</p>
            </div>
        `,
        'conjunto-enteros': `
            <div class="modal-header">
                <h2>🔢 Conjunto de los Números Enteros (ℤ)</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Elementos del Conjunto ℤ</h3>
                <ul>
                    <li>Números naturales (0, 1, 2, 3...)</li>
                    <li>Números negativos (–1, –2, –3…)</li>
                </ul>

                <h3>Orden en la Recta Numérica</h3>
                <p>a < b ↔ a está a la izquierda de b</p>
                <p>Ejemplo: –4 < –1 < 0 < +3</p>

                <h3>Valor Absoluto</h3>
                <p>Distancia al cero en la recta:</p>
                <ul>
                    <li>|–7| = 7</li>
                    <li>|+4| = 4</li>
                </ul>

                <h3>Comparación</h3>
                <ul>
                    <li>Entre positivos: el mayor es el de mayor valor absoluto</li>
                    <li>Cualquier positivo > 0 > cualquier negativo</li>
                    <li>Entre negativos: el mayor es el de menor valor absoluto</li>
                </ul>
            </div>
        `,
        'sumas-restas': `
            <div class="modal-header">
                <h2>➕➖ Sumas y Restas de Números Enteros</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Mismo Signo</h3>
                <ul>
                    <li>Se suman valores absolutos</li>
                    <li>El signo se conserva</li>
                    <li>Ejemplo: –3 – 8 = –11</li>
                </ul>

                <h3>Distinto Signo</h3>
                <ul>
                    <li>Se restan los valores absolutos</li>
                    <li>El signo es del número con mayor valor absoluto</li>
                    <li>Ejemplo: +4 – 9 = –5</li>
                </ul>

                <h3>Más de Dos Números</h3>
                <p>Se pueden agrupar de cualquier modo respetando los signos</p>
                <p>Ejemplo: 3 – 8 + 6 – 4 = –5 + 6 – 4 = 1 – 4 = –3</p>
            </div>
        `,
        'parentesis': `
            <div class="modal-header">
                <h2>🔄 Sumas y Restas con Paréntesis</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Eliminar Paréntesis</h3>
                <ul>
                    <li>Si hay "+" delante, los signos no cambian</li>
                    <li>Ejemplo: +(+3 – 6 + 5) = +3 – 6 + 5</li>
                </ul>

                <ul>
                    <li>Si hay "–" delante, se cambian todos los signos</li>
                    <li>Ejemplo: –(+8 – 6 – 5) = –8 + 6 + 5</li>
                </ul>

                <h3>Reglas Fundamentales</h3>
                <ul>
                    <li>(+a) = +a</li>
                    <li>(–a) = –a</li>
                    <li>– (+a) = –a</li>
                    <li>– (–a) = +a</li>
                </ul>
            </div>
        `,
        'multiplicacion-division': `
            <div class="modal-header">
                <h2>✖️➗ Multiplicación y División</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Regla de los Signos</h3>
                <table>
                    <tr><th>Operación</th><th>Resultado</th></tr>
                    <tr><td>(+) × (+)</td><td>+</td></tr>
                    <tr><td>(–) × (–)</td><td>+</td></tr>
                    <tr><td>(+) × (–)</td><td>–</td></tr>
                    <tr><td>(–) × (+)</td><td>–</td></tr>
                </table>

                <h3>Propiedad Asociativa</h3>
                <p>Ejemplo: (–2) × (–3) × (–5) = (+6) × (–5) = –30</p>

                <h3>División</h3>
                <p>Misma regla de signos que la multiplicación</p>
                <ul>
                    <li>(–12) ÷ (+4) = –3</li>
                    <li>(+30) ÷ (–5) = –6</li>
                    <li>(–15) ÷ (–3) = +5</li>
                </ul>
            </div>
        `,
        'operaciones-combinadas': `
            <div class="modal-header">
                <h2>🧮 Operaciones Combinadas</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Orden de Prioridad</h3>
                <ol>
                    <li>Paréntesis</li>
                    <li>Multiplicaciones y divisiones</li>
                    <li>Sumas y restas</li>
                </ol>

                <h3>Ejemplo 1</h3>
                <p>15 – 3 · [6 – (–12) ÷ (+4)]</p>
                <ol>
                    <li>Operar dentro del paréntesis más interno: (–12) ÷ (+4) = –3</li>
                    <li>Sustituir: 15 – 3 · [6 – (–3)] = 15 – 3 · [6 + 3] = 15 – 3 · 9</li>
                    <li>Resultado final: 15 – 27 = –12</li>
                </ol>

                <h3>Ejemplo 2</h3>
                <p>[(+2) + (–12)] – [(3 – 7) – (7 – 2)]</p>
                <ol>
                    <li>Resolver dentro de cada corchete</li>
                    <li>(+2) + (–12) = –10</li>
                    <li>(3 – 7) = –4</li>
                    <li>(7 – 2) = 5</li>
                    <li>[(–4) – (+5)] = –4 – 5 = –9</li>
                    <li>Restar entre corchetes: –10 – (–9) = –10 + 9 = –1</li>
                </ol>
            </div>
        `
    };

    // Función para abrir modales
    function abrirModal(idModal) {
        console.log('Intentando abrir modal:', idModal);
        const modal = document.getElementById(idModal);
        
        if (!modal) {
            console.error('Modal no encontrado:', idModal);
            // Listar todos los modales disponibles
            const modales = document.querySelectorAll('.modal-overlay');
            console.log('Modales disponibles:', 
                Array.from(modales).map(m => m.id)
            );
            return;
        }

        const contenidoModal = modal.querySelector('.modal-contenido');
        
        if (!contenidoModal) {
            console.error('Contenido de modal no encontrado');
            return;
        }

        // Verificar si el contenido existe
        const contenidoModalKey = idModal.replace('modal-', '');
        console.log('Clave del modal:', contenidoModalKey);
        console.log('Claves disponibles:', Object.keys(contenidosModales));

        if (!contenidosModales[contenidoModalKey]) {
            console.error('Contenido no encontrado para:', contenidoModalKey);
            return;
        }

        // Insertar contenido del modal
        contenidoModal.innerHTML = contenidosModales[contenidoModalKey];
        
        // Mostrar modal con display flex y añadir clase mostrar
        modal.style.display = 'flex';
        modal.classList.add('mostrar');
        console.log('Modal abierto:', idModal);
        console.log('Contenido insertado:', contenidosModales[contenidoModalKey]);

        // Close modal button
        const closeButton = contenidoModal.querySelector('.btn-cerrar-modal');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Añadir event listeners a todos los botones de "Más información"
    const botonesModal = document.querySelectorAll('.abrir-modal');
    console.log('Número de botones de modal encontrados:', botonesModal.length);

    botonesModal.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            const tarjeta = boton.closest('.tarjeta');
            if (!tarjeta) {
                console.error('Tarjeta padre no encontrada');
                return;
            }
            
            const modalId = tarjeta.dataset.modal;
            console.log('Botón clickeado, modal ID:', modalId);
            
            if (!modalId) {
                console.error('data-modal no encontrado en la tarjeta');
                return;
            }
            
            abrirModal(`modal-${modalId}`);
        });
    });

    // Verificar la existencia de los modales al inicio
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    console.log('Número de modal overlays encontrados:', modalOverlays.length);
    modalOverlays.forEach(modal => {
        console.log('Modal ID:', modal.id);
    });

    // Añadir event listeners para cerrar modales al hacer clic fuera
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Cerrar el modal solo si se hace clic directamente en el overlay
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.classList.remove('mostrar');
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
