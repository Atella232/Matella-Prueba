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
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Ángulos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Acutángulo</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="50,5 10,70 90,70" fill="none" stroke="#3366CC" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Todos los ángulos son agudos</td>
                        <td>Menores de 90°</td>
                    </tr>
                    <tr>
                        <td>Rectángulo</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="10,70 10,20 90,70" fill="none" stroke="#CC3366" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Tiene un ángulo recto</td>
                        <td>Un ángulo de 90°</td>
                    </tr>
                    <tr>
                        <td>Obtusángulo</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="10,40 30,70 90,50" fill="none" stroke="#66CC33" stroke-width="2" />
                            </svg>
                        </td>
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
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Características</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Equilátero</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="50,5 10,70 90,70" fill="none" stroke="#9933CC" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Tres lados iguales</td>
                        <td>Tres ángulos iguales</td>
                    </tr>
                    <tr>
                        <td>Isósceles</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="50,5 20,70 80,70" fill="none" stroke="#CC9933" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Dos lados iguales</td>
                        <td>Ángulos opuestos iguales</td>
                    </tr>
                    <tr>
                        <td>Escaleno</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="20,20 10,70 90,60" fill="none" stroke="#33CCCC" stroke-width="2" />
                            </svg>
                        </td>
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
        
        <div style="margin-top: 20px; text-align: center;">
            <svg width="200" height="150" viewBox="0 0 200 150">
                <polygon points="100,10 20,140 180,140" fill="none" stroke="#333" stroke-width="2" />
                <!-- Medianas -->
                <line x1="100" y1="10" x2="100" y2="140" stroke="#FF6600" stroke-width="1.5" stroke-dasharray="5,3" />
                <line x1="20" y1="140" x2="140" y2="75" stroke="#FF6600" stroke-width="1.5" stroke-dasharray="5,3" />
                <line x1="180" y1="140" x2="60" y2="75" stroke="#FF6600" stroke-width="1.5" stroke-dasharray="5,3" />
                <!-- Baricentro -->
                <circle cx="100" cy="75" r="4" fill="#FF6600" />
            </svg>
            <p><em>Visualización de las medianas y el baricentro</em></p>
        </div>
    </div>
    
    <style>
        .modal-content {
            font-family: 'Segoe UI', Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 10px 20px;
            color: #444;
            line-height: 1.5;
        }
        .modal-section {
            margin-bottom: 20px;
        }
        .modal-table-container {
            overflow-x: auto;
            margin-bottom: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .modal-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
            background-color: white;
        }
        .modal-table th, .modal-table td {
            border: 1px solid #e6e6e6;
            padding: 12px;
            text-align: center;
        }
        .modal-table th {
            background-color: #4BAAE0;
            color: white;
            font-weight: 500;
            font-size: 15px;
        }
        .modal-table tr:nth-child(odd) {
            background-color: #ffffff;
        }
        .modal-table tr:nth-child(even) {
            background-color: #EDF5FA;
        }
        h4 {
            color: #4BAAE0;
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 500;
            border-bottom: 2px solid #4BAAE0;
            padding-bottom: 5px;
            display: inline-block;
        }
        ul {
            margin-left: 20px;
            padding-left: 15px;
            margin-top: 5px;
        }
        li {
            margin-bottom: 8px;
            position: relative;
        }
        p {
            margin-bottom: 15px;
        }
        .formula {
            font-weight: 500;
        }
        .formula-container {
            background-color: #f8f9fa;
            border-left: 4px solid #4BAAE0;
            padding: 10px 15px;
            margin: 10px 0;
            border-radius: 0 5px 5px 0;
        }
        .modal-header h2 {
            margin-bottom: 5px;
        }
    </style>
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
                        <th>Imagen</th>
                        <th>Características</th>
                        <th>Simetría</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cuadrado</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <rect x="20" y="10" width="60" height="60" fill="none" stroke="#3366CC" stroke-width="2" />
                            </svg>
                        </td>
                        <td>4 lados iguales, 4 ángulos rectos</td>
                        <td>4 ejes de simetría</td>
                    </tr>
                    <tr>
                        <td>Rectángulo</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <rect x="15" y="20" width="70" height="40" fill="none" stroke="#CC3366" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Lados opuestos iguales, 4 ángulos rectos</td>
                        <td>2 ejes de simetría</td>
                    </tr>
                    <tr>
                        <td>Rombo</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="50,10 85,40 50,70 15,40" fill="none" stroke="#66CC33" stroke-width="2" />
                            </svg>
                        </td>
                        <td>4 lados iguales</td>
                        <td>2 ejes de simetría</td>
                    </tr>
                    <tr>
                        <td>Romboide</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="20,20 80,20 60,60 0,60" fill="none" stroke="#9933CC" stroke-width="2" />
                            </svg>
                        </td>
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
                        <th>Imagen</th>
                        <th>Características</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trapecio</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="20,20 80,20 65,60 35,60" fill="none" stroke="#CC9933" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Dos lados paralelos (bases)</td>
                    </tr>
                    <tr>
                        <td>Trapecio Rectángulo</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="20,20 80,20 60,60 20,60" fill="none" stroke="#33CCCC" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Dos ángulos rectos</td>
                    </tr>
                    <tr>
                        <td>Trapecio Isósceles</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="25,20 75,20 85,60 15,60" fill="none" stroke="#FF6633" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Lados no paralelos iguales</td>
                    </tr>
                    <tr>
                        <td>Trapezoide</td>
                        <td>
                            <svg width="100" height="80" viewBox="0 0 100 80">
                                <polygon points="15,15 75,25 85,55 25,65" fill="none" stroke="#3399FF" stroke-width="2" />
                            </svg>
                        </td>
                        <td>Ningún lado paralelo</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
            <svg width="200" height="150" viewBox="0 0 200 150">
                <rect x="50" y="30" width="100" height="100" fill="none" stroke="#333" stroke-width="2" />
                <!-- Diagonales -->
                <line x1="50" y1="30" x2="150" y2="130" stroke="#FF6600" stroke-width="1.5" />
                <line x1="50" y1="130" x2="150" y2="30" stroke="#FF6600" stroke-width="1.5" />
            </svg>
            <p><em>Visualización de las diagonales en un cuadrilátero (cuadrado)</em></p>
        </div>
    </div>
    
    <style>
        .modal-content {
            font-family: 'Segoe UI', Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 10px 20px;
            color: #444;
            line-height: 1.5;
        }
        .modal-section {
            margin-bottom: 20px;
        }
        .modal-table-container {
            overflow-x: auto;
            margin-bottom: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .modal-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
            background-color: white;
        }
        .modal-table th, .modal-table td {
            border: 1px solid #e6e6e6;
            padding: 12px;
            text-align: center;
        }
        .modal-table th {
            background-color: #4BAAE0;
            color: white;
            font-weight: 500;
            font-size: 15px;
        }
        .modal-table tr:nth-child(odd) {
            background-color: #ffffff;
        }
        .modal-table tr:nth-child(even) {
            background-color: #EDF5FA;
        }
        h4 {
            color: #4BAAE0;
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 500;
            border-bottom: 2px solid #4BAAE0;
            padding-bottom: 5px;
            display: inline-block;
        }
        ul {
            margin-left: 20px;
            padding-left: 15px;
            margin-top: 5px;
        }
        li {
            margin-bottom: 8px;
            position: relative;
        }
        p {
            margin-bottom: 15px;
        }
        .modal-header h2 {
            margin-bottom: 5px;
        }
    </style>
