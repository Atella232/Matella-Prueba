// Contenido de modales para Geometría
const modalContents = {
    '🔺 Triángulos': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Clasificación según Ángulos</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Ángulos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Acutángulo</td>
                                <td>Todos los ángulos son agudos</td>
                                <td>Menores de 90°</td>
                            </tr>
                            <tr>
                                <td>Rectángulo</td>
                                <td>Tiene un ángulo recto</td>
                                <td>Un ángulo de 90°</td>
                            </tr>
                            <tr>
                                <td>Obtusángulo</td>
                                <td>Tiene un ángulo obtuso</td>
                                <td>Mayor de 90°</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Clasificación según Lados</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Características</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Equilátero</td>
                                <td>Tres lados iguales</td>
                                <td>Tres ángulos iguales</td>
                            </tr>
                            <tr>
                                <td>Isósceles</td>
                                <td>Dos lados iguales</td>
                                <td>Ángulos opuestos iguales</td>
                            </tr>
                            <tr>
                                <td>Escaleno</td>
                                <td>Todos los lados diferentes</td>
                                <td>Todos los ángulos diferentes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Propiedades Adicionales</h4>
                <ul>
                    <li>La suma de los tres ángulos siempre es 180°</li>
                    <li>Medianas: unen vértices con puntos medios de lados opuestos</li>
                    <li>Se cortan en el baricentro (centro de gravedad)</li>
                </ul>
            </div>
        </div>
    `,
    '◼ Cuadriláteros': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Propiedades Generales</h4>
                <ul>
                    <li>Cuatro lados y dos diagonales</li>
                    <li>Suma de ángulos interiores: 360°</li>
                </ul>

                <h4>Paralelogramos</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Características</th>
                                <th>Simetría</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cuadrado</td>
                                <td>4 lados iguales, 4 ángulos rectos</td>
                                <td>4 ejes de simetría</td>
                            </tr>
                            <tr>
                                <td>Rectángulo</td>
                                <td>Lados opuestos iguales, 4 ángulos rectos</td>
                                <td>2 ejes de simetría</td>
                            </tr>
                            <tr>
                                <td>Rombo</td>
                                <td>4 lados iguales</td>
                                <td>2 ejes de simetría</td>
                            </tr>
                            <tr>
                                <td>Romboide</td>
                                <td>Lados opuestos iguales sin ángulos rectos</td>
                                <td>Sin ejes de simetría</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>No Paralelogramos</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Características</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Trapecio</td>
                                <td>Dos lados paralelos (bases)</td>
                            </tr>
                            <tr>
                                <td>Trapecio Rectángulo</td>
                                <td>Dos ángulos rectos</td>
                            </tr>
                            <tr>
                                <td>Trapecio Isósceles</td>
                                <td>Lados no paralelos iguales</td>
                            </tr>
                            <tr>
                                <td>Trapezoide</td>
                                <td>Ningún lado paralelo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '📐 Teorema de Pitágoras': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definición</h4>
                <p>En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.</p>

                <br>

                <div class="formula-container">
                    <h4>Fórmula</h4>
                    <p class="formula">a² = b² + c²</p>
                    <ul>
                        <li>a: hipotenusa (lado opuesto al ángulo recto)</li>
                        <li>b, c: catetos</li>
                        <br>
                    </ul>
                </div>

                <h4>Aplicaciones</h4>
                <ul>
                    <li>Calcular longitudes desconocidas</li>
                    <li>Resolver problemas de áreas</li>
                    <li>Aplicaciones en construcción y diseño</li>
                    <br>
                </ul>

                <h4>Ejemplo Práctico</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Cateto b</th>
                                <th>Cateto c</th>
                                <th>Hipotenusa a</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>12</td>
                                <td>13</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    '📏 Áreas y Perímetros': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Tabla de Áreas</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Figura</th>
                                <th>Imagen</th>
                                <th>Fórmula de Área</th>
                                <th>Fórmula de Perímetro</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
            <td>Triángulo</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <polygon points="50,10 10,90 90,90" fill="none" stroke="black" stroke-width="2"/>
                    <!-- Altura -->
                    <line x1="50" y1="10" x2="50" y2="90" stroke="black" stroke-width="1" stroke-dasharray="4,2"/>
                    <!-- Base -->
                    <line x1="10" y1="90" x2="90" y2="90" stroke="black" stroke-width="2"/>
                    <!-- Etiquetas -->
                    <text x="53" y="50" font-size="8">h</text>
                    <text x="50" y="98" font-size="8">base</text>
                </svg>
            </td>
            <td class="formula">A = (base × altura) ÷ 2</td>
            <td class="formula">P = a + b + c</td>
        </tr>
        <tr>
            <td>Cuadrado</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="black" stroke-width="2"/>
                    <!-- Etiqueta -->
                    <text x="48" y="85" font-size="8">lado</text>
                </svg>
            </td>
            <td class="formula">A = lado²</td>
            <td class="formula">P = 4 × lado</td>
        </tr>
        <tr>
            <td>Rectángulo</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <rect x="15" y="25" width="70" height="50" fill="none" stroke="black" stroke-width="2"/>
                    <!-- Etiquetas -->
                    <text x="45" y="20" font-size="8">base</text>
                    <text x="90" y="50" font-size="8">altura</text>
                </svg>
            </td>
            <td class="formula">A = base × altura</td>
            <td class="formula">P = 2(base + altura)</td>
        </tr>
        <tr>
            <td>Rombo</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="black" stroke-width="2"/>
                    <!-- Diagonales -->
                    <line x1="10" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" stroke-dasharray="4,2"/>
                    <line x1="50" y1="10" x2="50" y2="90" stroke="black" stroke-width="1" stroke-dasharray="4,2"/>
                    <!-- Etiquetas -->
                    <text x="45" y="55" font-size="8">D</text>
                    <text x="55" y="50" font-size="8">d</text>
                    <text x="70" y="40" font-size="8">lado</text>
                </svg>
            </td>
            <td class="formula">A = (D × d) ÷ 2</td>
            <td class="formula">P = 4 × lado</td>
        </tr>
        <tr>
            <td>Romboide</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <polygon points="20,30 80,30 70,70 10,70" fill="none" stroke="black" stroke-width="2"/>
                    <!-- Altura -->
                    <line x1="20" y1="30" x2="20" y2="70" stroke="black" stroke-width="1" stroke-dasharray="4,2"/>
                    <!-- Etiquetas -->
                    <text x="12" y="50" font-size="8">h</text>
                    <text x="45" y="25" font-size="8">base</text>
                    <text x="35" y="75" font-size="8">lado</text>
                </svg>
            </td>
            <td class="formula">A = base × altura</td>
            <td class="formula">P = 2(base + lado)</td>
        </tr>
        <tr>
            <td>Trapecio</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <polygon points="25,30 75,30 90,70 10,70" fill="none" stroke="black" stroke-width="2"/>
                    <!-- Altura -->
                    <line x1="25" y1="30" x2="25" y2="70" stroke="black" stroke-width="1" stroke-dasharray="4,2"/>
                    <!-- Etiquetas -->
                    <text x="18" y="50" font-size="8">h</text>
                    <text x="50" y="25" font-size="8">B</text>
                    <text x="50" y="75" font-size="8">b</text>
                    <text x="15" y="75" font-size="8">a</text>
                    <text x="85" y="75" font-size="8">C</text>
                </svg>
            </td>
            <td class="formula">A = ((B + b) × h) ÷ 2</td>
            <td class="formula">P = a + b + B + C</td>
        </tr>
        <tr>
            <td>Polígono Regular</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <!-- Hexágono regular -->
                    <polygon points="50,10 85,35 85,65 50,90 15,65 15,35" fill="none" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                    <!-- Centro del polígono -->
                    <circle cx="50" cy="50" r="1.5" fill="black" />
                    <!-- Apotema (del centro a la mitad de un lado) - CORREGIDO -->
                    <line x1="50" y1="50" x2="85" y2="50" stroke="red" stroke-width="1.5" stroke-dasharray="4,2"/>
                    <!-- Etiqueta -->
                    <text x="65" y="46" font-size="8" fill="red">a</text>
                    <text x="85" y="70" font-size="8">lado</text>
                </svg>
            </td>
            <td class="formula">A = (P × apotema) ÷ 2</td>
            <td class="formula">P = n × lado</td>
        </tr>
        <tr>
            <td>Círculo</td>
            <td>
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="black" stroke-width="2"/>
                    <!-- Solo radio -->
                    <line x1="50" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" stroke-dasharray="4,2"/>
                    <!-- Etiqueta -->
                    <text x="65" y="45" font-size="8">r</text>
                </svg>
            </td>
            <td class="formula">A = π × r²</td>
            <td class="formula">P = 2 × π × r</td>
        </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Conceptos Importantes</h4>
                <ul>
                    <li>El área mide la superficie de una figura</li>
                    <li>El perímetro mide el contorno de una figura</li>
                    <li>Unidades: u² para área, u para perímetro</li>
                    <li>D y d: diagonales del rombo</li>
                    <li>B y b: bases del trapecio</li>
                    <li>h: altura del trapecio</li>
                    <li>n: número de lados en polígonos regulares</li>
                </ul>
            </div>
        </div>
    `
};

// Función para abrir modales
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando modales de Geometría');
    const modalButtons = document.querySelectorAll('.abrir-modal');
    const modals = document.querySelectorAll('.modal-overlay');

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
});
