// Configuración de modales para Álgebra
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
        'letras-numeros': `
            <div class="modal-header">
                <h2>🧩 Letras en vez de números</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Incógnitas y Variables</h3>
                <p>En muchas situaciones desconocemos el valor exacto de una cantidad, pero podemos representarla con una letra. Esta letra se llama incógnita o variable.</p>
                
                <h3>¿Para qué sirve?</h3>
                <ul>
                    <li>Para generalizar reglas.</li>
                    <li>Para resolver problemas con datos desconocidos.</li>
                    <li>Para formular ecuaciones.</li>
                </ul>

                <h3>Ejemplos</h3>
                <p>Si x es la edad actual de Juan:</p>
                <ul>
                    <li>Dentro de 15 años tendrá: x + 15</li>
                    <li>Hace un año tenía: x - 1</li>
                    <li>El doble de esa edad: 2(x - 1)</li>
                </ul>

                <h3>Problema resuelto del libro</h3>
                <p>"Dentro de 15 años, la edad de Juan será igual al doble de la que tenía el año pasado."</p>
                <p>Planteamos: x + 15 = 2(x - 1)</p>
                <p>Resolución:</p>
                <pre>
x + 15 = 2x - 2
15 + 2 = 2x - x
x = 17
                </pre>
                <p>✅ Juan tiene 17 años.</p>
            </div>
        `,
        'expresiones-algebraicas': `
            <div class="modal-header">
                <h2>🔤 Expresiones algebraicas</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>¿Qué es una expresión algebraica?</h3>
                <p>Una expresión algebraica es una combinación de números, letras (variables) y operaciones.</p>
                
                <h3>¿Qué contiene?</h3>
                <ul>
                    <li>Letras → representan valores desconocidos.</li>
                    <li>Números → conocidos (coeficientes).</li>
                    <li>Operaciones → suma, resta, multiplicación, etc.</li>
                </ul>

                <h3>Ejemplos</h3>
                <ul>
                    <li>3x - 5 → tres veces un número menos cinco.</li>
                    <li>x² + 1 → el cuadrado de un número más uno.</li>
                    <li>(a + 1)b → el producto de "a más uno" por "b".</li>
                </ul>
            </div>
        `,
        'suma-resta-monomios': `
            <div class="modal-header">
                <h2>➕ Suma y resta de monomios</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Reglas básicas</h3>
                <p>Solo se pueden sumar o restar monomios que sean semejantes, es decir, que tengan exactamente la misma parte literal (mismas letras y mismos exponentes).</p>
                
                <h3>Monomios semejantes</h3>
                <ul>
                    <li>4x y 2x → se suman → 4x + 2x = 6x</li>
                    <li>a² y 3a² → se suman → a² + 3a² = 4a²</li>
                </ul>

                <h3>Monomios NO semejantes</h3>
                <ul>
                    <li>3a + 2b → se deja así, no se pueden sumar</li>
                    <li>x² + x → no se suman por tener diferente exponente</li>
                </ul>

                <h3>Ejemplos</h3>
                <ul>
                    <li>a + a + a = 3a</li>
                    <li>5x – 3x = 2x</li>
                    <li>a² + a² = 2a²</li>
                    <li>7x – (2x + x) = 7x – 3x = 4x</li>
                    <li>5a – (a – 4a) = 5a – (–3a) = 8a</li>
                </ul>
            </div>
        `,
        'multiplicacion-monomios': `
            <div class="modal-header">
                <h2>✖️ Multiplicación de monomios</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Propiedades</h3>
                <p>Multiplicar dos monomios siempre da otro monomio.</p>
                
                <h3>Regla importante</h3>
                <p>Al multiplicar potencias de la misma base, se suman los exponentes.</p>

                <h3>Ejemplos</h3>
                <ul>
                    <li>2x · 4x = 8x²</li>
                    <li>–2a · 5a = –10a²</li>
                    <li>3x² · 2x³ = 6x⁵</li>
                    <li>2m² · 2m⁴ = 4m⁶</li>
                </ul>
            </div>
        `,
        'multiplicacion-monomio-suma': `
            <div class="modal-header">
                <h2>🔢 Multiplicación de monomio por suma</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Propiedad distributiva</h3>
                <p>Se aplica la propiedad distributiva: a(b+c) = ab + ac</p>
                
                <h3>Ejemplos</h3>
                <ul>
                    <li>5(2a + 3a + 3ab) = 10a + 15a + 15ab</li>
                    <li>2x(x² + 2y) = 2x³ + 4xy</li>
                </ul>
            </div>
        `,
        'division-monomios': `
            <div class="modal-header">
                <h2>➗ División de monomios</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>La división de monomios se realiza siguiendo reglas específicas de exponentes y signos.</p>
                
                <div class="math-examples">
                    <div class="math-row">
                        <div class="math-expression">
                            <span class="fraction">
                                <span class="numerator">6x³</span>
                                <span class="denominator">2x</span>
                            </span>
                            <span class="math-equals">=</span>
                            <span class="result">3x²</span>
                        </div>
                    </div>
                    <div class="math-row">
                        <div class="math-expression">
                            <span class="fraction">
                                <span class="numerator">15a²</span>
                                <span class="denominator">-3a</span>
                            </span>
                            <span class="math-equals">=</span>
                            <span class="result">-5a</span>
                        </div>
                    </div>
                </div>

                <p>Pasos para dividir monomios:</p>
                <ol>
                    <li>Divide los coeficientes</li>
                    <li>Resta los exponentes de las variables</li>
                    <li>Mantén el signo resultante</li>
                </ol>
            </div>
        `,
        'ecuaciones': `
            <div class="modal-header">
                <h2>🟰 Ecuaciones</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>¿Qué es una ecuación?</h3>
                <p>Una ecuación es una igualdad entre dos expresiones algebraicas que contiene una o más incógnitas.</p>
                
                <h3>Objetivo</h3>
                <p>Encontrar el valor de la incógnita que hace cierta la igualdad.</p>

                <h3>Ejemplo</h3>
                <p>2x + 5 = 15</p>
                <p>Queremos saber qué valor de x hace que la izquierda sea igual a la derecha.</p>
            </div>
        `,
        'tecnicas-ecuaciones': `
            <div class="modal-header">
                <h2>🔍 Técnicas para resolver ecuaciones</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Método para resolver ecuaciones de primer grado</h3>
                <p>El libro presenta un método claro para resolver ecuaciones de primer grado:</p>
                
                <h3>Pasos</h3>
                <ol>
                    <li>Eliminar paréntesis (si los hay).</li>
                    <li>Reducir términos semejantes a cada lado.</li>
                    <li>Pasar las incógnitas a un lado y los números al otro.</li>
                    <li>Despejar la incógnita.</li>
                </ol>

                <h3>Ejemplo</h3>
                <pre>
4 + 2x = x + 10
→ 2x - x = 10 - 4
→ x = 6
                </pre>
                <p>✅ Solución: x = 6</p>
            </div>
        `,
        'ecuaciones-primer-grado': `
            <div class="modal-header">
                <h2>📐 Ecuaciones de primer grado</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Características</h3>
                <p>Una ecuación de primer grado con una incógnita es aquella que:</p>
                <ul>
                    <li>Tiene una sola letra (generalmente x).</li>
                    <li>Esa letra no está elevada a potencias mayores (ni al cuadrado, ni raíz...).</li>
                    <li>Tiene la forma general: ax + b = cx + d</li>
                </ul>
                
                <h3>Ejemplo</h3>
                <pre>
3x - 4 = 2x + 1
→ 3x - 2x = 1 + 4
→ x = 5
                </pre>
            </div>
        `,
        'problemas-ecuaciones': `
            <div class="modal-header">
                <h2>💡 Problemas con ecuaciones</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Traducción a lenguaje algebraico</h3>
                <p>Esta es la parte más interesante: traducir problemas reales a lenguaje algebraico.</p>
                
                <h3>Ejemplo del libro</h3>
                <p>"Un montón de monedas y un séptimo del montón valen 24 euros."</p>
                <p>Llamamos x al valor del montón:</p>
                <pre>
x + (1/7)x = 24
                </pre>
                <p>Reducimos:</p>
                <pre>
(8/7)x = 24
x = 24 × 7 / 8 = 21
                </pre>
                <p>✅ El montón vale 21 euros.</p>
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

    // Función para resolver ecuaciones (para la herramienta interactiva)
    window.resolverEcuacion = function() {
        const ecuacionInput = document.getElementById('ecuacion');
        const resultadoElement = document.getElementById('resultado');
        
        if (!ecuacionInput || !resultadoElement) {
            console.error('Elementos de la calculadora no encontrados');
            return;
        }
        
        const ecuacion = ecuacionInput.value.trim();
        
        if (!ecuacion) {
            resultadoElement.textContent = 'Resultado: Por favor, introduce una ecuación';
            return;
        }
        
        try {
            // Implementación simple para ecuaciones de primer grado del tipo ax + b = c
            if (ecuacion.includes('=')) {
                const partes = ecuacion.split('=');
                if (partes.length !== 2) {
                    throw new Error('Formato incorrecto. Usa el formato: ax + b = c');
                }
                
                // Esta es una implementación muy básica y limitada
                // En una aplicación real, se necesitaría un parser más complejo
                resultadoElement.textContent = 'Resultado: Ecuación procesada. Para ecuaciones complejas, consulta los ejemplos en la teoría.';
            } else {
                throw new Error('No se encontró el signo igual (=)');
            }
        } catch (error) {
            resultadoElement.textContent = `Resultado: Error - ${error.message}`;
        }
    };

    // Función para verificar respuestas del quiz
    window.verificarRespuesta = function(respuesta) {
        const resultadoQuiz = document.getElementById('resultado-quiz');
        
        if (!resultadoQuiz) {
            console.error('Elemento de resultado del quiz no encontrado');
            return;
        }
        
        // La respuesta correcta para "3x - 4 = 8" es x = 4
        if (respuesta === 4) {
            resultadoQuiz.textContent = '¡Correcto! x = 4 es la solución.';
            resultadoQuiz.style.color = 'green';
        } else {
            resultadoQuiz.textContent = 'Incorrecto. Inténtalo de nuevo.';
            resultadoQuiz.style.color = 'red';
        }
    };
});