</div>
    `,
    '📐 Teorema de Pitágoras': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definición</h4>
                <p>En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.</p>

                <div class="formula-container">
                    <h4>Fórmula</h4>
                    <p class="formula">a² = b² + c²</p>
                    <ul>
                        <li>a: hipotenusa (lado opuesto al ángulo recto)</li>
                        <li>b, c: catetos</li>
                    </ul>
                </div>

                <h4>Aplicaciones</h4>
                <ul>
                    <li>Calcular longitudes desconocidas</li>
                    <li>Resolver problemas de áreas</li>
                    <li>Aplicaciones en construcción y diseño</li>
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
        
        <style>
            .modal-content {
                font-family: 'Segoe UI', Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 10px 20px;
                color: #444;
                line-height: 1.5;
            }
            .modal-section {
                margin-bottom: 20px;
            }
            .modal-table-container {
                overflow-x: auto;
                margin-bottom: 15px;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .modal-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 15px;
                background-color: white;
            }
            .modal-table th, .modal-table td {
                border: 1px solid #e6e6e6;
                padding: 12px;
                text-align: center;
            }
            .modal-table th {
                background-color: #4BAAE0;
                color: white;
                font-weight: 500;
                font-size: 15px;
            }
            .modal-table tr:nth-child(odd) {
                background-color: #ffffff;
            }
            .modal-table tr:nth-child(even) {
                background-color: #EDF5FA;
            }
            h4 {
                color: #4BAAE0;
                margin-top: 15px;
                margin-bottom: 10px;
                font-size: 18px;
                font-weight: 500;
                border-bottom: 2px solid #4BAAE0;
                padding-bottom: 5px;
                display: inline-block;
            }
            ul {
                margin-left: 20px;
                padding-left: 15px;
                margin-top: 5px;
            }
            li {
                margin-bottom: 8px;
                position: relative;
            }
            p {
                margin-bottom: 15px;
            }
            .formula {
                font-weight: 500;
                font-size: 18px;
            }
            .formula-container {
                background-color: #f8f9fa;
                border-left: 4px solid #4BAAE0;
                padding: 10px 15px;
                margin: 10px 0;
                border-radius: 0 5px 5px 0;
            }
            .modal-header h2 {
                margin-bottom: 5px;
            }
        </style>
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
        
        <style>
            .modal-content {
                font-family: 'Segoe UI', Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 10px 20px;
                color: #444;
                line-height: 1.5;
            }
            .modal-section {
                margin-bottom: 20px;
            }
            .modal-table-container {
                overflow-x: auto;
                margin-bottom: 15px;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .modal-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 15px;
                background-color: white;
            }
            .modal-table th, .modal-table td {
                border: 1px solid #e6e6e6;
                padding: 12px;
                text-align: center;
            }
            .modal-table th {
                background-color: #4BAAE0;
                color: white;
                font-weight: 500;
                font-size: 15px;
            }
            .modal-table tr:nth-child(odd) {
                background-color: #ffffff;
            }
            .modal-table tr:nth-child(even) {
                background-color: #EDF5FA;
            }
            h4 {
                color: #4BAAE0;
                margin-top: 15px;
                margin-bottom: 10px;
                font-size: 18px;
                font-weight: 500;
                border-bottom: 2px solid #4BAAE0;
                padding-bottom: 5px;
                display: inline-block;
            }
            ul {
                margin-left: 20px;
                padding-left: 15px;
                margin-top: 5px;
            }
            li {
                margin-bottom: 8px;
                position: relative;
            }
            p {
                margin-bottom: 15px;
            }
            .formula {
                font-weight: 500;
            }
            .modal-header h2 {
                margin-bottom: 5px;
            }
        </style>
    `
};

// Función para abrir modales
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando modales de Geometría');
    const modalButtons = document.querySelectorAll('.abrir-modal');
    const modals = document.querySelectorAll('.modal-overlay');
    
    // Scroll to the top of the page, ensuring header and navigation are visible
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    // Scroll to the top section for a calm, focused experience
    const topSection = document.getElementById('teoria-geometria');
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