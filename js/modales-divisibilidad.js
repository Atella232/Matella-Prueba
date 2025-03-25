// Contenido de modales para Divisibilidad
const modalContents = {
    '📊 Relación de Divisibilidad': `
        <div class="modal-content">
            <h3 class="modal-title">📊 Relación de Divisibilidad</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Un número a es divisible por otro número b si al dividir a entre b, el resto es cero.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Ejemplo</th>
                                <th>Divisibilidad</th>
                                <th>Explicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24 ÷ 6</td>
                                <td>Divisible</td>
                                <td>24 ÷ 6 = 4 (sin resto)</td>
                            </tr>
                            <tr>
                                <td>25 ÷ 7</td>
                                <td>No Divisible</td>
                                <td>25 ÷ 7 = 3 resto 4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h4>Conceptos Clave</h4>
                <ul>
                    <li>Si b es divisor de a, entonces a es múltiplo de b</li>
                    <li>La divisibilidad implica división exacta</li>
                </ul>
            </div>
        </div>
    `,
    '🔢 Múltiplos': `
        <div class="modal-content">
            <h3 class="modal-title">🔢 Múltiplos de un Número</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Los múltiplos son el resultado de multiplicar un número por los números naturales.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Múltiplos</th>
                                <th>Patrón</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4</td>
                                <td>0, 4, 8, 12, 16, 20...</td>
                                <td>4 × (0, 1, 2, 3, 4, 5...)</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>0, 5, 10, 15, 20, 25...</td>
                                <td>5 × (0, 1, 2, 3, 4, 5...)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '🧩 Divisores': `
        <div class="modal-content">
            <h3 class="modal-title">🧩 Divisores de un Número</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>Divisores son números que dividen exactamente a otro número sin dejar resto.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Divisores</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12</td>
                                <td>1, 2, 3, 4, 6, 12</td>
                                <td>6 divisores</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>1, 3, 5, 15</td>
                                <td>4 divisores</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '📝 Criterios de Divisibilidad': `
        <div class="modal-content">
            <h3 class="modal-title">📝 Criterios de Divisibilidad</h3>
            
            <div class="modal-section">
                <h4>Reglas Rápidas de Divisibilidad</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Criterio de Divisibilidad</th>
                                <th>Ejemplos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>Termina en cifra par (0, 2, 4, 6, 8)</td>
                                <td>24, 36, 50, 128</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>La suma de sus cifras es múltiplo de 3</td>
                                <td>123 (1+2+3=6), 222, 333</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Las dos últimas cifras forman un número divisible por 4</td>
                                <td>124 (24 divisible por 4), 2048</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Termina en 0 o 5</td>
                                <td>25, 50, 100, 125</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>La suma de las cifras es múltiplo de 9</td>
                                <td>18 (1+8=9), 27, 36, 45</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Termina en 0</td>
                                <td>10, 20, 30, 100, 1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h4>Consejos Prácticos</h4>
                <ul>
                    <li>Estos criterios permiten verificar divisibilidad rápidamente</li>
                    <li>No sustituyen la división completa, son herramientas de verificación</li>
                    <li>Practicar estos criterios mejora la comprensión matemática</li>
                </ul>
            </div>
        </div>
    `,
    '🔍 Primos y Compuestos': `
        <div class="modal-content">
            <h3 class="modal-title">🔍 Números Primos y Compuestos</h3>
            
            <div class="modal-section">
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Definición</th>
                                <th>Ejemplos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Números Primos</td>
                                <td>Solo divisibles por 1 y sí mismo</td>
                                <td>2, 3, 5, 7, 11</td>
                            </tr>
                            <tr>
                                <td>Números Compuestos</td>
                                <td>Más de dos divisores</td>
                                <td>4, 6, 8, 9, 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '📈 Mínimo Común Múltiplo': `
        <div class="modal-content">
            <h3 class="modal-title">📈 Mínimo Común Múltiplo (m.c.m.)</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>El menor múltiplo común (distinto de cero) entre dos o más números.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Números</th>
                                <th>Descomposición</th>
                                <th>m.c.m.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12, 18</td>
                                <td>12 = 2² · 3, 18 = 2 · 3²</td>
                                <td>2² · 3² = 36</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '📉 Máximo Común Divisor': `
        <div class="modal-content">
            <h3 class="modal-title">📉 Máximo Común Divisor (m.c.d.)</h3>
            
            <div class="modal-section">
                <h4>Definición</h4>
                <p>El mayor número que divide a dos o más números.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Números</th>
                                <th>Descomposición</th>
                                <th>m.c.d.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12, 18</td>
                                <td>12 = 2² · 3, 18 = 2 · 3²</td>
                                <td>2¹ · 3¹ = 6</td>
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
    const topSection = document.getElementById('teoria-divisibilidad');
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
