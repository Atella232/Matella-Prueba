// Configuración de modales para Tablas y Gráficas
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Scroll to the top of the page, ensuring header and navigation are visible
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    // Scroll to the top section for a calm, focused experience
    const topSection = document.getElementById('teoria-tablas');
    const herramientasSection = document.getElementById('herramientas-interactivas');
    
    if (topSection) {
        // Hide the interactive tools section by default
        if (herramientasSection) {
            herramientasSection.style.display = 'none';
        }
    }

    // Contenido de los modales
    const contenidosModales = {
        'coordenadas-cartesianas': `
            <div class="modal-header">
                <h2>📍 Coordenadas Cartesianas</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Concepto Histórico</h3>
                <p>René Descartes introdujo el sistema cartesiano en el siglo XVII como método para representar puntos en el plano mediante dos números: abscisa (x) y ordenada (y).</p>

                <div class="visual-container" style="display: flex; justify-content: center; margin: 20px 0;">
                    <svg width="360" height="300" style="border: 1px solid #ddd; background-color: #f9f9f9;">
                        <!-- Cuadrícula -->
                        <g stroke="#e0e0e0" stroke-width="1">
                            <!-- Líneas verticales -->
                            <line x1="40" y1="20" x2="40" y2="280" />
                            <line x1="100" y1="20" x2="100" y2="280" />
                            <line x1="160" y1="20" x2="160" y2="280" />
                            <line x1="220" y1="20" x2="220" y2="280" />
                            <line x1="280" y1="20" x2="280" y2="280" />
                            <line x1="340" y1="20" x2="340" y2="280" />
                            
                            <!-- Líneas horizontales -->
                            <line x1="20" y1="40" x2="340" y2="40" />
                            <line x1="20" y1="100" x2="340" y2="100" />
                            <line x1="20" y1="160" x2="340" y2="160" />
                            <line x1="20" y1="220" x2="340" y2="220" />
                            <line x1="20" y1="280" x2="340" y2="280" />
                        </g>
                        
                        <!-- Ejes -->
                        <line x1="20" y1="160" x2="340" y2="160" stroke="#000" stroke-width="2" />
                        <line x1="160" y1="20" x2="160" y2="280" stroke="#000" stroke-width="2" />
                        
                        <!-- Etiquetas de los ejes -->
                        <text x="330" y="150" font-size="16" font-weight="bold">X</text>
                        <text x="170" y="30" font-size="16" font-weight="bold">Y</text>
                        
                        <!-- Números en los ejes -->
                        <text x="40" y="155" text-anchor="middle" font-size="12">-3</text>
                        <text x="100" y="155" text-anchor="middle" font-size="12">-1</text>
                        <text x="160" y="155" text-anchor="middle" font-size="12">0</text>
                        <text x="220" y="155" text-anchor="middle" font-size="12">1</text>
                        <text x="280" y="155" text-anchor="middle" font-size="12">3</text>
                        
                        <text x="155" y="40" text-anchor="middle" font-size="12">3</text>
                        <text x="155" y="100" text-anchor="middle" font-size="12">1</text>
                        <text x="155" y="220" text-anchor="middle" font-size="12">-1</text>
                        <text x="155" y="280" text-anchor="middle" font-size="12">-3</text>
                        
                        <!-- Puntos de ejemplo con diferentes colores -->
                        <!-- P(3,5) estaría fuera del rango visible -->
                        <!-- Punto (3,1) -->
                        <circle cx="280" cy="100" r="6" fill="red" />
                        <text x="290" y="90" font-size="14" font-weight="bold" fill="red">P(3,1)</text>
                        
                        <!-- Punto (-2,2) -->
                        <circle cx="100" cy="40" r="6" fill="blue" />
                        <text x="110" y="30" font-size="14" font-weight="bold" fill="blue">Q(-1,2)</text>
                        
                        <!-- Punto (1,-2) -->
                        <circle cx="220" cy="220" r="6" fill="green" />
                        <text x="230" y="210" font-size="14" font-weight="bold" fill="green">R(1,-1)</text>
                        
                        <!-- Punto (-3,-1) -->
                        <circle cx="40" cy="220" r="6" fill="purple" />
                        <text x="50" y="210" font-size="14" font-weight="bold" fill="purple">S(-3,-1)</text>
                        
                        <!-- Cuadrantes -->
                        <text x="240" y="60" font-size="14" fill="#666">I Cuadrante</text>
                        <text x="60" y="60" font-size="14" fill="#666">II Cuadrante</text>
                        <text x="60" y="240" font-size="14" fill="#666">III Cuadrante</text>
                        <text x="240" y="240" font-size="14" fill="#666">IV Cuadrante</text>
                    </svg>
                </div>

                <h3>Sistema de Ejes</h3>
                <div class="table-container" style="margin: 15px 0;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                        <tr style="background-color: #f2f2f2;">
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Elemento</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Descripción</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Representación</th>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><strong>Eje X</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Eje horizontal que representa las <strong>abscisas</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">→</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><strong>Eje Y</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Eje vertical que representa las <strong>ordenadas</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">↑</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><strong>Origen (O)</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Punto de corte de los ejes con coordenadas (0,0)</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">O</td>
                        </tr>
                    </table>
                </div>

                <h3>Representación de Puntos</h3>
                <p>Cada punto del plano se determina por un par ordenado (x,y):</p>
                <ul>
                    <li>La primera coordenada (x) indica la distancia horizontal desde el origen</li>
                    <li>La segunda coordenada (y) indica la distancia vertical desde el origen</li>
                </ul>

                <h3>Ejemplos de Coordenadas</h3>
                <div class="table-container" style="margin: 15px 0;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                        <tr style="background-color: #f2f2f2;">
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Punto</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Coordenadas</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Ubicación</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Cuadrante</th>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">P</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">(3, 5)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">3 unidades a la derecha, 5 hacia arriba</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">I</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Q</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">(-2, 4)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">2 unidades a la izquierda, 4 hacia arriba</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">II</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">R</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">(-3, -2)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">3 unidades a la izquierda, 2 hacia abajo</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">III</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">S</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">(4, -1)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">4 unidades a la derecha, 1 hacia abajo</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">IV</td>
                        </tr>
                    </table>
                </div>

                <h3>Observaciones Importantes</h3>
                <div class="important-box" style="background-color: #f8f8f8; border-left: 4px solid #007bff; padding: 15px; margin: 15px 0;">
                    <p><strong>¡Recuerda!</strong></p>
                    <ul>
                        <li>El orden de las coordenadas importa: P(3,5) ≠ P(5,3)</li>
                        <li>Los cuatro cuadrantes permiten representar todas las combinaciones de valores positivos y negativos</li>
                    </ul>
                </div>
            </div>
        `,
        'informacion-puntos': `
            <div class="modal-header">
                <h2>📊 Información mediante Puntos</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Representación de Relaciones</h3>
                <p>Cada punto en el plano cartesiano puede representar la relación entre dos variables diferentes:</p>
                
                <div class="info-box" style="background-color: #e1f5fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <ul style="list-style-type: none; padding-left: 10px;">
                        <li>📏 <strong>Eje X:</strong> Representa la primera variable (independiente)</li>
                        <li>📐 <strong>Eje Y:</strong> Representa la segunda variable (dependiente)</li>
                        <li>🔍 <strong>Punto:</strong> Muestra el valor de ambas variables simultáneamente</li>
                    </ul>
                </div>

                <h3>Ejemplo Práctico: Edad y Estatura</h3>
                
                <div class="visual-container" style="display: flex; justify-content: center; margin: 20px 0;">
                    <svg width="500" height="380" style="border: 1px solid #ddd; background-color: #f9f9f9;">
                        <!-- Título del gráfico -->
                        <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold">Relación Edad-Estatura en una Familia</text>
                        
                        <!-- Ejes -->
                        <line x1="50" y1="320" x2="450" y2="320" stroke="#000" stroke-width="2" />
                        <line x1="50" y1="50" x2="50" y2="320" stroke="#000" stroke-width="2" />
                        
                        <!-- Etiquetas de los ejes -->
                        <text x="250" y="350" font-size="14" text-anchor="middle">Edad (años)</text>
                        <text x="20" y="180" font-size="14" text-anchor="middle" transform="rotate(-90, 20, 180)">Estatura (cm)</text>
                        
                        <!-- Marcas en el eje X -->
                        <line x1="100" y1="320" x2="100" y2="325" stroke="#000" stroke-width="1" />
                        <text x="100" y="340" font-size="12" text-anchor="middle">10</text>
                        
                        <line x1="150" y1="320" x2="150" y2="325" stroke="#000" stroke-width="1" />
                        <text x="150" y="340" font-size="12" text-anchor="middle">20</text>
                        
                        <line x1="200" y1="320" x2="200" y2="325" stroke="#000" stroke-width="1" />
                        <text x="200" y="340" font-size="12" text-anchor="middle">30</text>
                        
                        <line x1="250" y1="320" x2="250" y2="325" stroke="#000" stroke-width="1" />
                        <text x="250" y="340" font-size="12" text-anchor="middle">40</text>
                        
                        <line x1="300" y1="320" x2="300" y2="325" stroke="#000" stroke-width="1" />
                        <text x="300" y="340" font-size="12" text-anchor="middle">50</text>
                        
                        <line x1="350" y1="320" x2="350" y2="325" stroke="#000" stroke-width="1" />
                        <text x="350" y="340" font-size="12" text-anchor="middle">60</text>
                        
                        <line x1="400" y1="320" x2="400" y2="325" stroke="#000" stroke-width="1" />
                        <text x="400" y="340" font-size="12" text-anchor="middle">70</text>
                        
                        <!-- Marcas en el eje Y -->
                        <line x1="45" y1="280" x2="50" y2="280" stroke="#000" stroke-width="1" />
                        <text x="35" y="285" font-size="12" text-anchor="end">100</text>
                        
                        <line x1="45" y1="240" x2="50" y2="240" stroke="#000" stroke-width="1" />
                        <text x="35" y="245" font-size="12" text-anchor="end">120</text>
                        
                        <line x1="45" y1="200" x2="50" y2="200" stroke="#000" stroke-width="1" />
                        <text x="35" y="205" font-size="12" text-anchor="end">140</text>
                        
                        <line x1="45" y1="160" x2="50" y2="160" stroke="#000" stroke-width="1" />
                        <text x="35" y="165" font-size="12" text-anchor="end">160</text>
                        
                        <line x1="45" y1="120" x2="50" y2="120" stroke="#000" stroke-width="1" />
                        <text x="35" y="125" font-size="12" text-anchor="end">180</text>
                        
                        <line x1="45" y1="80" x2="50" y2="80" stroke="#000" stroke-width="1" />
                        <text x="35" y="85" font-size="12" text-anchor="end">200</text>
                        
                        <!-- Puntos que representan a los miembros de la familia -->
                        <!-- David (8 años, 120cm) -->
                        <circle cx="90" cy="240" r="7" fill="#4CAF50" />
                        <text x="90" y="230" font-size="12" text-anchor="middle" font-weight="bold">David</text>
                        
                        <!-- Ana (14 años, 160cm) -->
                        <circle cx="120" cy="160" r="7" fill="#2196F3" />
                        <text x="120" y="150" font-size="12" text-anchor="middle" font-weight="bold">Ana</text>
                        
                        <!-- Carlos (16 años, 170cm) -->
                        <circle cx="130" cy="140" r="7" fill="#9C27B0" />
                        <text x="130" y="130" font-size="12" text-anchor="middle" font-weight="bold">Carlos</text>
                        
                        <!-- Bernardo (42 años, 190cm) -->
                        <circle cx="250" cy="100" r="7" fill="#F44336" />
                        <text x="250" y="90" font-size="12" text-anchor="middle" font-weight="bold">Bernardo</text>
                        
                        <!-- María (40 años, 168cm) -->
                        <circle cx="240" cy="146" r="7" fill="#FF9800" />
                        <text x="240" y="136" font-size="12" text-anchor="middle" font-weight="bold">María</text>
                        
                        <!-- Abuelo (72 años, 175cm) -->
                        <circle cx="400" cy="135" r="7" fill="#795548" />
                        <text x="400" y="125" font-size="12" text-anchor="middle" font-weight="bold">Abuelo</text>
                    </svg>
                </div>

                <h3>Interpretación del Ejemplo</h3>
                <div class="table-container" style="margin: 15px 0;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                        <tr style="background-color: #f2f2f2;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Persona</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Coordenadas</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Interpretación</th>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">Bernardo</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">(42, 190)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Padre de familia, el más alto (mayor valor en eje Y)</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">María</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">(40, 168)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Madre de familia</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">Carlos</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">(16, 170)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Hijo adolescente en pleno crecimiento</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">Ana</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">(14, 160)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Hija adolescente</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">David</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">(8, 120)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Hijo pequeño (punto más cercano al origen)</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">Abuelo</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">(72, 175)</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">El de mayor edad (punto más a la derecha)</td>
                        </tr>
                    </table>
                </div>

                <h3>Importancia de la Interpretación</h3>
                <div class="important-box" style="background-color: #fff8e1; border-left: 4px solid #ffc107; padding: 15px; margin: 15px 0;">
                    <p><strong>Para una correcta interpretación, siempre debemos:</strong></p>
                    <ol>
                        <li>Identificar qué representa cada eje y sus unidades</li>
                        <li>Reconocer el significado de la posición de cada punto</li>
                        <li>Analizar los patrones y relaciones entre las variables</li>
                        <li>Observar la distribución general de los puntos</li>
                    </ol>
                </div>
            </div>
        `,
        'interpretacion-graficas': `
            <div class="modal-header">
                <h2>📈 Interpretación de Gráficas</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Variables y Dependencia</h3>
                <div class="variables-container" style="display: flex; justify-content: space-around; margin: 20px 0;">
                    <div class="variable-box" style="background-color: #e3f2fd; border-radius: 8px; padding: 15px; width: 45%; text-align: center;">
                        <h4 style="margin-top: 0; color: #0d47a1;">Variable Independiente (x)</h4>
                        <svg width="120" height="40">
                            <line x1="10" y1="20" x2="110" y2="20" stroke="#0d47a1" stroke-width="3" />
                            <polygon points="110,20 100,15 100,25" fill="#0d47a1" />
                        </svg>
                        <p>Se representa en el <strong>eje horizontal</strong></p>
                        <p>Es la causa o el factor que influye</p>
                    </div>
                    <div class="variable-box" style="background-color: #e8f5e9; border-radius: 8px; padding: 15px; width: 45%; text-align: center;">
                        <h4 style="margin-top: 0; color: #2e7d32;">Variable Dependiente (y)</h4>
                        <svg width="40" height="120">
                            <line x1="20" y1="110" x2="20" y2="10" stroke="#2e7d32" stroke-width="3" />
                            <polygon points="20,10 15,20 25,20" fill="#2e7d32" />
                        </svg>
                        <p>Se representa en el <strong>eje vertical</strong></p>
                        <p>Es el efecto o resultado observado</p>
                    </div>
                </div>
                
                <p>La gráfica muestra cómo cambia la variable dependiente (y) cuando cambia la variable independiente (x).</p>

                <h3>Lectura de Gráficas</h3>
                <div class="steps-container" style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <ol style="margin: 0; padding-left: 25px;">
                        <li style="margin-bottom: 10px;">Identifica qué representa cada eje y sus unidades</li>
                        <li style="margin-bottom: 10px;">Lee la gráfica de izquierda a derecha (siguiendo el eje X)</li>
                        <li style="margin-bottom: 10px;">Observa las tendencias generales (subidas, bajadas, estabilidad)</li>
                        <li style="margin-bottom: 0;">Identifica puntos máximos, mínimos y cambios significativos</li>
                    </ol>
                </div>

                <h3>Ejemplo: Gráfica de Peso</h3>
                <div class="visual-container" style="display: flex; justify-content: center; margin: 20px 0;">
                    <svg width="550" height="350" style="border: 1px solid #ddd; background-color: #f9f9f9;">
                        <!-- Título del gráfico -->
                        <text x="275" y="30" text-anchor="middle" font-size="16" font-weight="bold">Evolución del Peso de Ramón</text>
                        
                        <!-- Ejes -->
                        <line x1="50" y1="300" x2="500" y2="300" stroke="#000" stroke-width="2" />
                        <line x1="50" y1="50" x2="50" y2="300" stroke="#000" stroke-width="2" />
                        
                        <!-- Etiquetas de los ejes -->
                        <text x="275" y="330" font-size="14" text-anchor="middle">Edad (años)</text>
                        <text x="20" y="175" font-size="14" text-anchor="middle" transform="rotate(-90, 20, 175)">Peso (kg)</text>
                        
                        <!-- Marcas en el eje X -->
                        <line x1="50" y1="300" x2="50" y2="305" stroke="#000" stroke-width="1" />
                        <text x="50" y="320" font-size="12" text-anchor="middle">0</text>
                        
                        <line x1="95" y1="300" x2="95" y2="305" stroke="#000" stroke-width="1" />
                        <text x="95" y="320" font-size="12" text-anchor="middle">2</text>
                        
                        <line x1="140" y1="300" x2="140" y2="305" stroke="#000" stroke-width="1" />
                        <text x="140" y="320" font-size="12" text-anchor="middle">4</text>
                        
                        <line x1="185" y1="300" x2="185" y2="305" stroke="#000" stroke-width="1" />
                        <text x="185" y="320" font-size="12" text-anchor="middle">6</text>
                        
                        <line x1="230" y1="300" x2="230" y2="305" stroke="#000" stroke-width="1" />
                        <text x="230" y="320" font-size="12" text-anchor="middle">8</text>
                        
                        <line x1="275" y1="300" x2="275" y2="305" stroke="#000" stroke-width="1" />
                        <text x="275" y="320" font-size="12" text-anchor="middle">10</text>
                        
                        <line x1="320" y1="300" x2="320" y2="305" stroke="#000" stroke-width="1" />
                        <text x="320" y="320" font-size="12" text-anchor="middle">12</text>
                        
                        <line x1="365" y1="300" x2="365" y2="305" stroke="#000" stroke-width="1" />
                        <text x="365" y="320" font-size="12" text-anchor="middle">14</text>
                        
                        <line x1="410" y1="300" x2="410" y2="305" stroke="#000" stroke-width="1" />
                        <text x="410" y="320" font-size="12" text-anchor="middle">16</text>
                        
                        <line x1="455" y1="300" x2="455" y2="305" stroke="#000" stroke-width="1" />
                        <text x="455" y="320" font-size="12" text-anchor="middle">18</text>
                        
                        <!-- Marcas en el eje Y -->
                        <line x1="45" y1="300" x2="50" y2="300" stroke="#000" stroke-width="1" />
                        <text x="35" y="305" font-size="12" text-anchor="end">0</text>
                        
                        <line x1="45" y1="260" x2="50" y2="260" stroke="#000" stroke-width="1" />
                        <text x="35" y="265" font-size="12" text-anchor="end">10</text>
                        
                        <line x1="45" y1="220" x2="50" y2="220" stroke="#000" stroke-width="1" />
                        <text x="35" y="225" font-size="12" text-anchor="end">20</text>
                        
                        <line x1="45" y1="180" x2="50" y2="180" stroke="#000" stroke-width="1" />
                        <text x="35" y="185" font-size="12" text-anchor="end">30</text>
                        
                        <line x1="45" y1="140" x2="50" y2="140" stroke="#000" stroke-width="1" />
                        <text x="35" y="145" font-size="12" text-anchor="end">40</text>
                        
                        <line x1="45" y1="100" x2="50" y2="100" stroke="#000" stroke-width="1" />
                        <text x="35" y="105" font-size="12" text-anchor="end">50</text>
                        
                        <line x1="45" y1="60" x2="50" y2="60" stroke="#000" stroke-width="1" />
                        <text x="35" y="65" font-size="12" text-anchor="end">60</text>
                        
                        <!-- Gráfica del peso -->
                        <polyline 
                            points="
                                50,290
                                95,275
                                140,255
                                185,235
                                230,215
                                275,195
                                298,195
                                320,180
                                343,155
                                365,120
                                410,100
                                455,80
                            " 
                            fill="none" 
                            stroke="#1976D2" 
                            stroke-width="3" 
                        />
                        
                        <!-- Puntos en la gráfica -->
                        <circle cx="50" cy="290" r="4" fill="#1976D2" />
                        <circle cx="95" cy="275" r="4" fill="#1976D2" />
                        <circle cx="140" cy="255" r="4" fill="#1976D2" />
                        <circle cx="185" cy="235" r="4" fill="#1976D2" />
                        <circle cx="230" cy="215" r="4" fill="#1976D2" />
                        <circle cx="275" cy="195" r="4" fill="#1976D2" />
                        <circle cx="298" cy="195" r="4" fill="#1976D2" />
                        <circle cx="320" cy="180" r="4" fill="#1976D2" />
                        <circle cx="343" cy="155" r="4" fill="#1976D2" />
                        <circle cx="365" cy="120" r="4" fill="#1976D2" />
                        <circle cx="410" cy="100" r="4" fill="#1976D2" />
                        <circle cx="455" cy="80" r="4" fill="#1976D2" />
                        
                        <!-- Anotaciones explicativas -->
                        <!-- Crecimiento en primeros años -->
                        <rect x="100" y="240" width="100" height="25" fill="#E3F2FD" stroke="#2196F3" />
                        <text x="150" y="255" font-size="12" text-anchor="middle">Crecimiento regular</text>
                        <path d="M 150 240 L 150 220" stroke="#2196F3" stroke-width="1.5" stroke-dasharray="4" />
                        
                        <!-- Estancamiento -->
                        <rect x="250" y="180" width="70" height="25" fill="#FFEBEE" stroke="#F44336" />
                        <text x="285" y="195" font-size="12" text-anchor="middle">Estancamiento</text>
                        <path d="M 285 180 L 285 195" stroke="#F44336" stroke-width="1.5" stroke-dasharray="4" />
                        
                        <!-- Estirón -->
                        <rect x="345" y="120" width="50" height="25" fill="#E8F5E9" stroke="#4CAF50" />
                        <text x="370" y="135" font-size="12" text-anchor="middle">Estirón</text>
                        <path d="M 370 120 L 370 100" stroke="#4CAF50" stroke-width="1.5" stroke-dasharray="4" />
                        
                        <!-- Punto 60kg -->
                        <circle cx="365" cy="120" r="6" fill="#FF5722" stroke="#fff" stroke-width="1" />
                        <text x="385" y="110" font-size="12" fill="#FF5722" font-weight="bold">60kg</text>
                    </svg>
                </div>

                <h3>Interpretación del Ejemplo</h3>
                <div class="table-container" style="margin: 15px 0;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                        <tr style="background-color: #f2f2f2;">
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Tramo</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Edad</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Comportamiento</th>
                            <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Interpretación</th>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">1</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">0-10 años</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Pendiente constante ascendente</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Crecimiento normal y regular durante la infancia</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">2</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">10-11.5 años</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Línea horizontal</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Estancamiento del peso (período sin aumento)</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">3</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">11.5-14 años</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Pendiente pronunciada</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Estirón (aumento rápido de peso hasta 60 kg)</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">4</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">14-18 años</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Pendiente menos pronunciada</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Continúa el crecimiento pero más gradualmente</td>
                        </tr>
                    </table>
                </div>

                <h3>Tipos de Comportamientos en Gráficas</h3>
                <div class="patterns-container" style="display: flex; flex-wrap: wrap; justify-content: space-between; margin: 15px 0;">
                    <div class="pattern-box" style="width: 48%; background-color: #e8f5e9; padding: 10px; margin-bottom: 15px; border-radius: 8px;">
                        <h4 style="margin-top: 0; color: #2e7d32;">Crecimiento</h4>
                        <svg width="100%" height="60">
                            <line x1="10" y1="50" x2="95%" y2="10" stroke="#2e7d32" stroke-width="3" />
                            <circle cx="10" cy="50" r="4" fill="#2e7d32" />
                            <circle cx="95%" cy="10" r="4" fill="#2e7d32" />
                        </svg>
                        <p style="margin-bottom: 0;">La gráfica sube de izquierda a derecha</p>
                    </div>
                    <div class="pattern-box" style="width: 48%; background-color: #ffebee; padding: 10px; margin-bottom: 15px; border-radius: 8px;">
                        <h4 style="margin-top: 0; color: #c62828;">Decrecimiento</h4>
                        <svg width="100%" height="60">
                            <line x1="10" y1="10" x2="95%" y2="50" stroke="#c62828" stroke-width="3" />
                            <circle cx="10" cy="10" r="4" fill="#c62828" />
                            <circle cx="95%" cy="50" r="4" fill="#c62828" />
                        </svg>
                        <p style="margin-bottom: 0;">La gráfica baja de izquierda a derecha</p>
                    </div>
                    <div class="pattern-box" style="width: 48%; background-color: #e3f2fd; padding: 10px; margin-bottom: 15px; border-radius: 8px;">
                        <h4 style="margin-top: 0; color: #0d47a1;">Estabilidad</h4>
                        <svg width="100%" height="60">
                            <line x1="10" y1="30" x2="95%" y2="30" stroke="#0d47a1" stroke-width="3" />
                            <circle cx="10" cy="30" r="4" fill="#0d47a1" />
                            <circle cx="95%" cy="30" r="4" fill="#0d47a1" />
                        </svg>
                        <p style="margin-bottom: 0;">La gráfica se mantiene horizontal</p>
                    </div>
                    <div class="pattern-box" style="width: 48%; background-color: #fff8e1; padding: 10px; margin-bottom: 15px; border-radius: 8px;">
                        <h4 style="margin-top: 0; color: #ff8f00;">Oscilación</h4>
                        <svg width="100%" height="60">
                            <path d="M 10,30 Q 30,10 50,30 T 90,30 T 130,30 T 170,30" fill="none" stroke="#ff8f00" stroke-width="3" />
                            <circle cx="10" cy="30" r="4" fill="#ff8f00" />
                            <circle cx="50" cy="30" r="4" fill="#ff8f00" />
                            <circle cx="90" cy="30" r="4" fill="#ff8f00" />
                            <circle cx="130" cy="30" r="4" fill="#ff8f00" />
                            <circle cx="170" cy="30" r="4" fill="#ff8f00" />
                        </svg>
                        <p style="margin-bottom: 0;">La gráfica sube y baja periódicamente</p>
                    </div>
                </div>
            </div>
        `,
        'distribuciones-estadisticas': `
            <div class="modal-header">
                <h2>📋 Distribuciones Estadísticas</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Tipos de Variables</h3>
                <div class="variables-container" style="display: flex; justify-content: space-around; gap: 20px; margin: 20px 0;">
                    <div class="variable-box" style="background-color: #e1f5fe; border-radius: 8px; padding: 15px; width: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h4 style="margin-top: 0; color: #0277bd; text-align: center;">Variables Cuantitativas</h4>
                        <p style="text-align: center;"><strong>Representan cantidades numéricas</strong></p>
                        <div style="background-color: #b3e5fc; padding: 10px; border-radius: 5px;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>Edad (14 años)</li>
                                <li>Altura (175 cm)</li>
                                <li>Número de hermanos (2)</li>
                                <li>Calificaciones (7,5)</li>
                                <li>Temperatura (24°C)</li>
                            </ul>
                        </div>
                        <p style="text-align: center; margin-top: 10px;"><em>Con estos datos podemos calcular: media, mediana, moda</em></p>
                    </div>
                    <div class="variable-box" style="background-color: #f3e5f5; border-radius: 8px; padding: 15px; width: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h4 style="margin-top: 0; color: #7b1fa2; text-align: center;">Variables Cualitativas</h4>
                        <p style="text-align: center;"><strong>Representan categorías no numéricas</strong></p>
                        <div style="background-color: #e1bee7; padding: 10px; border-radius: 5px;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>Color favorito (Azul)</li>
                                <li>Deporte preferido (Fútbol)</li>
                                <li>Estación del año (Verano)</li>
                                <li>Género (Femenino)</li>
                                <li>País de origen (España)</li>
                            </ul>
                        </div>
                        <p style="text-align: center; margin-top: 10px;"><em>Con estos datos solo podemos calcular la moda</em></p>
                    </div>
                </div>

                <h3>Ejemplo de Encuesta (36 estudiantes)</h3>
                <div class="examples-container" style="display: flex; flex-wrap: wrap; gap: 20px; margin: 20px 0;">
                    <div class="example-quantitative" style="flex: 1; min-width: 300px;">
                        <h4 style="background-color: #0277bd; color: white; padding: 8px; border-radius: 5px 5px 0 0; margin: 0;">Variable cuantitativa: Número de hermanos</h4>
                        <div style="display: flex;">
                            <div style="flex: 1;">
                                <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                                    <tr style="background-color: #f2f2f2;">
                                        <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Nº de hermanos</th>
                                        <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Frecuencia (f)</th>
                                        <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Frecuencia relativa (fr)</th>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">4</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">11,1%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">1</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">16</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">44,4%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">2</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">9</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">25,0%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">3</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">6</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">16,7%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">4</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">1</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">2,8%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">0,0%</td>
                                    </tr>
                                    <tr style="background-color: #f2f2f2; font-weight: bold;">
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Total</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">36</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">100%</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                                <svg width="220" height="220">
                                    <!-- Eje X -->
                                    <line x1="30" y1="190" x2="200" y2="190" stroke="#000" stroke-width="2" />
                                    <!-- Eje Y -->
                                    <line x1="30" y1="190" x2="30" y2="20" stroke="#000" stroke-width="2" />
                                    
                                    <!-- Etiquetas eje X -->
                                    <text x="30" y="205" text-anchor="middle" font-size="12">0</text>
                                    <text x="60" y="205" text-anchor="middle" font-size="12">1</text>
                                    <text x="90" y="205" text-anchor="middle" font-size="12">2</text>
                                    <text x="120" y="205" text-anchor="middle" font-size="12">3</text>
                                    <text x="150" y="205" text-anchor="middle" font-size="12">4</text>
                                    <text x="180" y="205" text-anchor="middle" font-size="12">5</text>
                                    
                                    <!-- Barras del diagrama -->
                                    <rect x="25" y="170" width="10" height="20" fill="#0277bd" />
                                    <rect x="55" y="110" width="10" height="80" fill="#0277bd" />
                                    <rect x="85" y="145" width="10" height="45" fill="#0277bd" />
                                    <rect x="115" y="160" width="10" height="30" fill="#0277bd" />
                                    <rect x="145" y="185" width="10" height="5" fill="#0277bd" />
                                    <rect x="175" y="190" width="10" height="0" fill="#0277bd" />
                                    
                                    <!-- Título del gráfico -->
                                    <text x="110" y="15" text-anchor="middle" font-size="12" font-weight="bold">Diagrama de barras</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="example-qualitative" style="flex: 1; min-width: 300px;">
                        <h4 style="background-color: #7b1fa2; color: white; padding: 8px; border-radius: 5px 5px 0 0; margin: 0;">Variable cualitativa: Color favorito</h4>
                        <div style="display: flex;">
                            <div style="flex: 1;">
                                <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                                    <tr style="background-color: #f2f2f2;">
                                        <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Color</th>
                                        <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Frecuencia (f)</th>
                                        <th style="padding: 10px; border: 1px solid #ddd; text-align: center;">Frecuencia relativa (fr)</th>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Azul</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">12</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">33,3%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Rojo</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">10</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">27,8%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Verde</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">8</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">22,2%</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Amarillo</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">6</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">16,7%</td>
                                    </tr>
                                    <tr style="background-color: #f2f2f2; font-weight: bold;">
                                        <td style="padding: 10px; border: 1px solid #ddd;">Total</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">36</td>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">100%</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                                <svg width="220" height="220">
                                    <!-- Título del gráfico -->
                                    <text x="110" y="15" text-anchor="middle" font-size="12" font-weight="bold">Diagrama de sectores</text>
                                    
                                    <!-- Sectores del gráfico circular -->
                                    <!-- Calculamos los ángulos precisos basados en los porcentajes -->
                                    <!-- Azul: 33.3% (119.88°) - De 0° a 119.88° -->
                                    <path d="M 110,110 L 110,40 A 70,70 0 0,1 160.44,164.25 Z" fill="#1976D2" />
                                    <text x="140" y="80" font-size="13" font-weight="bold" fill="black">Azul</text>
                                    <text x="140" y="95" font-size="13" font-weight="bold" fill="black">33,3%</text>
                                    
                                    <!-- Rojo: 27.8% (100.08°) - De 119.88° a 219.96° -->
                                    <path d="M 110,110 L 160.44,164.25 A 70,70 0 0,1 59.56,164.25 Z" fill="#D32F2F" />
                                    <text x="150" y="150" font-size="13" font-weight="bold" fill="black">Rojo</text>
                                    <text x="150" y="165" font-size="13" font-weight="bold" fill="black">27,8%</text>
                                    
                                    <!-- Verde: 22.2% (79.92°) - De 219.96° a 299.88° -->
                                    <path d="M 110,110 L 59.56,164.25 A 70,70 0 0,1 59.56,55.75 Z" fill="#388E3C" />
                                    <text x="60" y="140" font-size="13" font-weight="bold" fill="black">Verde</text>
                                    <text x="60" y="155" font-size="13" font-weight="bold" fill="black">22,2%</text>
                                    
                                    <!-- Amarillo: 16.7% (60.12°) - De 299.88° a 360° -->
                                    <path d="M 110,110 L 59.56,55.75 A 70,70 0 0,1 110,40 Z" fill="#FBC02D" />
                                    <text x="80" y="65" font-size="13" font-weight="bold" fill="black">Amarillo</text>
                                    <text x="80" y="80" font-size="13" font-weight="bold" fill="black">16,7%</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Tablas de Frecuencia</h3>
                <div class="frequency-info" style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #03a9f4;">
                    <p><strong>En las tablas de frecuencia podemos encontrar:</strong></p>
                    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                        <div style="flex: 1; min-width: 300px;">
                            <h4 style="margin-top: 0; color: #0277bd;">Frecuencia absoluta (f)</h4>
                            <div style="background-color: #e1f5fe; padding: 10px; border-radius: 5px;">
                                <p><strong>Definición:</strong> Número de veces que aparece un valor o categoría</p>
                                <p><strong>Ejemplo:</strong> 12 estudiantes eligieron el color azul como favorito</p>
                                <p><strong>Suma:</strong> La suma de todas las frecuencias absolutas es igual al número total de datos (N)</p>
                            </div>
                        </div>
                        <div style="flex: 1; min-width: 300px;">
                            <h4 style="margin-top: 0; color: #0277bd;">Frecuencia relativa (fr)</h4>
                            <div style="background-color: #e1f5fe; padding: 10px; border-radius: 5px;">
                                <p><strong>Definición:</strong> Proporción que representa respecto al total</p>
                                <p><strong>Cálculo:</strong> fr = f/N (donde N es el total de datos)</p>
                                <p><strong>Expresión:</strong> Puede expresarse como fracción (12/36), decimal (0,333) o porcentaje (33,3%)</p>
                                <p><strong>Suma:</strong> La suma de todas las frecuencias relativas es igual a 1 (o 100%)</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="formula-box" style="background-color: #e8eaf6; padding: 15px; border-radius: 8px; text-align: center; margin: 15px 0;">
                    <p style="font-size: 18px; font-weight: bold; margin: 0;">
                        Frecuencia relativa = Frecuencia absoluta / Número total de datos
                    </p>
                    <p style="font-size: 20px; margin: 10px 0;">
                        fr = f/N
                    </p>
                </div>
            </div>
        `,
        'parametros-estadisticos': `
            <div class="modal-header">
                <h2>📏 Parámetros Estadísticos</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3 class="section-title">Medidas de Centralización</h3>
                <p>Son valores que resumen o representan el conjunto de datos:</p>

                <div class="card">
                    <h4>Media (promedio)</h4>
                    <div class="visualization-container">
                        <div class="formula-display">
                            <span style="font-size: 18px; font-weight: bold;">Media = Suma de todos los valores / n</span>
                        </div>
                        <div class="example-visual">
                            <svg width="300" height="120" viewBox="0 0 300 120">
                                <!-- Etiquetas valores -->
                                <text x="20" y="110" text-anchor="middle">4</text>
                                <text x="50" y="110" text-anchor="middle">6</text>
                                <text x="80" y="110" text-anchor="middle">8</text>
                                <text x="110" y="110" text-anchor="middle">8</text>
                                <text x="140" y="110" text-anchor="middle">9</text>
                                <text x="170" y="110" text-anchor="middle">10</text>
                                <text x="200" y="110" text-anchor="middle">10</text>
                                <text x="230" y="110" text-anchor="middle">10</text>
                                
                                <!-- Línea base -->
                                <line x1="10" y1="100" x2="250" y2="100" stroke="#333" stroke-width="1" />
                                
                                <!-- Barras de valores -->
                                <rect x="10" y="60" width="20" height="40" fill="#4285f4" />
                                <rect x="40" y="40" width="20" height="60" fill="#4285f4" />
                                <rect x="70" y="20" width="20" height="80" fill="#4285f4" />
                                <rect x="100" y="20" width="20" height="80" fill="#4285f4" />
                                <rect x="130" y="10" width="20" height="90" fill="#4285f4" />
                                <rect x="160" y="0" width="20" height="100" fill="#4285f4" />
                                <rect x="190" y="0" width="20" height="100" fill="#4285f4" />
                                <rect x="220" y="0" width="20" height="100" fill="#4285f4" />
                                
                                <!-- Línea de media -->
                                <line x1="10" y1="19" x2="250" y2="19" stroke="#E53935" stroke-width="2" stroke-dasharray="5,5" />
                                <text x="260" y="23" fill="#E53935" font-weight="bold">Media: 8,125</text>
                                
                                <!-- Leyenda explicativa -->
                                <text x="10" y="140" fill="#333">Altura de las barras = valor del dato</text>
                                <text x="10" y="155" fill="#E53935" style="font-weight: bold">Línea roja = Media (8,125)</text>
                            </svg>
                        </div>
                    </div>
                    <ul>
                        <li>Es la suma de todos los valores dividida entre el número total de datos</li>
                        <li>Fórmula: Media = suma de todos los valores / número de datos</li>
                        <li>Ejemplo: Para los valores {4, 6, 8, 8, 9, 10, 10, 10}
                            <div class="calculation-box">
                                Media = (4 + 6 + 8 + 8 + 9 + 10 + 10 + 10) / 8 = 65 / 8 = 8,125
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="card">
                    <h4>Mediana</h4>
                    <div class="visualization-container">
                        <table class="data-table">
                            <tr>
                                <td>4</td>
                                <td>6</td>
                                <td>8</td>
                                <td>8</td>
                                <td class="median-left">9</td>
                                <td class="median-right">10</td>
                                <td>10</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="arrow-container">
                                    <span class="arrow">←</span>
                                </td>
                                <td colspan="2" class="median-label">Mediana = (8+9)/2 = 8,5</td>
                                <td colspan="2" class="arrow-container">
                                    <span class="arrow">→</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <ul>
                        <li>Es el valor central cuando los datos están ordenados</li>
                        <li>Si hay un número par de datos, es la media de los dos valores centrales</li>
                        <li>Ejemplo: Para los valores ordenados {4, 6, 8, 8, 9, 10, 10, 10}
                            <ul>
                                <li>Hay 8 datos (número par)</li>
                                <li>Los valores centrales son 8 y 9</li>
                                <li>Mediana = (8 + 9)/2 = 8,5</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="card">
                    <h4>Moda</h4>
                    <div class="visualization-container">
                        <div class="frequency-chart">
                            <svg width="300" height="120" viewBox="0 0 300 120">
                                <!-- Ejes -->
                                <line x1="40" y1="100" x2="280" y2="100" stroke="#333" stroke-width="2" />
                                <line x1="40" y1="100" x2="40" y2="20" stroke="#333" stroke-width="2" />
                                <!-- Barras -->
                                <rect x="60" y="90" width="30" height="10" fill="#4CAF50" />
                                <rect x="100" y="80" width="30" height="20" fill="#4CAF50" />
                                <rect x="140" y="70" width="30" height="30" fill="#4CAF50" />
                                <rect x="180" y="70" width="30" height="30" fill="#4CAF50" />
                                <rect x="220" y="40" width="30" height="60" fill="#FF5722" />
                                <!-- Etiquetas -->
                                <text x="75" y="115" text-anchor="middle">4</text>
                                <text x="115" y="115" text-anchor="middle">6</text>
                                <text x="155" y="115" text-anchor="middle">8</text>
                                <text x="195" y="115" text-anchor="middle">9</text>
                                <text x="235" y="115" text-anchor="middle" font-weight="bold">10</text>
                                <!-- Frecuencias -->
                                <text x="75" y="87" text-anchor="middle" fill="white" font-size="9">1</text>
                                <text x="115" y="77" text-anchor="middle" fill="white" font-size="9">1</text>
                                <text x="155" y="67" text-anchor="middle" fill="white" font-size="9">2</text>
                                <text x="195" y="67" text-anchor="middle" fill="white" font-size="9">1</text>
                                <text x="235" y="37" text-anchor="middle" fill="white" font-size="9">3</text>
                                <!-- Flecha a la moda -->
                                <text x="235" y="25" text-anchor="middle" font-weight="bold" fill="#FF5722">MODA</text>
                                <path d="M235,30 L235,37" stroke="#FF5722" stroke-width="2" marker-end="url(#arrowhead)" />
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#FF5722" />
                                    </marker>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <ul>
                        <li>Es el valor que aparece con mayor frecuencia</li>
                        <li>Ejemplo: Para los valores {4, 6, 8, 8, 9, 10, 10, 10}
                            <ul>
                                <li>Moda = 10 (aparece tres veces)</li>
                            </ul>
                        </li>
                        <li>Puede haber más de una moda (distribución bimodal o multimodal)</li>
                    </ul>
                </div>

                <div class="comparison-container">
                    <h3>Comparación visual de medidas</h3>
                    <div class="visual-comparison">
                        <svg width="100%" height="150" viewBox="0 0 500 150">
                            <!-- Datos -->
                            <rect x="40" y="70" width="30" height="30" fill="#BBDEFB" />
                            <rect x="80" y="60" width="30" height="40" fill="#BBDEFB" />
                            <rect x="120" y="50" width="30" height="50" fill="#BBDEFB" />
                            <rect x="160" y="50" width="30" height="50" fill="#BBDEFB" />
                            <rect x="200" y="40" width="30" height="60" fill="#BBDEFB" />
                            <rect x="240" y="30" width="30" height="70" fill="#BBDEFB" />
                            <rect x="280" y="30" width="30" height="70" fill="#BBDEFB" />
                            <rect x="320" y="30" width="30" height="70" fill="#BBDEFB" />
                            <!-- Línea base -->
                            <line x1="30" y1="100" x2="370" y2="100" stroke="#333" stroke-width="1" />
                            <!-- Líneas de medidas -->
                            <line x1="30" y1="50" x2="370" y2="50" stroke="#E53935" stroke-width="2" stroke-dasharray="5,5" />
                            <line x1="30" y1="40" x2="370" y2="40" stroke="#1E88E5" stroke-width="2" stroke-dasharray="5,5" />
                            <line x1="30" y1="30" x2="370" y2="30" stroke="#43A047" stroke-width="2" stroke-dasharray="5,5" />
                            <!-- Etiquetas -->
                            <text x="380" y="53" fill="#E53935" font-weight="bold">Media (8,125)</text>
                            <text x="380" y="43" fill="#1E88E5" font-weight="bold">Mediana (8,5)</text>
                            <text x="380" y="33" fill="#43A047" font-weight="bold">Moda (10)</text>
                            <!-- Valores -->
                            <text x="55" y="115" text-anchor="middle">4</text>
                            <text x="95" y="115" text-anchor="middle">6</text>
                            <text x="135" y="115" text-anchor="middle">8</text>
                            <text x="175" y="115" text-anchor="middle">8</text>
                            <text x="215" y="115" text-anchor="middle">9</text>
                            <text x="255" y="115" text-anchor="middle">10</text>
                            <text x="295" y="115" text-anchor="middle">10</text>
                            <text x="335" y="115" text-anchor="middle">10</text>
                            
                            <!-- Leyenda explicativa -->
                            <text x="40" y="140" font-size="12">Cada barra representa un valor del conjunto de datos</text>
                        </svg>
                    </div>
                </div>

                <h3>Observaciones</h3>
                <div class="observations-container">
                    <div class="observation-card qualitative">
                        <h4>Variables Cualitativas</h4>
                        <div class="observation-content">
                            <div class="icon-container">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="25" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2" />
                                    <text x="30" y="25" text-anchor="middle" font-size="12">Solo</text>
                                    <text x="30" y="40" text-anchor="middle" font-weight="bold" font-size="16">MODA</text>
                                </svg>
                            </div>
                            <div class="text-container">
                                <p>Para variables <strong>cualitativas</strong> (colores, marcas, opiniones) solo se puede calcular la <strong>moda</strong></p>
                                <p class="example">Ejemplo: Color favorito en una clase</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="observation-card quantitative">
                        <h4>Variables Cuantitativas</h4>
                        <div class="observation-content">
                            <div class="icon-container">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="25" fill="#E3F2FD" stroke="#42A5F5" stroke-width="2" />
                                    <text x="30" y="20" text-anchor="middle" font-size="10">Se calculan</text>
                                    <text x="30" y="32" text-anchor="middle" font-weight="bold" font-size="12">MEDIA</text>
                                    <text x="30" y="44" text-anchor="middle" font-weight="bold" font-size="12">MEDIANA</text>
                                    <text x="30" y="56" text-anchor="middle" font-weight="bold" font-size="12">MODA</text>
                                </svg>
                            </div>
                            <div class="text-container">
                                <p>Para variables <strong>cuantitativas</strong> (altura, peso, edad) se pueden calcular los tres parámetros: media, mediana y moda</p>
                                <p class="example">Ejemplo: Estaturas en centímetros</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sensitivity-box">
                    <h4>Sensibilidad a valores extremos</h4>
                    <div class="sensitivity-content">
                        <div class="sensitivity-visual">
                            <svg width="400" height="120" viewBox="0 0 400 120">
                                <!-- Datos originales -->
                                <rect x="50" y="60" width="20" height="40" fill="#64B5F6" />
                                <rect x="80" y="40" width="20" height="60" fill="#64B5F6" />
                                <rect x="110" y="30" width="20" height="70" fill="#64B5F6" />
                                <rect x="140" y="50" width="20" height="50" fill="#64B5F6" />
                                <!-- Valor extremo -->
                                <rect x="170" y="10" width="20" height="90" fill="#EF5350" />
                                <!-- Línea base -->
                                <line x1="40" y1="100" x2="200" y2="100" stroke="#333" stroke-width="1" />
                                <!-- Mediana inicial -->
                                <line x1="40" y1="50" x2="200" y2="50" stroke="#1565C0" stroke-width="2" stroke-dasharray="5,5" />
                                <text x="210" y="53" fill="#1565C0" font-weight="bold">Mediana</text>
                                <!-- Media inicial -->
                                <line x1="40" y1="45" x2="200" y2="45" stroke="#E53935" stroke-width="2" stroke-dasharray="5,5" />
                                <text x="210" y="40" fill="#E53935" font-weight="bold">Media inicial</text>
                                <!-- Media con valor extremo -->
                                <line x1="40" y1="30" x2="200" y2="30" stroke="#E53935" stroke-width="2" />
                                <text x="210" y="25" fill="#E53935" font-weight="bold">Media con valor extremo</text>
                                <!-- Valor extremo etiqueta -->
                                <text x="180" y="115" text-anchor="middle">EXTREMO</text>
                            </svg>
                        </div>
                        <p><strong>La mediana es menos sensible a valores extremos que la media</strong>. Como puedes ver en el gráfico, al introducir un valor extremo la media cambia significativamente, mientras que la mediana se mantiene estable.</p>
                    </div>
                </div>
            </div>
        `,
        'graficos-estadisticos': `
            <div class="modal-header">
                <h2>📊 Gráficos Estadísticos</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Los gráficos estadísticos sirven para visualizar los datos de forma rápida y eficaz, facilitando su interpretación.</p>
                
                <div class="chart-card">
                    <h3>Diagrama de Barras</h3>
                    <div class="chart-visualization">
                        <svg width="350" height="200" viewBox="0 0 350 200">
                            <!-- Ejes -->
                            <line x1="40" y1="170" x2="300" y2="170" stroke="#333" stroke-width="2" />
                            <line x1="40" y1="170" x2="40" y2="30" stroke="#333" stroke-width="2" />
                            <!-- Barras -->
                            <rect x="70" y="70" width="30" height="100" fill="#42A5F5" />
                            <rect x="120" y="120" width="30" height="50" fill="#42A5F5" />
                            <rect x="170" y="90" width="30" height="80" fill="#42A5F5" />
                            <rect x="220" y="40" width="30" height="130" fill="#42A5F5" />
                            <!-- Etiquetas eje X -->
                            <text x="85" y="185" text-anchor="middle">Toyota</text>
                            <text x="135" y="185" text-anchor="middle">Ford</text>
                            <text x="185" y="185" text-anchor="middle">Honda</text>
                            <text x="235" y="185" text-anchor="middle">Audi</text>
                            <!-- Etiquetas eje Y -->
                            <text x="35" y="175" text-anchor="end">0</text>
                            <text x="35" y="125" text-anchor="end">5</text>
                            <text x="35" y="75" text-anchor="end">10</text>
                            <text x="35" y="25" text-anchor="end">15</text>
                            <!-- Líneas de cuadrícula -->
                            <line x1="40" y1="125" x2="300" y2="125" stroke="#ddd" stroke-width="1" />
                            <line x1="40" y1="75" x2="300" y2="75" stroke="#ddd" stroke-width="1" />
                            <line x1="40" y1="25" x2="300" y2="25" stroke="#ddd" stroke-width="1" />
                            <!-- Título -->
                            <text x="170" y="15" text-anchor="middle" font-weight="bold">Repostajes por marca de coche</text>
                        </svg>
                    </div>
                    <div class="chart-description">
                        <ul>
                            <li><strong>Uso</strong>: Para variables cualitativas o cuantitativas con pocos valores distintos</li>
                            <li><strong>Construcción</strong>:
                                <ul>
                                    <li>En el eje horizontal se representan los valores o categorías</li>
                                    <li>En el eje vertical se representan las frecuencias</li>
                                    <li>La altura de cada barra es proporcional a la frecuencia</li>
                                </ul>
                            </li>
                            <li><strong>Ejemplo</strong>: Número de veces que se echa gasolina según marca del coche</li>
                        </ul>
                    </div>
                </div>

                <div class="chart-card">
                    <h3>Histograma</h3>
                    <div class="chart-visualization">
                        <svg width="350" height="200" viewBox="0 0 350 200">
                            <!-- Ejes -->
                            <line x1="40" y1="170" x2="300" y2="170" stroke="#333" stroke-width="2" />
                            <line x1="40" y1="170" x2="40" y2="30" stroke="#333" stroke-width="2" />
                            <!-- Barras adosadas -->
                            <rect x="40" y="150" width="40" height="20" fill="#FF7043" />
                            <rect x="80" y="110" width="40" height="60" fill="#FF7043" />
                            <rect x="120" y="70" width="40" height="100" fill="#FF7043" />
                            <rect x="160" y="50" width="40" height="120" fill="#FF7043" />
                            <rect x="200" y="90" width="40" height="80" fill="#FF7043" />
                            <rect x="240" y="130" width="40" height="40" fill="#FF7043" />
                            
                            <!-- Etiquetas eje X (rotadas para evitar solapamiento) -->
                            <text x="60" y="185" text-anchor="middle" transform="rotate(0, 60, 185)">150-155</text>
                            <text x="100" y="197" text-anchor="middle" transform="rotate(0, 100, 197)">155-160</text>
                            <text x="140" y="185" text-anchor="middle" transform="rotate(0, 140, 185)">160-165</text>
                            <text x="180" y="197" text-anchor="middle" transform="rotate(0, 180, 197)">165-170</text>
                            <text x="220" y="185" text-anchor="middle" transform="rotate(0, 220, 185)">170-175</text>
                            <text x="260" y="197" text-anchor="middle" transform="rotate(0, 260, 197)">175-180</text>
                            
                            <!-- Etiquetas eje Y -->
                            <text x="35" y="170" text-anchor="end">0</text>
                            <text x="35" y="130" text-anchor="end">2</text>
                            <text x="35" y="90" text-anchor="end">4</text>
                            <text x="35" y="50" text-anchor="end">6</text>
                            
                            <!-- Título -->
                            <text x="170" y="15" text-anchor="middle" font-weight="bold">Distribución de estaturas en cm</text>
                        </svg>
                    </div>
                    <div class="chart-description">
                        <ul>
                            <li><strong>Uso</strong>: Para variables cuantitativas con muchos valores distintos</li>
                            <li><strong>Construcción</strong>:
                                <ul>
                                    <li>Los datos se agrupan en intervalos (clases)</li>
                                    <li>Las barras aparecen adosadas (sin separación)</li>
                                    <li>El área de cada barra representa la frecuencia</li>
                                </ul>
                            </li>
                            <li><strong>Ejemplo</strong>: Estaturas del alumnado de una clase agrupadas en intervalos</li>
                        </ul>
                    </div>
                </div>

                <div class="chart-card">
                    <h3>Polígono de Frecuencias</h3>
                    <div class="chart-visualization">
                        <svg width="350" height="200" viewBox="0 0 350 200">
                            <!-- Ejes -->
                            <line x1="40" y1="170" x2="300" y2="170" stroke="#333" stroke-width="2" />
                            <line x1="40" y1="170" x2="40" y2="30" stroke="#333" stroke-width="2" />
                            <!-- Barras transparentes -->
                            <rect x="40" y="150" width="40" height="20" fill="#9575CD" opacity="0.3" />
                            <rect x="80" y="110" width="40" height="60" fill="#9575CD" opacity="0.3" />
                            <rect x="120" y="70" width="40" height="100" fill="#9575CD" opacity="0.3" />
                            <rect x="160" y="50" width="40" height="120" fill="#9575CD" opacity="0.3" />
                            <rect x="200" y="90" width="40" height="80" fill="#9575CD" opacity="0.3" />
                            <rect x="240" y="130" width="40" height="40" fill="#9575CD" opacity="0.3" />
                            <!-- Línea polígono -->
                            <polyline points="60,150 100,110 140,70 180,50 220,90 260,130" 
                                    fill="none" stroke="#673AB7" stroke-width="3" />
                            <!-- Puntos en cada valor -->
                            <circle cx="60" cy="150" r="5" fill="#673AB7" />
                            <circle cx="100" cy="110" r="5" fill="#673AB7" />
                            <circle cx="140" cy="70" r="5" fill="#673AB7" />
                            <circle cx="180" cy="50" r="5" fill="#673AB7" />
                            <circle cx="220" cy="90" r="5" fill="#673AB7" />
                            <circle cx="260" cy="130" r="5" fill="#673AB7" />
                            <!-- Título -->
                            <text x="170" y="15" text-anchor="middle" font-weight="bold">Polígono de frecuencias</text>
                        </svg>
                    </div>
                    <div class="chart-description">
                        <ul>
                            <li><strong>Uso</strong>: Para visualizar tendencias y evolución de los datos</li>
                            <li><strong>Construcción</strong>:
                                <ul>
                                    <li>Se marca un punto en el extremo superior de cada barra de un diagrama de barras</li>
                                    <li>Se unen estos puntos mediante segmentos rectos</li>
                                </ul>
                            </li>
                            <li><strong>Ventaja</strong>: Permite visualizar la forma de la distribución</li>
                        </ul>
                    </div>
                </div>

                <div class="chart-card">
                    <h3>Diagrama de Sectores (Gráfico Circular)</h3>
                    <div class="chart-visualization">
                        <svg width="350" height="220" viewBox="0 0 350 220">
                            <!-- Título -->
                            <text x="175" y="15" text-anchor="middle" font-weight="bold">Calificaciones</text>
                            
                            <!-- Círculo principal -->
                            <g transform="translate(175, 110)">
                                <!-- Matemáticamente correcto: 
                                     Insuficiente (20%): 0° a 72°
                                     Suficiente (15%): 72° a 126°
                                     Bien (25%): 126° a 216°
                                     Notable (30%): 216° a 324°
                                     Sobresaliente (10%): 324° a 360° -->
                                
                                <!-- Insuficiente 20% (72°) -->
                                <path d="M 0 0 L 80 0 A 80 80 0 0 1 24.72 76.16 Z" fill="#F44336" />
                                
                                <!-- Suficiente 15% (54°) -->
                                <path d="M 0 0 L 24.72 76.16 A 80 80 0 0 1 -45.84 65.92 Z" fill="#FF9800" />
                                
                                <!-- Bien 25% (90°) -->
                                <path d="M 0 0 L -45.84 65.92 A 80 80 0 0 1 -67.88 -42.56 Z" fill="#FFC107" />
                                
                                <!-- Notable 30% (108°) -->
                                <path d="M 0 0 L -67.88 -42.56 A 80 80 0 0 1 47.04 -65.04 Z" fill="#4CAF50" />
                                
                                <!-- Sobresaliente 10% (36°) -->
                                <path d="M 0 0 L 47.04 -65.04 A 80 80 0 0 1 80 0 Z" fill="#2196F3" />
                                
                                <!-- Etiquetas con posiciones ajustadas -->
                                <text x="52" y="24" text-anchor="middle" fill="white" font-weight="bold">20%</text>
                                <text x="52" y="39" text-anchor="middle" fill="white">Insuf.</text>
                                
                                <text x="-10" y="65" text-anchor="middle" fill="white" font-weight="bold">15%</text>
                                <text x="-10" y="80" text-anchor="middle" fill="white">Suf.</text>
                                
                                <text x="-60" y="0" text-anchor="middle" fill="white" font-weight="bold">25%</text>
                                <text x="-60" y="15" text-anchor="middle" fill="white">Bien</text>
                                
                                <text x="-15" y="-60" text-anchor="middle" fill="white" font-weight="bold">30%</text>
                                <text x="-15" y="-45" text-anchor="middle" fill="white">Not.</text>
                                
                                <text x="65" y="-35" text-anchor="middle" fill="white" font-weight="bold">10%</text>
                                <text x="65" y="-20" text-anchor="middle" fill="white">Sob.</text>
                            </g>
                            
                            <!-- Leyenda -->
                            <g transform="translate(175, 200)">
                                <text x="0" y="0" text-anchor="middle" font-size="11" font-weight="bold">
                                    Insuf. (20%) | Suf. (15%) | Bien (25%) | Not. (30%) | Sob. (10%)
                                </text>
                            </g>
                        </svg>
                    </div>
                    <div class="chart-description">
                        <ul>
                            <li><strong>Uso</strong>: Ideal para mostrar proporciones o porcentajes del total</li>
                            <li><strong>Construcción</strong>:
                                <ul>
                                    <li>El círculo completo representa el 100% de los datos</li>
                                    <li>Cada sector tiene un ángulo proporcional a su frecuencia</li>
                                    <li>Ángulo = (frecuencia / total) × 360°</li>
                                </ul>
                            </li>
                            <li><strong>Ejemplo</strong>: Calificaciones en una asignatura (insuficiente, suficiente, bien, notable, sobresaliente)</li>
                        </ul>
                    </div>
                </div>

                <div class="selection-guide">
                    <h3>Elección del Gráfico Adecuado</h3>
                    <div class="selection-table">
                        <table style="width:100%; border-collapse: collapse; border: 1px solid #ddd; background-color: white;">
                            <thead>
                                <tr style="background-color: #3498db; color: white;">
                                    <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Tipo de Gráfico</th>
                                    <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Cuándo usarlo</th>
                                    <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Mejor para visualizar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background-color: #f2f9fe;">
                                    <td style="padding: 10px; border: 1px solid #ddd; vertical-align: middle;">
                                        <svg width="80" height="40" viewBox="0 0 80 40">
                                            <rect x="10" y="10" width="10" height="20" fill="#42A5F5" />
                                            <rect x="30" y="5" width="10" height="25" fill="#42A5F5" />
                                            <rect x="50" y="15" width="10" height="15" fill="#42A5F5" />
                                        </svg>
                                        <div style="text-align: center;">Diagrama de barras</div>
                                    </td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Categorías discretas para comparar</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Comparación entre categorías diferentes</td>
                                </tr>
                                <tr style="background-color: white;">
                                    <td style="padding: 10px; border: 1px solid #ddd; vertical-align: middle;">
                                        <svg width="80" height="40" viewBox="0 0 80 40">
                                            <rect x="10" y="15" width="15" height="15" fill="#FF7043" />
                                            <rect x="25" y="5" width="15" height="25" fill="#FF7043" />
                                            <rect x="40" y="10" width="15" height="20" fill="#FF7043" />
                                            <rect x="55" y="20" width="15" height="10" fill="#FF7043" />
                                        </svg>
                                        <div style="text-align: center;">Histograma</div>
                                    </td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Datos numéricos continuos</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Distribución de los datos y su frecuencia</td>
                                </tr>
                                <tr style="background-color: #f2f9fe;">
                                    <td style="padding: 10px; border: 1px solid #ddd; vertical-align: middle;">
                                        <svg width="80" height="40" viewBox="0 0 80 40">
                                            <circle cx="40" cy="20" r="15" fill="#2196F3" />
                                            <path d="M 40 20 L 40 5 A 15 15 0 0 1 53 28 Z" fill="#F44336" />
                                            <path d="M 40 20 L 53 28 A 15 15 0 0 1 27 28 Z" fill="#4CAF50" />
                                            <path d="M 40 20 L 27 28 A 15 15 0 0 1 40 5 Z" fill="#FFC107" />
                                        </svg>
                                        <div style="text-align: center;">Gráfico circular</div>
                                    </td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Partes de un todo</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Proporciones y porcentajes</td>
                                </tr>
                                <tr style="background-color: white;">
                                    <td style="padding: 10px; border: 1px solid #ddd; vertical-align: middle;">
                                        <svg width="80" height="40" viewBox="0 0 80 40">
                                            <polyline points="10,30 25,15 40,25 55,5 70,20" 
                                                    fill="none" stroke="#673AB7" stroke-width="2" />
                                            <circle cx="10" cy="30" r="3" fill="#673AB7" />
                                            <circle cx="25" cy="15" r="3" fill="#673AB7" />
                                            <circle cx="40" cy="25" r="3" fill="#673AB7" />
                                            <circle cx="55" cy="5" r="3" fill="#673AB7" />
                                            <circle cx="70" cy="20" r="3" fill="#673AB7" />
                                        </svg>
                                        <div style="text-align: center;">Polígono de frecuencias</div>
                                    </td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Datos que evolucionan</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Tendencias y cambios en los datos</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
    toggleToolsBtn.textContent = 'Mostrar Herramientas Interactivas';
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
            toggleToolsBtn.textContent = 'Ocultar Herramientas Interactivas';
            herramientasSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            herramientasSection.style.display = 'none';
            toggleToolsBtn.textContent = 'Mostrar Herramientas Interactivas';
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