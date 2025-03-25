// Contenido de modales para Números Naturales
const modalContents = {
    '✴️ Introducción': `
        <div class="modal-content">
            <h3 class="modal-title">✴️ Introducción a Números Naturales</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Los números naturales son los primeros números que aprendemos a usar para contar: 1, 2, 3, 4...</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Ejemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Números Naturales</td>
                                <td>Números para contar objetos discretos</td>
                                <td>1, 2, 3, 4, 5...</td>
                            </tr>
                            <tr>
                                <td>Números Enteros</td>
                                <td>Incluyen positivos, negativos y cero</td>
                                <td>...-2, -1, 0, 1, 2...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h4>Importancia</h4>
                <p>Aunque ya sabes operar con números naturales, es importante repasar algunos conceptos y propiedades básicas para reforzar la comprensión y fluidez en los cálculos.</p>
            </div>
        </div>
    `,
    '➕ Suma': `
        <div class="modal-content">
            <h3 class="modal-title">➕ La Suma</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Sumar es unir, juntar o añadir cantidades.</p>
                
                <h4>Ejemplo de contexto</h4>
                <p>El equipo de ciclista cuesta:</p>
                <p>583 + 162 + 45 + 38 = 828 euros</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Propiedad</th>
                                <th>Descripción</th>
                                <th>Ejemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Conmutativa</td>
                                <td>El orden no altera el resultado</td>
                                <td>8 + 6 = 6 + 8 = 14</td>
                            </tr>
                            <tr>
                                <td>Asociativa</td>
                                <td>Agrupación no cambia resultado</td>
                                <td>(3 + 2) + 6 = 3 + (2 + 6) = 11</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '➖ Resta': `
        <div class="modal-content">
            <h3 class="modal-title">➖ La Resta</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Restar es quitar, suprimir o hallar la diferencia entre dos cantidades.</p>
                
                <h4>Ejemplo de contexto</h4>
                <p>Si tienes 693 € y necesitas 828 €, te faltan:</p>
                <p>828 – 693 = 135 €</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Ejemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sustracción</td>
                                <td>Quitar una cantidad de otra</td>
                                <td>10 - 4 = 6</td>
                            </tr>
                            <tr>
                                <td>Diferencia</td>
                                <td>Distancia entre dos números</td>
                                <td>8 - 3 = 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '✖️ Multiplicación': `
        <div class="modal-content">
            <h3 class="modal-title">✖️ La Multiplicación</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Multiplicar es una forma abreviada de sumar varias veces un mismo número.</p>
                
                <h4>Ejemplo contextual</h4>
                <p>Una entrada cuesta 38 €, cinco entradas cuestan:</p>
                <p>38 + 38 + 38 + 38 + 38 = 38 · 5 = 190 €</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Propiedad</th>
                                <th>Descripción</th>
                                <th>Ejemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Conmutativa</td>
                                <td>El orden no afecta el resultado</td>
                                <td>3 × 5 = 5 × 3 = 15</td>
                            </tr>
                            <tr>
                                <td>Distributiva</td>
                                <td>Distribución sobre suma/resta</td>
                                <td>3 × (4 + 2) = (3 × 4) + (3 × 2)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '➗ División': `
        <div class="modal-content">
            <h3 class="modal-title">➗ La División</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Dividir es repartir o distribuir en partes iguales.</p>
                
                <h4>Ejemplo: 150 bombones entre 6 cajas</h4>
                <p>150 ÷ 6 = 25 bombones por caja</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Ejemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>División exacta</td>
                                <td>Sin resto</td>
                                <td>12 ÷ 3 = 4</td>
                            </tr>
                            <tr>
                                <td>División con resto</td>
                                <td>Queda un valor residual</td>
                                <td>14 ÷ 3 = 4 resto 2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '🔄 Uso de Paréntesis': `
        <div class="modal-content">
            <h3 class="modal-title">🔄 Uso de Paréntesis</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Los paréntesis se utilizan para agrupar operaciones y cambiar el orden natural de cálculo.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Operación</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sin paréntesis</td>
                                <td>9 – 1 + 3</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>Con paréntesis</td>
                                <td>9 – (1 + 3)</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '🧮 Orden de Operaciones': `
        <div class="modal-content">
            <h3 class="modal-title">🧮 Orden de las Operaciones</h3>
            
            <div class="modal-section">
                <h4>Reglas</h4>
                <p>Cuando una expresión contiene varias operaciones, se sigue este orden:</p>
                <ol>
                    <li>Paréntesis</li>
                    <li>Multiplicaciones y divisiones</li>
                    <li>Sumas y restas</li>
                </ol>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Expresión</th>
                                <th>Paso a Paso</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6 + 2 · 4</td>
                                <td>Primero 2 · 4, luego suma</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>(6 + 2) · 4</td>
                                <td>Primero paréntesis, luego multiplica</td>
                                <td>32</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '🧠 Cálculo Mental': `
        <div class="modal-content">
            <h3 class="modal-title">🧠 Cálculo Mental</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Técnicas para realizar cálculos rápidamente sin ayuda de calculadora.</p>
                
                <h4>Operaciones Simples</h4>
                <ul>
                    <li>20 + 6</li>
                    <li>68 + 10</li>
                    <li>27 – 5</li>
                    <li>15 – 10</li>
                </ul>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Expresión 1</th>
                                <th>Expresión 2</th>
                                <th>Diferencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13 – (9 + 3)</td>
                                <td>(13 + 3) – 9</td>
                                <td>Distintos resultados</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
};

// Función para abrir modales
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando modales');
    const modalButtons = document.querySelectorAll('.abrir-modal');
    const modals = document.querySelectorAll('.modal-overlay');
    
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

    console.log(`Botones de modal encontrados: ${modalButtons.length}`);
    console.log(`Modales encontrados: ${modals.length}`);

    modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botón de modal clickeado');

            const modalKey = button.closest('.tarjeta').dataset.modal;
            const modalOverlay = document.getElementById(`modal-${modalKey}`);
            const modalContent = modalOverlay.querySelector('.modal-contenido');
            
            console.log(`Modal key: ${modalKey}`);
            console.log(`Modal overlay: ${modalOverlay}`);

            // Buscar el contenido del modal por su título
            const modalTitle = button.closest('.tarjeta').querySelector('h3').textContent;
            console.log(`Título del modal: ${modalTitle}`);

            const modalText = modalContents[modalTitle];
            console.log(`Contenido del modal: ${modalText ? 'Encontrado' : 'No encontrado'}`);

            if (modalText) {
                modalContent.innerHTML = `
                    <div class="modal-header">
                        <h2>${modalTitle}</h2>
                        <button class="btn-cerrar-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${modalText}
                    </div>
                `;
                
                modalOverlay.classList.add('mostrar');
                
                // Añadir evento de cierre
                const closeBtn = modalContent.querySelector('.btn-cerrar-modal');
                closeBtn.addEventListener('click', () => {
                    modalOverlay.classList.remove('mostrar');
                });
            } else {
                console.error(`No se encontró contenido para el modal: ${modalTitle}`);
            }
        });
    });

    // Cerrar modal si se hace clic fuera de él
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
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
